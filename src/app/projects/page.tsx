import Link from 'next/link';
import {ChevronRight} from 'lucide-react';
import {cn} from '@/lib/utils';
import {trackAnalytics} from "@/lib/analytics";
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {getAllProjectsWithGitHubData} from "@/lib/github";
import {Footer} from '@/components/footer/footer-section';
import {GroupedProjectCategory, Project} from "@/types/project";
import {getPersonalInfo, getSections, getSocialLinks} from "@/lib/hygraph";
import {NavigationSection} from '@/components/navigation/navigation-section';
import {CategorizedProjectsGridClient} from "@/components/projects/categorized-projects-grid-client";

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

	const groupedProjectsMap: Record<string, GroupedProjectCategory> = {};

	projects.forEach((project: Project) => {
		const {title, description, gitHubUrl, logoUrl, actionUrl, actionType, language, technologies, stargazers_count, featured, projectCategory, collaborators} = project;
		if (!projectCategory) {
			console.warn('Project missing category:', project);
			return;
		}

		const categoryKey = project.projectCategory.title?.toLowerCase();

		if (!categoryKey) {
			console.warn('Category missing title:', project.projectCategory);
			return;
		}

		if (!groupedProjectsMap[categoryKey]) {
			groupedProjectsMap[categoryKey] = {
				title: project.projectCategory.title,
				gradient: project.projectCategory.gradient,
				icon: project.projectCategory.icon,
				order: project.projectCategory.order,
				projects: [],
			};
		}

		groupedProjectsMap[categoryKey].projects.push({
			title, description, gitHubUrl, logoUrl, actionUrl, actionType, language, technologies, stargazers_count, collaborators, featured, projectCategory,
		});
	});

	const sortedCategories = Object.entries(groupedProjectsMap)
		.sort(([, a], [, b]) => a.order - b.order)
		.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {} as Record<string, GroupedProjectCategory>);

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

					{/*<ProjectsGrid projects={projects}/>*/}
					<CategorizedProjectsGridClient projects={sortedCategories}/>
				</div>
			</main>
			<Footer sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
		</>
	);
}

export default ProjectsPage;
