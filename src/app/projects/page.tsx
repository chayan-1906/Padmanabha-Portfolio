import Link from 'next/link';
import {ChevronRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {trackAnalytics} from "@/lib/analytics";
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {ProjectsGrid} from '@/components/projects-grid';
import {getAllProjectsWithGitHubData} from "@/lib/github";
import {Footer} from '@/components/footer/footer-section';
import {getPersonalInfo, getSections, getSocialLinks} from "@/lib/hygraph";
import {NavigationSection} from '@/components/navigation/navigation-section';

export const dynamic = 'force-dynamic';

async function ProjectsPage() {
	const [sections, personalInfo, socialLinks] = await Promise.all([
		getSections(ACTIVE_PORTFOLIO_ID),
		getPersonalInfo(ACTIVE_PORTFOLIO_ID),
		getSocialLinks(ACTIVE_PORTFOLIO_ID),
	]);
	if (!personalInfo) {
		return null;
	}

	const projects = await getAllProjectsWithGitHubData();

	// Track analytics server-side
	await trackAnalytics({pageUrl: '/projects'});

	return (
		<>
			<NavigationSection sections={sections} personalInfo={personalInfo}/>
			<main className={cn('min-h-screen pt-32 pb-20 px-6')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
				<div className={cn('max-w-7xl mx-auto')}>
					{/* Breadcrumb */}
					<div className={cn('mb-8')}>
						<nav className={cn('flex items-center space-x-2 text-sm')} style={{color: 'rgba(var(--color-foreground), 0.6)'}}>
							<Link href={'/'} className={cn('hover:text-blue-500 transition-colors')}>Home</Link>
							<ChevronRight size={16}/>
							<span style={{color: 'rgb(var(--color-foreground))'}}>Projects</span>
						</nav>
					</div>

					{/* Header */}
					<div className={cn('text-center mb-20')}>
						<h1 className={cn('text-5xl md:text-6xl font-bold mb-6 leading-16 md:leading-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
							All Projects
						</h1>
						<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
							Complete collection of {projects.length} featured projects showcasing expertise in modern web technologies
						</p>
					</div>

					<ProjectsGrid projects={projects}/>
				</div>
			</main>
			<Footer sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
		</>
	);
}

export default ProjectsPage;
