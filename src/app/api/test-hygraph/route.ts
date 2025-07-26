import {NextResponse} from 'next/server';
import {PortfolioId} from "@/constants";
import {getSocialLinks} from '@/lib/hygraph';

export async function GET() {
	try {
		const personalInfo = await getSocialLinks(PortfolioId.PORTFOLIO_I);

		if (!personalInfo) {
			return NextResponse.json({error: 'No personal info found'}, {status: 404});
		}

		return NextResponse.json({success: true, data: personalInfo});
	} catch (error) {
		console.error('API Error:', error);
		return NextResponse.json({
			error: 'Failed to fetch data',
			details: error instanceof Error ? error.message : 'Unknown error'
		}, {status: 500});
	}
}
