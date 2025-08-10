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
        sections(where: { portfolioId: ${portfolioId} }) {
            name
            title
            subtitle
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
export async function getPersonalInfo(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getPersonalInfo called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createPersonalInfoQuery(portfolioId),
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch personal info');
		}

		const {data} = await response.json();
		return data.personalInfos[0] as PersonalInfo || null;
	} catch (error) {
		console.error('Error fetching personal info:', error);
		return null;
	}
}

// hero
export async function getTechStacks(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getTechStacks called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createTechStacksQuery(portfolioId),
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch tech stacks');
		}

		const {data} = await response.json();
		return data.techStacks as TechStack[] || [];
	} catch (error) {
		console.error('Error fetching tech stacks:', error);
		return [];
	}
}

export async function getSections(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getSections called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createSectionsQuery(portfolioId),
			}),
			next: {revalidate: 3600},
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
}

// skills
export async function getSkills(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getSkills called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createSkillsQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch skills');
		}

		const {data} = await response.json();
		return data.skills as SkillItem[] || [];
	} catch (error) {
		console.error('Error fetching skills:', error);
		return [];
	}
}

export async function getWorkExperiences(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getWorkExperiences called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createWorkExperiencesQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch work experiences');
		}

		const {data} = await response.json();
		return data.workExperiences as Experience[] || [];
	} catch (error) {
		console.error('Error fetching work experiences:', error);
		return [];
	}
}

// educations
export async function getEducations(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getEducations called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createEducationsQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch educations');
		}

		const {data} = await response.json();
		return data.educations as Education[] || [];
	} catch (error) {
		console.error('Error fetching educations:', error);
		return [];
	}
}

// projects
export async function getFeaturedProjects(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 geProjects called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createFeaturedProjectsQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch featured projects');
		}

		const {data} = await response.json();
		return data.projects as Project[] || [];
	} catch (error) {
		console.error('Error fetching featured projects:', error);
		return [];
	}
}

// projects
export async function getAllProjects(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getAllProjects called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createAllProjectsQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch all projects');
		}

		const {data} = await response.json();
		return data.projects as Project[] || [];
	} catch (error) {
		console.error('Error fetching all projects:', error);
		return [];
	}
}

// certifications
export async function getCertifications(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getCertifications called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createCertificationsQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch certifications');
		}

		const {data} = await response.json();
		return data.certifications as Certification[] || [];
	} catch (error) {
		console.error('Error fetching certifications:', error);
		return [];
	}
}

// hero
export async function getSocialLinks(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('🔥 getSocialLinks called - cache miss');
	try {
		const response = await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify({
				query: createSocialLinksQuery(portfolioId)
			}),
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch social links');
		}

		const {data} = await response.json();
		return data.socialLinks as SocialLink[] || [];
	} catch (error) {
		console.error('Error fetching social links:', error);
		return [];
	}
}
