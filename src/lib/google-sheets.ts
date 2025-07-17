import fs from 'fs';
import path from 'path';
import {google} from 'googleapis';
import {CONTACT_SUBMISSION_SPREADSHEET_ID} from "@/constants";

export async function appendToSheet(data: { name: string; email: string; subject: string; message: string; }) {
	try {
		const credentialsPath = path.join(process.cwd(), 'google-credentials.json');
		const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

		const auth = new google.auth.GoogleAuth({
			credentials,
			scopes: ['https://www.googleapis.com/auth/spreadsheets'],
		});

		const sheets = google.sheets({version: 'v4', auth});

		const now = new Date();
		const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // UTC + 5:30
		const serialDate = (istTime.getTime() / 86400000) + 25569;

		await sheets.spreadsheets.values.append({
			spreadsheetId: CONTACT_SUBMISSION_SPREADSHEET_ID,
			range: 'Contact Form!A:E',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, data.name, data.email, data.subject, data.message]],
			},
		});

		return {success: true};
	} catch (error) {
		console.error('Error appending to sheet:', error);
		return {success: false, error};
	}
}
