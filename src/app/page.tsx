import {Suspense} from "react";
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {Footer} from "@/components/footer/footer-section";
import {HeroSection} from "@/components/hero/hero-section";
import {AboutSection} from "@/components/about/about-section";
import {SkillsSection} from "@/components/skills/skills-section";
import {ContactSection} from "@/components/contact/contact-section";
import {ProjectsSection} from "@/components/projects/projects-section";
import {AnalyticsTracker} from "@/components/analytics/analytics-tracker";
import {EducationSection} from "@/components/educations/education-section";
import {NavigationSection} from "@/components/navigation/navigation-section";
import {ExperienceSection} from "@/components/experiences/experience-section";
import {getFeaturedProjectsWithGitHubData, getGitHubUserStats} from "@/lib/github";
import {getPersonalInfo, getSections, getSkills, getSocialLinks} from "@/lib/hygraph";
import {CertificationsSection} from "@/components/certifications/certifications-section";

async function Home() {
    return (
        <Suspense fallback={<div>TODO: Loading...</div>}>
            <HomeWrapper/>
        </Suspense>
    );
}

async function HomeWrapper() {
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

    const githubUsername: string = personalInfo.gitHub?.split('/').pop() || '';
    const githubStats = await getGitHubUserStats(githubUsername);

    return (
        <>
            <AnalyticsTracker pageUrl={'/'}/>
            <NavigationSection sections={sections} personalInfo={personalInfo}/>
            <main>
                <div id={'home'}>
                    <HeroSection personalInfo={personalInfo} skillsData={skillsData} socialLinks={socialLinks}/>
                </div>

                <AboutSection sections={sections}/>

                <SkillsSection sections={sections} skillsData={skillsData}/>

                <ExperienceSection sections={sections} skillsData={skillsData}/>

                <EducationSection sections={sections}/>

                <ProjectsSection sections={sections} featuredProjects={featuredProjects}/>

                {/*<AchievementSection sections={sections} githubStats={githubStats}/>*/}

                <CertificationsSection sections={sections}/>

                <ContactSection sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
            </main>
            <Footer sections={sections} socialLinks={socialLinks} personalInfo={personalInfo}/>
        </>
    );
}

export default Home;
