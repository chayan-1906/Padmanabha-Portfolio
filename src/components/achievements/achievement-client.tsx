"use client";

import {motion, Variants} from "framer-motion";
import {FaCodeBranch, FaGithub, FaUserFriends, FaUsers} from "react-icons/fa";
import {cn} from "@/lib/utils";
import {AchievementClientProps} from "@/types/achievement";

function AchievementClient({achievementSection, githubStats}: AchievementClientProps) {
	const containerVariants: Variants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: {y: 40, opacity: 0},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 20,
				stiffness: 100,
			},
		},
	};

	const badgeVariants: Variants = {
		hidden: {scale: 0.8, opacity: 0},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: 'spring',
				damping: 15,
				stiffness: 120,
			},
		},
	};

	const badges = [
		{
			icon: FaCodeBranch,
			label: 'Public Repositories',
			value: githubStats.public_repos,
			gradient: 'from-blue-500 to-cyan-500',
		},
		{
			icon: FaUsers,
			label: 'Followers',
			value: githubStats.followers,
			gradient: 'from-purple-500 to-pink-500',
		},
		{
			icon: FaUserFriends,
			label: 'Following',
			value: githubStats.following,
			gradient: 'from-green-500 to-teal-500',
		},
	];

	return (
		<section id={achievementSection.name.toLowerCase()} className={cn('pt-32 pb-24 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div className={cn('absolute top-20 right-20 w-96 h-96 rounded-full opacity-5 blur-3xl')} style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
				            animate={{rotate: [0, 360], scale: [1, 1.2, 1]}} transition={{duration: 20, repeat: Infinity, ease: 'linear'}}/>
			</div>

			<motion.div variants={containerVariants} initial={'hidden'} whileInView={'visible'} viewport={{once: true, margin: '-100px'}} className={cn('max-w-6xl mx-auto relative z-10')}>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<h2 className={cn('text-5xl md:text-7xl font-bold mb-6 leading-16 md:leading-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>{achievementSection.title}</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>{achievementSection.subtitle}</p>
				</motion.div>

				{/* GitHub Profile Card */}
				<motion.div variants={itemVariants} className={cn('mb-16')}>
					<motion.div className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm flex flex-col md:flex-row items-center gap-6')}
					            style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
					            whileHover={{scale: 1.02, boxShadow: '0 25px 50px rgba(0,0,0,0.15)'}}>
						<motion.img src={githubStats.avatar_url} alt={githubStats.name} className={cn('w-24 h-24 rounded-full border-4')} style={{borderColor: 'rgb(var(--color-primary))'}}
						            whileHover={{scale: 1.1, rotate: 5}}/>
						<div className={cn('flex-1 text-center md:text-left')}>
							<h3 className={cn('text-2xl font-bold mb-2')} style={{color: 'rgb(var(--color-card-foreground))'}}>{githubStats.name}</h3>
							<p className={cn('text-lg text-blue-500 font-medium mb-2')}>@{githubStats.login}</p>
							{githubStats.bio && <p className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>{githubStats.bio}</p>}
						</div>
						<motion.a href={`https://github.com/${githubStats.login}`} target={'_blank'} rel={'noopener noreferrer'}
						          className={cn('flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white')} style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						          whileHover={{scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'}} whileTap={{scale: 0.95}}>
							<FaGithub className={cn('size-5')}/>
							View Profile
						</motion.a>
					</motion.div>
				</motion.div>

				{/* Badges Grid */}
				<div className={cn('grid md:grid-cols-3 gap-8')}>
					{badges.map((badge, index) => (
						<motion.div key={badge.label} variants={badgeVariants} custom={index}>
							<motion.div className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm text-center')}
							            style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
							            whileHover={{scale: 1.05, y: -10, boxShadow: '0 25px 50px rgba(0,0,0,0.15)'}} transition={{duration: 0.3}}>
								{/* Icon */}
								<motion.div className={cn(`flex items-center justify-center mb-4`)} whileHover={{rotate: 360}} transition={{duration: 0.6}}>
									<div className={cn(`p-4 rounded-full bg-gradient-to-br ${badge.gradient} text-white`)}>{<badge.icon className={cn('size-8')}/>}</div>
								</motion.div>

								{/* Value */}
								<motion.div className={cn('text-5xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent', badge.gradient)} initial={{scale: 0}} whileInView={{scale: 1}}
								            viewport={{once: true}} transition={{type: 'spring', damping: 10, stiffness: 100}}>
									{badge.value}
								</motion.div>

								{/* Label */}
								<p className={cn('text-sm font-medium opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>{badge.label}</p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</section>
	);
}

export {AchievementClient};
