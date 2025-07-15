import {GitHubRepo} from "@/types/github";
import {PERSONAL_INFO} from "@/constants";

async function getGitHubRepositories(): Promise<GitHubRepo[]> {
	try {
		const response = await fetch(`https://api.github.com/users/${PERSONAL_INFO.github.split('/').pop()}/repos?per_page=100`, {
			headers: {
				'Accept': 'application/vnd.github.v3+json',
			},
			next: {revalidate: 3600},
		});

		if (!response.ok) {
			throw new Error('Failed to fetch GitHub repositories');
		}

		const repos: GitHubRepo[] = await response.json();

		return repos
			.filter(repo => !repo.fork && !repo.private)
			.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
	} catch (error) {
		console.error('Error fetching GitHub repositories:', error);
		return [];
	}
}

function getFeaturedProjects(repositories: GitHubRepo[]): GitHubRepo[] {
	// Define priority projects that should be featured
	const priorityProjects = [
		'Jira',
		'DocMingle-Next.js',
		'Busgo-React-Native',
		'BusGo-Node.js',
		'Music-Aceternity-Next.js',
		'School-Management-Next.js',
		'Foodies-React-Native',
		'Food-App-Node.js',
		'Mstry-Message-Next.js',
		'frame-phones',
		'Interior-Next.js',
		'35-foodies',
		'MF-Stx-Cal-Next.js',
		'Airbnb-Next.js',
		'ai-radio',
		'spotify_ui',
		'Rapido-Expo',
		'Rapido-Server',
		'Uber-Expo',
		'Blinkit-Expo',
		'Blinkit-Server',
		'aora',
		'Virtual-R',
		'spring-ecommerce-app-flutter',
		'spring-ecommerce-app-java',
		'nike-landing-page-ui',
		'travel-ui-expo-router',
		'netflix_ui',
		'travel-ui',
		'React-Native-Wallet-Node.js',
		'Anime-Infinite-Scrolling-Next.js',
		'pokemon-pwa',
		'fitclub-gym-ui-react',
		'kanban-trello-board-ui-react',
		'online-education-website-ui',
		'github-search-users',
		'comfy-sloth',
		'material-ui-demo',
		'movieist-react',
		'user-management-system-fullstack',
		'spring-boot-todo-mongodb',
		'spring-boot-websocket',
		'spring-product-management-app-react',
		'spring-product-management-app-java',
		'secret-keeper',
		'google-sign-in-spring-boot',
		'facebook-sign-in-spring-boot',
		'phone-no-authentication-spring-boot',
		'spring-data-jpa-course-java-guides',
		'Freelance-Foundry',
		'Infinite-Scrolling-Pagination-Firestore',
		'airtable-apis'
	];

	// Get featured projects by topics first
	const featuredByTopics = repositories.filter(repo =>
		repo.topics.includes('featured') ||
		repo.topics.includes('nextjs15') ||
		repo.topics.includes('react19') ||
		repo.topics.includes('nextjs15-typescript') ||
		repo.topics.includes('typescript') ||
		repo.topics.includes('react-native') ||
		repo.topics.includes('flutter') ||
		repo.topics.includes('mobile-app') ||
		repo.topics.includes('full-stack') ||
		repo.topics.includes('nodejs') ||
		repo.topics.includes('backend') ||
		repo.topics.includes('frontend')
	);

	// Get projects by priority names
	const featuredByName = repositories.filter(repo =>
		priorityProjects.includes(repo.name)
	);

	// Combine and deduplicate
	const allFeatured = [...featuredByTopics, ...featuredByName];
	const uniqueFeatured = allFeatured.filter((repo, index, self) =>
		index === self.findIndex(r => r.id === repo.id)
	);

	// Sort by criteria: stars, recent updates, and specific priorities
	const sortedFeatured = uniqueFeatured.sort((a, b) => {
		// Priority boost for specific projects
		const aIsPriority = priorityProjects.slice(0, 10).includes(a.name);
		const bIsPriority = priorityProjects.slice(0, 10).includes(b.name);

		if (aIsPriority && !bIsPriority) return -1;
		if (!aIsPriority && bIsPriority) return 1;

		// Then by stars
		if (a.stargazers_count !== b.stargazers_count) {
			return b.stargazers_count - a.stargazers_count;
		}

		// Then by recent updates
		return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
	});

	return sortedFeatured.slice(0, 6);
}

export {getGitHubRepositories, getFeaturedProjects};