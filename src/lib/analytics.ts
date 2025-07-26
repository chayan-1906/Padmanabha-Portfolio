import {google} from 'googleapis';
import {headers} from 'next/headers';
import {ACTIVE_PORTFOLIO_ID, CONTACT_SUBMISSION_SPREADSHEET_ID} from '@/constants';

async function trackAnalytics({pageUrl}: { pageUrl: string }) {
	'use server';

	try {
		const headersList = await headers();
		const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || headersList.get('cf-connecting-ip') || 'unknown';

		const userAgent = headersList.get('user-agent') || 'unknown';

		if (!process.env.GOOGLE_CREDENTIALS) return;

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
			range: 'Website Analytics!A:G',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, ip, country, city, pageUrl, ACTIVE_PORTFOLIO_ID, userAgent]],
			},
		});
	} catch (error) {
		console.error('Analytics error:', error);
	}
}

export {trackAnalytics};
