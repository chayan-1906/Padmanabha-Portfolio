import {cache} from "react";
import {cacheLife, cacheTag} from "next/cache";
import {Project} from "@/types/project";
import {Section} from "@/types/section";
import {PortfolioId} from "@/constants";
import {SkillItem} from "@/types/skills";
import {SocialLink} from "@/types/contact";
import {Education} from "@/types/education";
import {Experience} from "@/types/experiences";
import {Certification} from "@/types/certification";
import {PersonalInfo, TechStack} from "@/types/hero";
import {HYGRAPH_ENDPOINT, HYGRAPH_TOKEN} from "@/config/config";

const endpoint = HYGRAPH_ENDPOINT || '';
const token = HYGRAPH_TOKEN || '';

/** Query builders */
const createPersonalInfoQuery = (portfolioId: string) => `
    query GetPersonalInfo {
        personalInfos(where: { portfolioId: ${portfolioId} }) {
            name
            title
            description
            subtitle
            email
            phone
            gitHub
            linkedIn
            location
            company
            bio
            avatar {
                url
            }
            resumeUrl
        }
    }
`;

const createTechStacksQuery = (portfolioId: string) => `
	query GetTechStacks {
        techStacks(where: { portfolioId: ${portfolioId} }, orderBy: order_ASC) {
            name
            order
        }
    }
`;

const createSectionsQuery = (portfolioId: string) => `
    query GetSections {
        sections(where: { portfolioId: ${portfolioId} }, orderBy: order_ASC) {
            name
            title
            subtitle
            order
        }
    }
`;

const createSkillsQuery = (portfolioId: string) => `
    query GetSkills {
        skills(where: { portfolioId: ${portfolioId} }, first: 100, orderBy: order_ASC) {
            name
            level
            icon
            order
            category {
                title
                gradient
                color
                icon
                order
            }
        }
    }
`;

const createWorkExperiencesQuery = (portfolioId: string) => `
	query GetWorkExperiences {
		workExperiences(where: { portfolioId: ${portfolioId} }, orderBy: order_DESC) {
            company
            icon
            logo {
                url
            }
            location
            period
            color
            role {
                title
		        period
                type
                description
                achievements
            }
        }
	}
`;

const createEducationsQuery = (portfolioId: string) => `
	query GetEducations {
        educations(where: { portfolioId: ${portfolioId} }) {
            degree
            institution
            logo {
                id
                url
            }
            location
            period
            cgpa
            highlights
        }
    }
`;

const createFeaturedProjectsQuery = (portfolioId: string) => `
	query GetFeaturedProjects {
        projects(where: {portfolioId: ${portfolioId}, featured: true }, orderBy: order_DESC) {
            id
            title
            gitHubUrl
            logoUrl
            actionUrl
            actionType
            featured
            projectCategory {
                title
                icon
                gradient
                order
            }
        }
	}
`;

const createAllProjectsQuery = (portfolioId: string) => `
	query GetAllProjects {
		projects(where: { portfolioId: ${portfolioId} } orderBy: order_DESC) {
            id
            title
            gitHubUrl
            logoUrl
            actionUrl
            actionType
            featured
            projectCategory {
                title
                icon
                gradient
                order
            }
        }
	}
`;

const createCertificationsQuery = (portfolioId: string) => `
	query GetCertifications {
        certifications(where: { portfolioId: ${portfolioId} }) {
            name
            issuer
            date
            credentialId
            url
        }
    }
`;

const createSocialLinksQuery = (portfolioId: string) => `
	query GetSocialLinks {
        socialLinks(where: { portfolioId: ${portfolioId} }) {
            name
            url
            icon
        }
    }
`;


/** Fetch functions */
// hero
export const getPersonalInfo = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('personal-info');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createPersonalInfoQuery(portfolioId),
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch personal info');
        }

        const {data} = await response.json();
        return data.personalInfos[0] as PersonalInfo || null;
    } catch (error: any) {
        console.error('Error fetching personal info:', error);
        return null;
    }
});

// hero
export const getTechStacks = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('tech-stacks');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createTechStacksQuery(portfolioId),
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch tech stacks');
        }

        const {data} = await response.json();
        return data.techStacks as TechStack[] || [];
    } catch (error: any) {
        console.error('Error fetching tech stacks:', error);
        return [];
    }
});

export const getSections = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('sections');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createSectionsQuery(portfolioId),
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch sections');
        }

        const {data} = await response.json();
        return data.sections as Section[] || [];
    } catch (error) {
        console.error('Error fetching sections:', error);
        return [];
    }
});

// skills
export const getSkills = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('skills');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createSkillsQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch skills');
        }

        const {data} = await response.json();
        return data.skills as SkillItem[] || [];
    } catch (error: any) {
        console.error('Error fetching skills:', error);
        return [];
    }
});

export const getWorkExperiences = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('work-experiences');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createWorkExperiencesQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch work experiences');
        }

        const {data} = await response.json();
        // console.log('Work Experiences:', data);
        return data.workExperiences as Experience[] || [];
    } catch (error: any) {
        console.error('Error fetching work experiences:', error);
        return [];
    }
});

// educations
export const getEducations = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('educations');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createEducationsQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch educations');
        }

        const {data} = await response.json();
        // console.log('Educations:', data);
        return data.educations as Education[] || [];
    } catch (error: any) {
        console.error('Error fetching educations:', error);
        return [];
    }
});

// projects
export const getFeaturedProjects = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('featured-projects');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createFeaturedProjectsQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch featured projects');
        }

        const {data} = await response.json();
        return data.projects as Project[] || [];
    } catch (error: any) {
        console.error('Error fetching featured projects:', error);
        return [];
    }
});

// projects
export const getAllProjects = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('all-projects');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createAllProjectsQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch all projects');
        }

        const {data} = await response.json();
        return data.projects as Project[] || [];
    } catch (error: any) {
        console.error('Error fetching all projects:', error);
        return [];
    }
});

// certifications
export const getCertifications = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('certifications');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createCertificationsQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch certifications');
        }

        const {data} = await response.json();
        return data.certifications as Certification[] || [];
    } catch (error: any) {
        console.error('Error fetching certifications:', error);
        return [];
    }
});

// hero
export const getSocialLinks = cache(async (portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) => {
    "use cache";
    cacheTag('social-links');
    cacheLife('weeks');

    try {
        const response: Response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                query: createSocialLinksQuery(portfolioId)
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch social links');
        }

        const {data} = await response.json();
        return data.socialLinks as SocialLink[] || [];
    } catch (error: any) {
        console.error('Error fetching social links:', error);
        return [];
    }
});
