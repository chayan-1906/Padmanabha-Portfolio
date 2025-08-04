import {trackAnalytics} from '@/lib/analytics';
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {Footer} from '@/components/footer/footer-section';
import {HeroSection} from '@/components/hero/hero-section';
import {AboutSection} from '@/components/about/about-section';
import {ProjectsSection} from '@/components/projects-section';
import {SkillsSection} from '@/components/skills/skills-section';
import {ContactSection} from '@/components/contact/contact-section';
import {EducationSection} from '@/components/educations/education-section';
import {NavigationSection} from "@/components/navigation/navigation-section";
import {ExperienceSection} from '@/components/experiences/experience-section';
import {getEnhancedGitHubRepositories, getTopFeaturedProjects} from '@/lib/github';
import {getPersonalInfo, getSections, getSkills, getSocialLinks} from '@/lib/hygraph';
import {CertificationsSection} from '@/components/certifications/certifications-section';

export const dynamic = 'force-dynamic';

async function Home() {
	const [repositories, sections, skillsData, personalInfo, socialLinks] = await Promise.all([
		getEnhancedGitHubRepositories(),
		getSections(ACTIVE_PORTFOLIO_ID),
		getSkills(ACTIVE_PORTFOLIO_ID),
		getPersonalInfo(ACTIVE_PORTFOLIO_ID),
		getSocialLinks(ACTIVE_PORTFOLIO_ID),
	]);

	if (!personalInfo) {
		return null;
	}

	const topFeaturedProjects = getTopFeaturedProjects(repositories);

	// Track analytics server-side
	await trackAnalytics({pageUrl: '/'});

	return (
		<>
			<NavigationSection sections={sections} personalInfo={personalInfo}/>
			<main>
				<div id={'home'}>
					<HeroSection personalInfo={personalInfo} socialLinks={socialLinks}/>
				</div>
				<AboutSection sections={sections}/>
				<SkillsSection sections={sections} skillsData={skillsData}/>
				<ExperienceSection sections={sections} skillsData={skillsData}/>
				<EducationSection sections={sections}/>
				<ProjectsSection projects={topFeaturedProjects}/>
				<CertificationsSection sections={sections}/>
				<ContactSection sections={sections} socialLinks={socialLinks}/>
			</main>
			<Footer sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
		</>
	);
}

export default Home;
