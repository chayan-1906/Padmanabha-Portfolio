import {NextRequest, NextResponse} from 'next/server';
import {google} from 'googleapis';
import {CONTACT_SUBMISSION_SPREADSHEET_ID} from '@/constants';

export async function middleware(request: NextRequest) {
	// Only track page visits, not API calls or assets
	if (request.nextUrl.pathname.startsWith('/api') ||
		request.nextUrl.pathname.startsWith('/_next') ||
		request.nextUrl.pathname.includes('.')) {
		return NextResponse.next();
	}

	// Skip in development
	if (process.env.NODE_ENV === 'development') {
		return NextResponse.next();
	}

	const ip = request.headers.get('x-forwarded-for') ||
		request.headers.get('x-real-ip') ||
		request.headers.get('cf-connecting-ip') ||
		'unknown';

	// Skip local IPs
	if (ip === 'unknown' || ip === '::1' || ip.startsWith('::ffff:192.168') || ip.startsWith('192.168')) {
		return NextResponse.next();
	}

	const userAgent = request.headers.get('user-agent') || 'unknown';

	// Track analytics asynchronously
	trackAnalytics(ip, userAgent).catch(error =>
		console.error('Analytics tracking error:', error)
	);

	return NextResponse.next();
}

async function trackAnalytics(ip: string, userAgent: string) {
	try {
		if (!process.env.GOOGLE_CREDENTIALS) {
			console.error('GOOGLE_CREDENTIALS environment variable required');
			return;
		}

		const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});

		const sheets = google.sheets({version: 'v4', auth});

		const now = new Date();
		const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
		const serialDate = (istTime.getTime() / 86400000) + 25569;

		let country = 'unknown';
		let city = 'unknown';

		try {
			const locationResponse = await fetch(`http://ip-api.com/json/${ip}`);
			const locationData = await locationResponse.json();
			country = locationData.country || 'unknown';
			city = locationData.city || 'unknown';
		} catch (error) {
			console.error('Location fetch error:', error);
		}

		await sheets.spreadsheets.values.append({
			spreadsheetId: CONTACT_SUBMISSION_SPREADSHEET_ID,
			range: 'Website Analytics!A:E',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, ip, country, city, userAgent]],
			},
		});
	} catch (error) {
		console.error('Analytics error:', error);
	}
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico).*)',
	],
};
