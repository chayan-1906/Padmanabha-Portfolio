import {Footer} from '@/components/footer';
import {trackAnalytics} from '@/lib/analytics';
import {Navigation} from '@/components/navigation';
import {HeroSection} from '@/components/hero/hero-section';
import {AboutSection} from '@/components/about/about-section';
import {SkillsSection} from '@/components/skills/skills-section';
import {ContactSection} from '@/components/contact-section';
import {ProjectsSection} from '@/components/projects-section';
import {EducationSection} from '@/components/educations/education-section';
import {ExperienceSection} from '@/components/experiences/experience-section';
import {CertificationsSection} from '@/components/certifications/certifications-section';
import {getEnhancedGitHubRepositories, getTopFeaturedProjects} from '@/lib/github';

export const dynamic = 'force-dynamic';

async function Home() {
	const repositories = await getEnhancedGitHubRepositories();
	const topFeaturedProjects = getTopFeaturedProjects(repositories);

	// Track analytics server-side
	await trackAnalytics({pageUrl: '/'});

	return (
		<>
			<Navigation/>
			<main>
				<div id={'home'}>
					<HeroSection/>
				</div>
				<AboutSection/>
				<SkillsSection/>
				<ExperienceSection/>
				<EducationSection/>
				<ProjectsSection projects={topFeaturedProjects}/>
				<CertificationsSection/>
				<ContactSection/>
			</main>
			<Footer/>
		</>
	);
}

export default Home;
