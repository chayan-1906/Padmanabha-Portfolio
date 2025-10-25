import {google} from 'googleapis';
import {GOOGLE_CREDENTIALS} from "@/config/config";
import {CONTACT_SUBMISSION_SPREADSHEET_ID} from "@/constants";

async function appendToSheet(data: { name: string; email: string; company: string; reason: string; subject: string; message: string; referrer: string; ip: string; }) {
	try {
		const credentials = JSON.parse(GOOGLE_CREDENTIALS!);

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
			range: 'Contact Form!A:I',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, data.name, data.email, data.company, data.reason, data.subject, data.message, data.referrer, data.ip]],
			},
		});

		return {success: true};
	} catch (error) {
		console.error('Error appending to sheet:', error);
		return {success: false, error};
	}
}

export {appendToSheet};
