import {google} from 'googleapis';
import {headers} from 'next/headers';
import {GOOGLE_CREDENTIALS} from "@/config/config";
import {ACTIVE_PORTFOLIO_ID, CONTACT_SUBMISSION_SPREADSHEET_ID} from '@/constants';

function parseReferrer(refererUrl: string | null): string {
	if (!refererUrl) return 'Direct Visit';

	try {
		const url = new URL(refererUrl);
		const hostname = url.hostname.toLowerCase();

		if (hostname.includes('linkedin.com')) return 'LinkedIn';

		if (hostname.includes('github.com')) return 'GitHub';

		if (hostname.includes('twitter.com') || hostname.includes('x.com')) return 'Twitter/X';

		if (hostname.includes('facebook.com')) return 'Facebook';

		if (hostname.includes('instagram.com')) return 'Instagram';

		if (hostname.includes('google.com') || hostname.includes('google.')) return 'Google Search';
		if (hostname.includes('bing.com')) return 'Bing Search';
		if (hostname.includes('yahoo.com')) return 'Yahoo Search';
		if (hostname.includes('duckduckgo.com')) return 'DuckDuckGo Search';
		if (hostname.includes('baidu.com')) return 'Baidu Search';

		if (hostname.includes('reddit.com')) return 'Reddit';

		if (hostname.includes('dev.to')) return 'Dev.to';

		if (hostname.includes('medium.com')) return 'Medium';

		if (hostname.includes('stackoverflow.com')) return 'Stack Overflow';

		return hostname.replace('www.', '');
	} catch (error: any) {
		return 'Unknown';
	}
}

async function trackAnalytics({pageUrl}: { pageUrl: string }) {
	'use server';

	try {
		const headersList = await headers();
		const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || headersList.get('cf-connecting-ip') || 'unknown';

		const userAgent = headersList.get('user-agent') || 'unknown';
		const refererUrl = headersList.get('referer') || headersList.get('referrer');
		const referrer = parseReferrer(refererUrl);

		if (!GOOGLE_CREDENTIALS) return;

		const credentials = JSON.parse(GOOGLE_CREDENTIALS);
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
		let region = 'unknown';
		let postalCode = 'unknown';
		let isp = 'unknown';
		let org = 'unknown';
		let as = 'unknown';
		let timezone = 'unknown';

		try {
			const locationResponse = await fetch(`http://ip-api.com/json/${ip}?fields=66846719`);
			const locationData = await locationResponse.json();
			country = locationData.country || 'unknown';
			city = locationData.city || 'unknown';
			region = locationData.regionName || locationData.region || 'unknown';
			postalCode = locationData.zip || 'unknown';
			isp = locationData.isp || 'unknown';
			org = locationData.org || 'unknown';
			as = locationData.as || 'unknown';
			timezone = locationData.timezone || 'unknown';
		} catch (error: any) {
			console.error('Location fetch error:', error);
		}

		await sheets.spreadsheets.values.append({
			spreadsheetId: CONTACT_SUBMISSION_SPREADSHEET_ID,
			range: 'Website Analytics!A:N',
			valueInputOption: 'USER_ENTERED',
			requestBody: {
				values: [[serialDate, ip, country, region, city, postalCode, isp, org, as, timezone, pageUrl, referrer, ACTIVE_PORTFOLIO_ID, userAgent]],
			},
		});
	} catch (error: any) {
		console.error('Analytics error:', error);
	}
}

export {trackAnalytics};
