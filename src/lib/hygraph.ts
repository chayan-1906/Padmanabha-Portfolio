import {GraphQLClient} from 'graphql-request';
import {PortfolioId} from "@/constants";
import {HYGRAPH_ENDPOINT, HYGRAPH_TOKEN} from "@/config/config";

const endpoint = HYGRAPH_ENDPOINT || '';
const token = HYGRAPH_TOKEN || '';

export const hygraph = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${token}`,
	},
});

// Query builders
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
    skills(where: { portfolioId: ${portfolioId} }) {
      name
      level
      category
      icon
    }
  }
`;

const createWorkExperiencesQuery = (portfolioId: string) => `
  query GetWorkExperiences {
    workExperiences(where: { portfolioId: ${portfolioId} }) {
      company
      icon
      logo {
        url
      }
      location
      period
      color
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

const createTechStacksQuery = (portfolioId: string) => `
  query GetTechStacks {
    techStacks(where: { portfolioId: ${portfolioId} }, orderBy: order_ASC) {
      name
      order
    }
  }
`;


/** Fetch functions */
// hero
export async function getPersonalInfo(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getPersonalInfo called');
	try {
		const query = createPersonalInfoQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).personalInfos[0] || null;
	} catch (error) {
		console.error('Error fetching personal info:', error);
		return null;
	}
}

// hero
export async function getTechStacks(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getTechStacks called');
	try {
		const query = createTechStacksQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).techStacks || [];
	} catch (error) {
		console.error('Error fetching tech stacks:', error);
		return [];
	}
}

export async function getSections(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getSections called');
	try {
		const query = createSectionsQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).sections || [];
	} catch (error) {
		console.error('Error fetching sections:', error);
		return [];
	}
}

// skills
export async function getSkills(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getSkills called');
	try {
		const query = createSkillsQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).skills || [];
	} catch (error) {
		console.error('Error fetching skills:', error);
		return [];
	}
}

export async function getWorkExperiences(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getWorkExperiences called');
	try {
		const query = createWorkExperiencesQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).workExperiences || [];
	} catch (error) {
		console.error('Error fetching work experiences:', error);
		return [];
	}
}

// education
export async function getEducations(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getEducations called');
	try {
		const query = createEducationsQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).educations || [];
	} catch (error) {
		console.error('Error fetching educations:', error);
		return [];
	}
}

// certifications
export async function getCertifications(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getCertifications called');
	try {
		const query = createCertificationsQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).certifications || [];
	} catch (error) {
		console.error('Error fetching certifications:', error);
		return [];
	}
}

// hero
export async function getSocialLinks(portfolioId: PortfolioId = PortfolioId.PORTFOLIO_I) {
	console.log('getSocialLinks called');
	try {
		const query = createSocialLinksQuery(portfolioId);
		const data = await hygraph.request(query);
		return (data as any).socialLinks || [];
	} catch (error) {
		console.error('Error fetching social links:', error);
		return [];
	}
}
