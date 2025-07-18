import {Footer} from '@/components/footer';
import {Navigation} from '@/components/navigation';
import {HeroSection} from '@/components/hero-section';
import {AboutSection} from '@/components/about-section';
import {SkillsSection} from '@/components/skills-section';
import {ContactSection} from '@/components/contact-section';
import {ProjectsSection} from '@/components/projects-section';
import {ExperienceSection} from '@/components/experience-section';
import {CertificationsSection} from '@/components/certifications-section';
import {getGitHubRepositories, getTopFeaturedProjects} from '@/lib/github';

async function Home() {
	const repositories = await getGitHubRepositories();
	const topFeaturedProjects = getTopFeaturedProjects(repositories);

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
				<ProjectsSection projects={topFeaturedProjects}/>
				<CertificationsSection/>
				<ContactSection/>
			</main>
			<Footer/>
		</>
	);
}

export default Home;
