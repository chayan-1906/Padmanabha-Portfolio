import {google} from 'googleapis';
import {NextRequest, NextResponse} from 'next/server';
import {CONTACT_SUBMISSION_SPREADSHEET_ID} from "@/constants";

export async function POST(request: NextRequest) {
	try {
		const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS || '{}');

		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});
		console.log('Auth created');

		const sheets = google.sheets({version: 'v4', auth});
		console.log('Sheets API initialized');

		const now = new Date();
		const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
		const serialDate = (istTime.getTime() / 86400000) + 25569;

		const ip = request.headers.get('x-forwarded-for') ||
			request.headers.get('x-real-ip') ||
			request.headers.get('cf-connecting-ip') ||
			'unknown';
		const userAgent = request.headers.get('user-agent') || 'unknown';

		console.log('IP detected:', ip);
		console.log('User Agent:', userAgent);

		let country = 'unknown';
		let city = 'unknown';

		if (ip !== 'unknown' && ip !== '::1' && !ip.startsWith('::ffff:192.168') && !ip.startsWith('192.168')) {
			try {
				console.log('Fetching location for IP:', ip);
				const locationResponse = await fetch(`http://ip-api.com/json/${ip}`);
				const locationData = await locationResponse.json();
				console.log('Location data:', locationData);
				country = locationData.country || 'unknown';
				city = locationData.city || 'unknown';
			} catch (error) {
				console.error('Location fetch error:', error);
			}
		}

		console.log('Appending to spreadsheet...');
		await sheets.spreadsheets.values.append({
			spreadsheetId: CONTACT_SUBMISSION_SPREADSHEET_ID,
			range: 'Website Analytics!A:E',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, ip, country, city, userAgent]],
			},
		});
		console.log('Spreadsheet append successful');

		return NextResponse.json({success: true});
	} catch (error: any) {
		console.error('Analytics error:', error);
		console.error('Error details:', JSON.stringify(error, null, 2));
		console.error('Error message:', error.message);
		console.error('Error stack:', error.stack);

		return NextResponse.json({
			error: 'Failed',
			details: error.message,
			type: error.constructor.name,
		}, {status: 500});
	}
}
