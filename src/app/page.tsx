import {trackAnalytics} from '@/lib/analytics';
import {ACTIVE_PORTFOLIO_ID} from '@/constants';
import {CTASection} from '@/components/cta/cta-section';
import {Footer} from '@/components/footer/footer-section';
import {HeroSection} from '@/components/hero/hero-section';
import {AboutSection} from '@/components/about/about-section';
import {SkillsSection} from '@/components/skills/skills-section';
import {ContactSection} from '@/components/contact/contact-section';
import {ProjectsSection} from '@/components/projects/projects-section';
import {EducationSection} from '@/components/educations/education-section';
import {NavigationSection} from "@/components/navigation/navigation-section";
import {ExperienceSection} from '@/components/experiences/experience-section';
import {getFeaturedProjectsWithGitHubData, getGitHubUserStats} from "@/lib/github";
import {getPersonalInfo, getSections, getSkills, getSocialLinks} from '@/lib/hygraph';
import {CertificationsSection} from '@/components/certifications/certifications-section';

export const dynamic = 'force-dynamic';

async function Home() {
	const [featuredProjects, sections, skillsData, personalInfo, socialLinks] = await Promise.all([
		getFeaturedProjectsWithGitHubData(),
		getSections(ACTIVE_PORTFOLIO_ID),
		getSkills(ACTIVE_PORTFOLIO_ID),
		getPersonalInfo(ACTIVE_PORTFOLIO_ID),
		getSocialLinks(ACTIVE_PORTFOLIO_ID),
	]);

	if (!personalInfo) {
		return null;
	}

	const githubUsername = personalInfo.gitHub?.split('/').pop() || '';
	const githubStats = await getGitHubUserStats(githubUsername);

	// Track analytics server-side
	await trackAnalytics({pageUrl: '/'});

	return (
		<>
			<NavigationSection sections={sections} personalInfo={personalInfo}/>
			<main>
				<div id={'home'}>
					<HeroSection personalInfo={personalInfo} skillsData={skillsData} socialLinks={socialLinks}/>
				</div>
				<AboutSection sections={sections}/>
				<SkillsSection sections={sections} skillsData={skillsData}/>
				<CTASection title={'Need help with Next.js, React Native, or AI?'} buttons={[{label: "Let's Talk", reason: 'technical'}]}/>
				<ExperienceSection sections={sections} skillsData={skillsData}/>
				<CTASection title={'Looking for someone with this experience?'} buttons={[{label: 'View Availability', reason: 'job'}]}/>
				<EducationSection sections={sections}/>
				<ProjectsSection sections={sections} featuredProjects={featuredProjects}/>
				<CTASection
					title={'Impressed by my work?'}
					buttons={[
						{label: 'Discuss a Project', reason: 'collaboration'},
						{label: 'Just Say Hi', reason: 'networking'},
					]}
				/>
				{/*<AchievementSection sections={sections} githubStats={githubStats}/>*/}
				<CertificationsSection sections={sections}/>
				<ContactSection sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
			</main>
			<Footer sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
		</>
	);
}

export default Home;
