import {Navigation} from '@/components/navigation';
import {HeroSection} from '@/components/hero-section';
import {AboutSection} from '@/components/about-section';
import {SkillsSection} from '@/components/skills-section';
import {ExperienceSection} from '@/components/experience-section';
import {ProjectsSection} from '@/components/projects-section';
import {ContactSection} from '@/components/contact-section';
import {Footer} from '@/components/footer';
import {getFeaturedProjects, getGitHubRepositories} from '@/lib/github';

async function Home() {
	const repositories = await getGitHubRepositories();
	const featuredProjects = getFeaturedProjects(repositories);

	return (
		<>
			<Navigation/>
			<main>
				<div id="home">
					<HeroSection/>
				</div>
				<AboutSection/>
				<SkillsSection/>
				<ExperienceSection/>
				<ProjectsSection projects={featuredProjects}/>
				<ContactSection/>
			</main>
			<Footer/>
		</>
	);
}

export default Home;