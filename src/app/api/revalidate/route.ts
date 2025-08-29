import {NextRequest} from 'next/server';
import {revalidatePath, revalidateTag} from 'next/cache';
import {REVALIDATE_SECRET} from '@/config/config';

export async function POST(request: NextRequest) {
	try {
		const secret = request.nextUrl.searchParams.get('secret');

		if (!secret || secret !== REVALIDATE_SECRET) {
			console.log('❌ Invalid or missing secret for revalidation');
			return Response.json({message: 'Invalid secret'}, {status: 401});
		}

		console.log('✅ Valid revalidation request received');

		// Revalidate all portfolio pages
		revalidatePath('/');
		revalidatePath('/projects');

		// Revalidate by cache tags
		revalidateTag('personal-info');
		revalidateTag('tech-stacks');
		revalidateTag('sections');
		revalidateTag('skills');
		revalidateTag('work-experiences');
		revalidateTag('educations');
		revalidateTag('featured-projects');
		revalidateTag('all-projects');
		revalidateTag('certifications');
		revalidateTag('social-links');

		console.log('✅ Cache revalidated successfully');

		return Response.json({
			revalidated: true,
			timestamp: new Date().toISOString(),
		});
	} catch (error: any) {
		console.error('❌ Revalidation error:', error);
		return Response.json(
			{message: 'Revalidation failed', error: String(error)},
			{status: 500},
		);
	}
}
