import Sheets = sheets_v4.Sheets;
import {headers} from "next/headers";
import {google, sheets_v4} from "googleapis";
import {ReadonlyHeaders} from "next/dist/server/web/spec-extension/adapters/headers";
import {GOOGLE_CREDENTIALS} from "@/config/config";
import {ACTIVE_PORTFOLIO_ID, CONTACT_SUBMISSION_SPREADSHEET_ID} from "@/constants";

function parseReferrer(refererUrl: string | null, currentHostname?: string): string {
    if (!refererUrl) return 'Direct Visit';

    try {
        const url = new URL(refererUrl);
        const hostname: string = url.hostname.toLowerCase();

        if (currentHostname && hostname === currentHostname.toLowerCase()) {
            return 'Direct Visit';
        }

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
    "use server";

    try {
        const headersList: ReadonlyHeaders = await headers();
        const ip: string = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || headersList.get('cf-connecting-ip') || 'unknown';

        const userAgent: string = headersList.get('user-agent') || 'unknown';
        const currentHostname: string = headersList.get('host') || '';
        const refererUrl: string | null = headersList.get('referer') || headersList.get('referrer');
        const referrer: string = parseReferrer(refererUrl, currentHostname);

        if (!GOOGLE_CREDENTIALS) return;

        const credentials = JSON.parse(GOOGLE_CREDENTIALS);
        const auth = new google.auth.GoogleAuth({
            credentials,
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const sheets: Sheets = google.sheets({version: 'v4', auth});

        const now = new Date();
        const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
        const serialDate: number = (istTime.getTime() / 86400000) + 25569;

        let country: string = 'unknown';
        let city: string = 'unknown';
        let region: string = 'unknown';
        let postalCode: string = 'unknown';
        let isp: string = 'unknown';
        let org: string = 'unknown';
        let as: string = 'unknown';
        let timezone: string = 'unknown';

        try {
            const locationResponse: Response = await fetch(`http://ip-api.com/json/${ip}?fields=66846719`);
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
