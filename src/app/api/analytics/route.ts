import {NextRequest, NextResponse} from 'next/server';
import {google} from 'googleapis';
import path from 'path';
import fs from 'fs';

const SPREADSHEET_ID = '1Yvqssmy6c7LVbg7M_-dDbMQ-1_OOEJyo1N-DpTbV7dg';

export async function POST(request: NextRequest) {
	try {
		const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
		const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});

		const sheets = google.sheets({version: 'v4', auth});

		const now = new Date();
		const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
		const serialDate = (istTime.getTime() / 86400000) + 25569;

		const ip = request.headers.get('x-forwarded-for') || 'unknown';
		const userAgent = request.headers.get('user-agent') || 'unknown';

		let country = 'unknown';
		let city = 'unknown';

		if (ip !== 'unknown' && ip !== '::1') {
			try {
				const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
				const locationData = await locationResponse.json();
				country = locationData.country_name || 'unknown';
				city = locationData.city || 'unknown';
			} catch (error) {
				console.error('Location fetch error:', error);
			}
		}

		await sheets.spreadsheets.values.append({
			spreadsheetId: SPREADSHEET_ID,
			range: 'Website Analytics!A:E',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, ip, country, city, userAgent]],
			},
		});

		return NextResponse.json({success: true});
	} catch (error) {
		console.error('Analytics error:', error);
		return NextResponse.json({error: 'Failed'}, {status: 500});
	}
}
