import {appendToSheet} from '@/lib/google-sheets';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();

		const {name, email, subject, message} = data;

		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{error: 'All fields are required'},
				{status: 400},
			);
		}

		const result = await appendToSheet({name, email, subject, message});

		if (result.success) {
			// Webhook to trigger email notification
			try {
				await fetch('https://script.google.com/macros/s/AKfycbwswVIg1DsKJtdfl5jOxxoqiOpy_vNzZpU87T4XDZWTYKkmS8MUoD9JO90IXjtDJPBGCA/exec', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({name, email, subject, message}),
				});
			} catch (webhookError) {
				console.error('Webhook error:', webhookError);
			}

			return NextResponse.json({message: 'Form submitted successfully'});
		} else {
			return NextResponse.json(
				{error: 'Failed to submit form'},
				{status: 500},
			);
		}
	} catch (error: any) {
		console.error('API Error:', error);
		return NextResponse.json(
			{error: 'Internal server error'},
			{status: 500},
		);
	}
}
