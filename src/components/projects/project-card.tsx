'use client';

import {motion, Variants} from 'framer-motion';
import {FaExternalLinkAlt, FaGithub, FaUsers} from 'react-icons/fa';
import {GitHubRepo} from '@/types/github';
import {COLLABORATORS} from '@/constants';
import {cn} from '@/lib/utils';

interface ProjectCardProps {
	project: GitHubRepo;
	index: number;
}

function ProjectCard({project, index}: ProjectCardProps) {
	const getTechColor = (tech: string) => {
		const colors: { [key: string]: string } = {
			// Web Development & Frontend
			'nextjs15': 'from-gray-800 to-black',
			'tailwindcss': 'from-cyan-400 to-blue-600',
			'tainwindcss': 'from-cyan-400 to-blue-600', // typo variant
			'framer-motion': 'from-purple-500 to-pink-600',
			'approuter': 'from-gray-700 to-gray-900',
			'app-router': 'from-gray-700 to-gray-900',
			'typescript': 'from-blue-500 to-blue-700',
			'react-native': 'from-blue-400 to-cyan-600',
			'express': 'from-green-600 to-green-800',
			'express-js': 'from-green-600 to-green-800',
			'shadcn-ui': 'from-slate-600 to-slate-800',

			// Backend & APIs
			'nodejs': 'from-green-500 to-green-700',
			'backend': 'from-gray-600 to-gray-800',
			'rest-api': 'from-orange-500 to-red-600',
			'api': 'from-orange-400 to-orange-600',
			'crud': 'from-yellow-600 to-orange-700',
			'authentication': 'from-red-500 to-red-700',
			'jwt-authentication': 'from-red-600 to-red-800',
			'google-authentication': 'from-blue-500 to-green-500',
			'clerk': 'from-purple-600 to-purple-800',
			'email-verification': 'from-blue-600 to-indigo-700',

			// Databases
			'mongodb': 'from-green-500 to-green-700',
			'mongoose': 'from-green-600 to-green-800',
			'mongo-db': 'from-green-500 to-green-700',
			'postgresql': 'from-blue-600 to-indigo-700',
			'prisma': 'from-indigo-500 to-purple-600',
			'neon-database': 'from-cyan-500 to-blue-600',
			'redis': 'from-red-500 to-red-700',

			// Mobile Development
			'mobile-app': 'from-blue-500 to-purple-600',
			'tanstack-query': 'from-orange-500 to-red-600',
			'featured': 'from-yellow-400 to-yellow-600',

			// Business Applications
			'bus-booking': 'from-blue-600 to-blue-800',
			'ticketing-logic': 'from-purple-500 to-purple-700',
			'ticketing-system': 'from-purple-500 to-purple-700',
			'transport': 'from-blue-500 to-blue-700',
			'travel-app': 'from-green-500 to-teal-600',
			'restaurant-management': 'from-orange-600 to-red-700',
			'admin-panel': 'from-gray-700 to-gray-900',
			'role-based-access': 'from-red-600 to-red-800',
			'user-management': 'from-indigo-600 to-purple-700',

			// Security & Validation
			'security': 'from-red-600 to-red-800',
			'rate-limiting': 'from-yellow-600 to-orange-700',
			'zod-validation': 'from-blue-600 to-indigo-700',
			'encryption': 'from-gray-700 to-gray-900',

			// Development Tools & Utilities
			'development': 'from-gray-500 to-gray-700',
			'development-tools': 'from-gray-500 to-gray-700',
			'utilities': 'from-cyan-500 to-blue-600',
			'server': 'from-green-600 to-green-800',
			'mcp': 'from-purple-600 to-indigo-700',
			'model-context-protocol': 'from-purple-600 to-indigo-700',
			'claude': 'from-orange-500 to-orange-700',

			// Selected Categories of Applications (10% most relevant)
			'fintech': 'from-green-400 to-green-600',
			'productivity': 'from-blue-400 to-blue-600',
			'analytics': 'from-purple-400 to-purple-600',
			'dashboard': 'from-indigo-500 to-purple-600',
			'reporting': 'from-blue-500 to-indigo-600',
			'visualization': 'from-pink-500 to-purple-600',
			'charts': 'from-cyan-500 to-blue-600',
			'calendar': 'from-red-500 to-orange-600',
			'booking': 'from-teal-500 to-green-600',
			'inventory': 'from-yellow-500 to-orange-600',
			'form-builder': 'from-purple-500 to-pink-600',
			'workflow': 'from-indigo-500 to-blue-600',
			'task-management': 'from-blue-500 to-cyan-600',
			'project-management': 'from-green-500 to-teal-600',
			'file-sharing': 'from-orange-500 to-red-600',
			'notification': 'from-yellow-500 to-orange-600',
			'chat': 'from-green-500 to-blue-600',
			'file-upload': 'from-purple-500 to-indigo-600',
			'export': 'from-gray-500 to-gray-700',
			'import': 'from-gray-600 to-gray-800',
			'search': 'from-yellow-400 to-orange-600',
			'maps': 'from-green-400 to-blue-600',
			'geolocation': 'from-blue-400 to-cyan-600',
			'weather': 'from-cyan-400 to-blue-600',
			'scheduling': 'from-purple-400 to-indigo-600',
			'reservation': 'from-teal-400 to-green-600',
			'crm': 'from-orange-400 to-red-600',
			'lms': 'from-blue-400 to-purple-600',
			'quiz': 'from-yellow-400 to-orange-600',
			'survey': 'from-green-400 to-teal-600',
			'collaboration': 'from-indigo-400 to-purple-600',
			'version-control': 'from-gray-400 to-gray-600',
			'health-check': 'from-green-400 to-green-600',
			'monitoring': 'from-red-400 to-orange-600',
			'backup': 'from-gray-400 to-gray-700',
			'optimization': 'from-yellow-400 to-orange-600',
			'seo': 'from-green-400 to-blue-600',
			'pwa': 'from-purple-400 to-pink-600',
			'responsive': 'from-cyan-400 to-blue-600',
			'ui-ux': 'from-pink-400 to-purple-600',
			'design-system': 'from-indigo-400 to-purple-600',
			'component-library': 'from-blue-400 to-cyan-600',
			'documentation': 'from-gray-400 to-gray-600',
			'blog': 'from-orange-400 to-red-600',
			'cms': 'from-purple-400 to-indigo-600',
			'headless-cms': 'from-purple-500 to-indigo-700',
			'graphql': 'from-pink-500 to-purple-700',
			'websocket': 'from-green-500 to-teal-700',
			'real-time': 'from-red-500 to-orange-700',
			'payment': 'from-green-500 to-green-700',
			'subscription': 'from-blue-500 to-purple-700',
			'email': 'from-blue-500 to-indigo-700',
			'image-processing': 'from-purple-500 to-pink-700',
			'pdf-generation': 'from-red-500 to-orange-700',
			'logging': 'from-gray-500 to-gray-700',
			'error-handling': 'from-red-500 to-red-700',
			'performance': 'from-yellow-500 to-orange-700',
			'caching': 'from-blue-500 to-cyan-700',
			'recommendation': 'from-purple-500 to-indigo-700',
			'machine-learning': 'from-green-500 to-teal-700',
			'ai': 'from-orange-500 to-red-700',
			'nlp': 'from-blue-500 to-purple-700',
			'data-science': 'from-cyan-500 to-blue-700',
			'webpack': 'from-blue-500 to-indigo-700',
			'vite': 'from-purple-500 to-pink-700',
			'eslint': 'from-purple-500 to-indigo-700',
			'prettier': 'from-pink-500 to-purple-700',
			'code-quality': 'from-green-500 to-teal-700',
			'unit-testing': 'from-red-500 to-orange-700',
			'integration-testing': 'from-orange-500 to-red-700',
			'e2e-testing': 'from-blue-500 to-purple-700',
			'performance-testing': 'from-yellow-500 to-orange-700',
			'security-testing': 'from-red-500 to-red-700',
			'ci-cd': 'from-green-500 to-blue-700',
			'continuous-integration': 'from-green-500 to-teal-700',
			'continuous-deployment': 'from-blue-500 to-indigo-700',
			'github-actions': 'from-gray-500 to-gray-700',
			'docker': 'from-blue-500 to-cyan-700',
			'kubernetes': 'from-blue-500 to-purple-700',
			'microservices': 'from-green-500 to-teal-700',
			'serverless': 'from-orange-500 to-red-700',
			'firebase': 'from-yellow-500 to-orange-700',
			'supabase': 'from-green-500 to-teal-700',
			'planetscale': 'from-purple-500 to-indigo-700',
			'vercel': 'from-gray-500 to-gray-700',
			'netlify': 'from-teal-500 to-green-700',
			'heroku': 'from-purple-500 to-pink-700',
			'cloudflare': 'from-orange-500 to-red-700',
			'oauth': 'from-blue-500 to-indigo-700',
			'oauth2': 'from-blue-500 to-purple-700',
			'sso': 'from-indigo-500 to-purple-700',
			'auth0': 'from-orange-500 to-red-700',
			'passport': 'from-green-500 to-teal-700',
			'jwt': 'from-red-500 to-orange-700',
			'session-management': 'from-purple-500 to-indigo-700',
			'csrf-protection': 'from-red-500 to-red-700',
			'xss-protection': 'from-orange-500 to-red-700',
			'cors': 'from-blue-500 to-cyan-700',
			'https': 'from-green-500 to-teal-700',
			'ssl': 'from-green-500 to-green-700',
			'bcrypt': 'from-yellow-500 to-orange-700',
			'environment-variables': 'from-gray-500 to-gray-700',
			'configuration-management': 'from-indigo-500 to-purple-700',
			'feature-flags': 'from-purple-500 to-pink-700',
			'a-b-testing': 'from-green-500 to-blue-700',
			'canary-deployment': 'from-yellow-500 to-orange-700',
			'blue-green-deployment': 'from-blue-500 to-teal-700',
			'zero-downtime-deployment': 'from-green-500 to-teal-700',
			'circuit-breaker': 'from-red-500 to-orange-700',
			'retry-logic': 'from-orange-500 to-red-700',
			'timeout-handling': 'from-yellow-500 to-orange-700',
			'graceful-shutdown': 'from-blue-500 to-indigo-700',
			'clustering': 'from-purple-500 to-indigo-700',
			'async-await': 'from-blue-500 to-cyan-700',
			'promises': 'from-green-500 to-teal-700',
			'streaming': 'from-purple-500 to-pink-700',
			'reactive-programming': 'from-indigo-500 to-purple-700',
			'functional-programming': 'from-orange-500 to-red-700',
			'immutability': 'from-blue-500 to-indigo-700',
			'design-patterns': 'from-purple-500 to-indigo-700',
			'mvc': 'from-green-500 to-teal-700',
			'observer-pattern': 'from-blue-500 to-purple-700',
			'singleton-pattern': 'from-orange-500 to-red-700',
			'factory-pattern': 'from-yellow-500 to-orange-700',
			'repository-pattern': 'from-indigo-500 to-purple-700',
			'clean-architecture': 'from-gray-500 to-gray-700',
			'domain-driven-design': 'from-green-500 to-blue-700',
			'event-driven-architecture': 'from-purple-500 to-indigo-700',
			'data-pipeline': 'from-cyan-500 to-blue-700',
			'etl': 'from-green-500 to-teal-700',
			'real-time-analytics': 'from-red-500 to-orange-700',
			'stream-processing': 'from-blue-500 to-purple-700',
			'elasticsearch': 'from-yellow-500 to-orange-700',
			'kibana': 'from-purple-500 to-indigo-700',
			'grafana': 'from-orange-500 to-red-700',
			'prometheus': 'from-red-500 to-orange-700',
			'distributed-tracing': 'from-indigo-500 to-purple-700',
			'application-monitoring': 'from-blue-500 to-cyan-700',
			'log-management': 'from-gray-500 to-gray-700',
			'error-tracking': 'from-red-500 to-red-700',
			'performance-monitoring': 'from-yellow-500 to-orange-700',
			'apm': 'from-purple-500 to-indigo-700',
			'alerting': 'from-red-500 to-orange-700',
			'incident-management': 'from-orange-500 to-red-700',
			'debugging': 'from-blue-500 to-indigo-700',
			'profiling': 'from-green-500 to-teal-700',
			'benchmarking': 'from-yellow-500 to-orange-700',
			'memory-management': 'from-purple-500 to-indigo-700',
			'database-optimization': 'from-green-500 to-teal-700',
			'query-optimization': 'from-blue-500 to-indigo-700',
			'indexing': 'from-orange-500 to-red-700',
			'partitioning': 'from-purple-500 to-pink-700',
			'sharding': 'from-indigo-500 to-purple-700',
			'replication': 'from-green-500 to-blue-700',
			'high-availability': 'from-red-500 to-orange-700',
			'disaster-recovery': 'from-gray-500 to-gray-700',
			'backup-strategy': 'from-blue-500 to-cyan-700',
			'access-control': 'from-red-500 to-red-700',
			'identity-management': 'from-indigo-500 to-purple-700',
			'authorization': 'from-orange-500 to-red-700',
			'multi-factor-authentication': 'from-blue-500 to-purple-700',
			'webauthn': 'from-green-500 to-teal-700',
			'passkeys': 'from-purple-500 to-indigo-700',
			'ml-ops': 'from-cyan-500 to-blue-700',
			'model-deployment': 'from-green-500 to-teal-700',
			'model-monitoring': 'from-red-500 to-orange-700',
			'experiment-tracking': 'from-purple-500 to-indigo-700',
			'feature-store': 'from-orange-500 to-red-700',
			'data-versioning': 'from-blue-500 to-indigo-700',
			'data-governance': 'from-gray-500 to-gray-700',
			'data-quality': 'from-green-500 to-teal-700',
			'api-design': 'from-purple-500 to-pink-700',
			'api-documentation': 'from-blue-500 to-cyan-700',
			'api-testing': 'from-orange-500 to-red-700',
			'api-monitoring': 'from-red-500 to-orange-700',
			'api-security': 'from-indigo-500 to-purple-700',
			'api-versioning': 'from-green-500 to-teal-700',
			'semantic-versioning': 'from-yellow-500 to-orange-700',
			'feature-toggles': 'from-purple-500 to-indigo-700',
			'progressive-rollouts': 'from-blue-500 to-cyan-700',
			'canary-releases': 'from-orange-500 to-red-700',
			'blue-green-deployments': 'from-teal-500 to-green-700',
			'immutable-deployments': 'from-gray-500 to-gray-700',
			'infrastructure-as-code': 'from-green-500 to-blue-700',
			'gitops': 'from-purple-500 to-indigo-700',
			'platform-engineering': 'from-indigo-500 to-purple-700',
			'developer-experience': 'from-orange-500 to-red-700',
			'cli-tools': 'from-gray-500 to-gray-700',
			'build-tools': 'from-yellow-500 to-orange-700',
			'deployment-tools': 'from-blue-500 to-indigo-700',
			'automation-tools': 'from-green-500 to-teal-700',
			'workflow-tools': 'from-purple-500 to-pink-700',
			'static-typing': 'from-blue-500 to-indigo-700',
			'type-inference': 'from-cyan-500 to-blue-700',
			'dependency-injection': 'from-green-500 to-teal-700',
			'solid-principles': 'from-orange-500 to-red-700',
			'hexagonal-architecture': 'from-purple-500 to-indigo-700',
			'layered-architecture': 'from-indigo-500 to-purple-700',
			'service-oriented-architecture': 'from-blue-500 to-cyan-700',
			'message-driven-architecture': 'from-green-500 to-teal-700',
			'actor-model': 'from-red-500 to-orange-700',
			'reactive-streams': 'from-purple-500 to-pink-700',
			'flow-based-programming': 'from-cyan-500 to-blue-700',
			'pipeline-architecture': 'from-gray-500 to-gray-700',
			'batch-processing': 'from-yellow-500 to-orange-700',
			'event-streaming': 'from-indigo-500 to-purple-700'
		};
		return colors[tech.toLowerCase()] || 'from-gray-500 to-gray-700';
	};

	const getCollaborators = (repoName: string) => {
		if (repoName === 'FS-MCP') {
			return [COLLABORATORS.arka];
		}
		return [];
	};

	const itemVariants: Variants = {
		hidden: {y: 40, opacity: 0, rotateX: 15},
		visible: {
			y: 0,
			opacity: 1,
			rotateX: 0,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
			},
		},
	};

	const collaborators = getCollaborators(project.name);

	return (
		<motion.div
			variants={itemVariants}
			className={cn('group relative rounded-2xl p-8 border border-opacity-20 backdrop-blur-sm transition-all duration-500')}
			style={{
				backgroundColor: 'rgba(var(--color-card), 0.5)',
				borderColor: 'rgba(var(--color-border), 0.3)',
			}}
			whileHover={{
				y: -10,
				rotateX: 5,
				boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
			}}
		>
			{/* GitHub Icon Overlay */}
			<motion.div
				className={cn('absolute inset-0 rounded-2xl flex items-center justify-center z-10 pointer-events-none')}
				initial={{opacity: 0, scale: 0.5}}
				whileHover={{opacity: 1, scale: 1}}
				transition={{duration: 0.3}}
			>
				<motion.a
					href={project.html_url}
					target="_blank"
					rel="noopener noreferrer"
					className={cn('pointer-events-auto')}
					whileHover={{scale: 1.1}}
					whileTap={{scale: 0.9}}
				>
					<FaGithub className={cn('w-16 h-16 text-white drop-shadow-lg')}/>
				</motion.a>
			</motion.div>

			{/* Gradient Overlay */}
			<div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500')}/>

			{/* Animated Border */}
			<div className={cn('absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm')}/>

			{/* Project Header */}
			<div className={cn('relative z-10 mb-6')}>
				<div className={cn('flex items-start justify-between mb-4')}>
					<motion.div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center', getTechColor(project.language || ''))} whileHover={{rotate: 360}}
					            transition={{duration: 0.6}}>
						<span className={cn('text-white font-bold text-lg')}>{project.name.charAt(0)}</span>
					</motion.div>
				</div>

				<h3 className={cn('text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-500')}
				    style={{color: 'rgb(var(--color-card-foreground))'}}>
					{project.name}
				</h3>

				<p className={cn('text-base opacity-80 leading-relaxed')} style={{color: 'rgb(var(--color-card-foreground))'}}>
					{project.description || 'Innovative solution with modern technologies'}
				</p>
			</div>

			{/* Tech Stack */}
			<div className={cn('flex flex-wrap gap-2 mb-6')}>
				{project.topics.filter(topic => topic !== 'featured').slice(0, 4).map((tech) => (
					<motion.span key={tech} className={cn('px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r', getTechColor(tech))} whileHover={{scale: 1.1, y: -2}}>
						{tech}
					</motion.span>
				))}
				{project.language && (
					<motion.span className={cn('px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r', getTechColor(project.language))} whileHover={{scale: 1.1, y: -2}}>
						{project.language}
					</motion.span>
				)}
			</div>

			{/* Collaborators */}
			{collaborators.length > 0 && (
				<motion.div className={cn('flex items-center gap-2 mb-6 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10')} whileHover={{scale: 1.02}}>
					<FaUsers className={cn('w-4 h-4 text-purple-500')}/>
					<span className={cn('text-sm font-medium')} style={{color: 'rgb(var(--color-card-foreground))'}}>
						Collaboration with {collaborators.map(collab => collab.name).join(', ')}
					</span>
				</motion.div>
			)}

			{/* Project Stats */}
			<div className={cn('flex items-center gap-4 mb-6 text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
				<motion.div className={cn('flex items-center gap-1')} whileHover={{scale: 1.1}}>
					<span>⭐</span>
					<span className={cn('font-medium')}>{project.stargazers_count}</span>
				</motion.div>
			</div>

			{/* Demo Link */}
			{project.homepage && (
				<div className={cn('flex justify-center')}>
					<motion.a
						href={project.homepage}
						target="_blank"
						rel="noopener noreferrer"
						className={cn('flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						whileHover={{scale: 1.05, y: -2, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'}}
						whileTap={{scale: 0.95}}
					>
						<FaExternalLinkAlt className={cn('w-4 h-4')}/>
						Demo
					</motion.a>
				</div>
			)}
		</motion.div>
	);
}

export {ProjectCard};