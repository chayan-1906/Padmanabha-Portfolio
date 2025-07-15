import {HeroSection} from "@/components/hero-section";
import {getFeaturedProjects, getGitHubRepositories} from "@/lib/github";

async function Home() {
	const repositories = await getGitHubRepositories();
	const featuredProjects = getFeaturedProjects(repositories);

	return (
		<main>
			<HeroSection/>
			{/* Projects section will use featuredProjects */}
		</main>
	);
}

export default Home;
