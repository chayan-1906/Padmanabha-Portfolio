import {Suspense} from "react";
import {SocialLink} from "@/types/contact";
import {ACTIVE_PORTFOLIO_ID} from "@/constants";
import {Footer} from "@/components/footer/footer-section";
import {HeroSection} from "@/components/hero/hero-section";
import {HomeLoading} from "@/components/loading/HomeLoading";
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
        <Suspense fallback={<HomeLoading/>}>
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
    // const githubStats = await getGitHubUserStats(githubUsername);

    const siteUrl: string = 'https://padmanabha-portfolio.vercel.app';

    const sameAsLinks: string[] = socialLinks
        .filter((link: SocialLink) => link.name !== 'Email' && link.name !== 'Phone')
        .map((link: SocialLink) => link.url);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                'name': `${personalInfo.name} - Portfolio`,
                'url': siteUrl,
                'description': personalInfo.description,
            },
            {
                '@type': 'ProfilePage',
                '@id': `${siteUrl}/#profilepage`,
                'url': siteUrl,
                'name': `${personalInfo.name} - ${personalInfo.title}`,
                'isPartOf': {'@id': `${siteUrl}/#website`},
                'mainEntity': {'@id': `${siteUrl}/#person`},
            },
            {
                '@type': 'Person',
                '@id': `${siteUrl}/#person`,
                'name': personalInfo.name,
                'jobTitle': personalInfo.title,
                'description': personalInfo.description,
                'email': personalInfo.email,
                'telephone': personalInfo.phone,
                'url': siteUrl,
                'image': personalInfo.avatar?.url,
                'address': {
                    '@type': 'PostalAddress',
                    'addressLocality': personalInfo.location,
                },
                'sameAs': sameAsLinks,
            },
        ],
    };

    return (
        <>
            <AnalyticsTracker pageUrl={'/'}/>
            <script
                type={'application/ld+json'}
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                }}
            />
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
