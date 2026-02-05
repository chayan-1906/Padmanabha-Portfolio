import {NextRequest} from "next/server";
import {revalidatePath, updateTag} from "next/cache";
import {REVALIDATE_SECRET} from "@/config/config";

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
		updateTag('personal-info');
		updateTag('tech-stacks');
		updateTag('sections');
		updateTag('skills');
		updateTag('work-experiences');
		updateTag('educations');
		updateTag('featured-projects');
		updateTag('all-projects');
		updateTag('certifications');
		updateTag('social-links');
		updateTag('github-repos');
		updateTag('github-user-stats');

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
