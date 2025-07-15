'use client';

import {useState} from 'react';
import {motion, Variants} from 'framer-motion';
import {FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhone} from 'react-icons/fa';
import {cn} from '@/lib/utils';
import {PERSONAL_INFO, SOCIAL_LINKS} from '@/constants';

function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 2000));

		// Reset form
		setFormData({
			name: '',
			email: '',
			subject: '',
			message: '',
		});

		setIsSubmitting(false);
		alert('Thank you for your message! I\'ll get back to you soon.');
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const containerVariants: Variants = {
		hidden: {opacity: 0},
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
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

	const contactMethods = [
		{
			icon: FaEnvelope,
			label: 'Email',
			value: PERSONAL_INFO.email,
			href: `mailto:${PERSONAL_INFO.email}`,
			color: 'text-red-500',
		},
		{
			icon: FaPhone,
			label: 'Phone',
			value: PERSONAL_INFO.phone,
			href: `tel:${PERSONAL_INFO.phone}`,
			color: 'text-green-500',
		},
		{
			icon: FaMapMarkerAlt,
			label: 'Location',
			value: PERSONAL_INFO.location,
			href: '#',
			color: 'text-blue-500',
		},
	];

	return (
		<section id="contact" className={cn('py-32 px-6 relative overflow-hidden')} style={{backgroundColor: 'rgb(var(--color-background))'}}>
			{/* Background Elements */}
			<div className={cn('absolute inset-0 overflow-hidden pointer-events-none')}>
				<motion.div
					className={cn('absolute top-20 left-20 w-96 h-96 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
					animate={{
						rotate: [0, 360],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 30,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
				<motion.div
					className={cn('absolute -bottom-40 -right-40 w-80 h-80 rounded-full opacity-5 blur-3xl')}
					style={{background: 'linear-gradient(45deg, #ec4899, #f59e0b)'}}
					animate={{
						rotate: [360, 0],
						scale: [1.2, 1, 1.2],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>

			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{once: true, margin: '-100px'}}
				className={cn('max-w-6xl mx-auto relative z-10')}
			>
				{/* Section Header */}
				<motion.div variants={itemVariants} className={cn('text-center mb-20')}>
					<motion.div
						className={cn('inline-block mb-4 px-6 py-2 rounded-full text-sm font-medium text-white')}
						style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
						whileHover={{scale: 1.05}}
					>
						Get In Touch
					</motion.div>
					<h2 className={cn('text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent')}>
						Let's Work Together
					</h2>
					<p className={cn('text-xl opacity-80 max-w-3xl mx-auto leading-relaxed')} style={{color: 'rgb(var(--color-foreground))'}}>
						Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
					</p>
				</motion.div>

				<div className={cn('grid lg:grid-cols-2 gap-12')}>
					{/* Contact Information */}
					<motion.div variants={itemVariants} className={cn('space-y-8')}>
						<div className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
						     style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}>
							<h3 className={cn('text-2xl font-bold mb-6')} style={{color: 'rgb(var(--color-card-foreground))'}}>
								Contact Information
							</h3>
							<div className={cn('space-y-6')}>
								{contactMethods.map((method, index) => (
									<motion.a
										key={method.label}
										href={method.href}
										className={cn('flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-opacity-50')}
										style={{backgroundColor: 'rgba(var(--color-secondary), 0.3)'}}
										whileHover={{scale: 1.02, x: 8}}
										target={method.href.startsWith('http') ? '_blank' : '_self'}
										rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
									>
										<div className={cn('p-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white')}>
											<method.icon className={cn('w-5 h-5')}/>
										</div>
										<div>
											<p className={cn('text-sm opacity-80')} style={{color: 'rgb(var(--color-card-foreground))'}}>
												{method.label}
											</p>
											<p className={cn('font-medium')} style={{color: 'rgb(var(--color-card-foreground))'}}>
												{method.value}
											</p>
										</div>
									</motion.a>
								))}
							</div>
						</div>

						{/* Social Links */}
						<motion.div
							className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
							style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
							whileHover={{scale: 1.02}}
						>
							<h3 className={cn('text-2xl font-bold mb-6')} style={{color: 'rgb(var(--color-card-foreground))'}}>
								Connect With Me
							</h3>
							<div className={cn('flex gap-4')}>
								{SOCIAL_LINKS.filter(link => link.name !== 'Email' && link.name !== 'Phone').map((link, index) => {
									const Icon = link.name === 'GitHub' ? FaGithub : FaLinkedin;
									return (
										<motion.a
											key={link.name}
											href={link.url}
											target="_blank"
											rel="noopener noreferrer"
											className={cn('p-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white transition-all duration-300')}
											whileHover={{scale: 1.1, rotate: 5}}
											whileTap={{scale: 0.9}}
										>
											<Icon className={cn('w-6 h-6')}/>
										</motion.a>
									);
								})}
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div variants={itemVariants}>
						<motion.div
							className={cn('p-8 rounded-2xl border border-opacity-20 backdrop-blur-sm')}
							style={{backgroundColor: 'rgba(var(--color-card), 0.5)', borderColor: 'rgba(var(--color-border), 0.3)'}}
							whileHover={{scale: 1.01}}
						>
							<h3 className={cn('text-2xl font-bold mb-6')} style={{color: 'rgb(var(--color-card-foreground))'}}>
								Send a Message
							</h3>
							<form onSubmit={handleSubmit} className={cn('space-y-6')}>
								<div className={cn('grid grid-cols-1 md:grid-cols-2 gap-6')}>
									<motion.div whileHover={{scale: 1.02}} whileFocus={{scale: 1.02}}>
										<input
											type="text"
											name="name"
											placeholder="Your Name"
											value={formData.name}
											onChange={handleChange}
											required
											className={cn('w-full px-4 py-3 rounded-xl border border-opacity-20 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500')}
											style={{
												backgroundColor: 'rgba(var(--color-secondary), 0.5)',
												color: 'rgb(var(--color-secondary-foreground))',
												borderColor: 'rgba(var(--color-border), 0.3)',
											}}
										/>
									</motion.div>
									<motion.div whileHover={{scale: 1.02}} whileFocus={{scale: 1.02}}>
										<input
											type="email"
											name="email"
											placeholder="Your Email"
											value={formData.email}
											onChange={handleChange}
											required
											className={cn('w-full px-4 py-3 rounded-xl border border-opacity-20 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500')}
											style={{
												backgroundColor: 'rgba(var(--color-secondary), 0.5)',
												color: 'rgb(var(--color-secondary-foreground))',
												borderColor: 'rgba(var(--color-border), 0.3)',
											}}
										/>
									</motion.div>
								</div>
								<motion.div whileHover={{scale: 1.02}} whileFocus={{scale: 1.02}}>
									<input
										type="text"
										name="subject"
										placeholder="Subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className={cn('w-full px-4 py-3 rounded-xl border border-opacity-20 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500')}
										style={{
											backgroundColor: 'rgba(var(--color-secondary), 0.5)',
											color: 'rgb(var(--color-secondary-foreground))',
											borderColor: 'rgba(var(--color-border), 0.3)',
										}}
									/>
								</motion.div>
								<motion.div whileHover={{scale: 1.02}} whileFocus={{scale: 1.02}}>
									<textarea
										name="message"
										placeholder="Your Message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className={cn('w-full px-4 py-3 rounded-xl border border-opacity-20 backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none')}
										style={{
											backgroundColor: 'rgba(var(--color-secondary), 0.5)',
											color: 'rgb(var(--color-secondary-foreground))',
											borderColor: 'rgba(var(--color-border), 0.3)',
										}}
									/>
								</motion.div>
								<motion.button
									type="submit"
									disabled={isSubmitting}
									className={cn('w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed')}
									style={{background: 'linear-gradient(45deg, #6366f1, #8b5cf6)'}}
									whileHover={{scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)'}}
									whileTap={{scale: 0.95}}
								>
									{isSubmitting ? (
										<>
											<motion.div
												className={cn('w-5 h-5 border-2 border-white border-t-transparent rounded-full')}
												animate={{rotate: 360}}
												transition={{duration: 1, repeat: Infinity, ease: 'linear'}}
											/>
											Sending...
										</>
									) : (
										<>
											<FaPaperPlane className={cn('w-5 h-5')}/>
											Send Message
										</>
									)}
								</motion.button>
							</form>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}

export {ContactSection};