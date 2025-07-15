# Padmanabha Das - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and cutting-edge web technologies. This portfolio showcases my expertise in full-stack development, mobile applications, and AI
integration.

## 🚀 Live Demo

[Visit Portfolio](https://padmanabha-portfolio.vercel.app) (Deploy link will be updated)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Dark/Light Mode**: Built-in theme switching with system preference detection
- **Interactive Animations**: Framer Motion animations for engaging user experience
- **GitHub Integration**: Dynamic project fetching from GitHub API
- **Performance Optimized**: Next.js 15 with App Router for optimal performance
- **SEO Optimized**: Built-in SEO optimization with proper meta tags
- **TypeScript**: Full TypeScript implementation for type safety
- **Accessibility**: WCAG compliance and screen reader support

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and performance improvements
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Aceternity UI** - Modern UI components
- **Shadcn UI** - Reusable component library

### Backend & APIs

- **GitHub API** - Dynamic project fetching
- **Next.js API Routes** - Server-side functionality
- **Vercel** - Deployment and hosting

### Tools & Services

- **Git** - Version control
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **next-themes** - Theme management

## 🎯 Sections

1. **Navigation** - Smooth scrolling navigation with theme toggle
2. **Hero Section** - Introduction with animated elements
3. **About** - Personal information and education
4. **Skills** - Interactive skill showcase with categories
5. **Experience** - Professional timeline with achievements
6. **Projects** - Featured projects from GitHub with live demos
7. **Contact** - Contact form and information
8. **Footer** - Links and additional information

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository
   \`\`\`bash
   git clone https://github.com/chayan-1906/padmanabha-portfolio.git
   cd padmanabha-portfolio
   \`\`\`

2. Install dependencies
   \`\`\`bash
   npm install

# or

yarn install
\`\`\`

3. Set up environment variables
   \`\`\`bash

# Create .env.local file

cp .env.example .env.local
\`\`\`

4. Run the development server
   \`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

\`\`\`
src/
├── app/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── ui/
│ ├── about-section.tsx
│ ├── contact-section.tsx
│ ├── experience-section.tsx
│ ├── footer.tsx
│ ├── hero-section.tsx
│ ├── navigation.tsx
│ ├── projects-section.tsx
│ ├── skills-section.tsx
│ └── theme-toggle.tsx
├── constants/
│ └── index.ts
├── lib/
│ ├── github.ts
│ └── utils.ts
├── types/
│ └── github.ts
└── ...
\`\`\`

## 🎨 Customization

### Personal Information

Update your personal information in \`src/constants/index.ts\`:
\`\`\`typescript
export const PERSONAL_INFO = {
name: 'Your Name',
title: 'Your Title',
email: 'your.email@example.com',
// ... other details
};
\`\`\`

### Skills and Experience

Modify the skills and experience sections in the same constants file:
\`\`\`typescript
export const SKILLS = {
frontend: ['React', 'Next.js', ...],
// ... other categories
};

export const WORK_EXPERIENCE = [
{
title: 'Your Job Title',
company: 'Company Name',
// ... other details
},
];
\`\`\`

### GitHub Integration

The portfolio automatically fetches projects from GitHub. Update the GitHub username in constants:
\`\`\`typescript
export const PERSONAL_INFO = {
github: 'https://github.com/your-username',
};
\`\`\`

### Theme Customization

Modify the theme colors in \`src/app/globals.css\`:
\`\`\`css
:root {
--color-background: 255 255 255;
--color-foreground: 0 0 0;
/* ... other colors */
}
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Deployment

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent ratings
- **Loading Speed**: Optimized images and code splitting
- **SEO**: Structured data and meta tags

## 🔧 Development Guidelines

### Code Standards

- Follow TypeScript strict mode
- Use ESLint and Prettier for code formatting
- Implement proper error handling
- Write clean, maintainable code

### Component Structure

- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow consistent naming conventions
- Use Framer Motion for animations

### Performance Best Practices

- Optimize images with Next.js Image component
- Implement lazy loading for heavy components
- Use React.memo for expensive components
- Minimize bundle size with code splitting

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Padmanabha Das**

- Email: padmanabhadas9647@gmail.com
- GitHub: [@chayan-1906](https://github.com/chayan-1906)
- LinkedIn: [Padmanabha Das](https://www.linkedin.com/in/padmanabha-das-59bb2019b/)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- The open-source community for inspiration

## 📈 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project filtering and search
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

---

Made with ❤️ and Next.js by Padmanabha Das