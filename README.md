# 🚀 Padmanabha Das - Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A cutting-edge portfolio showcasing expertise in full-stack development, mobile applications, and AI integration**

[📱 **Live Demo**](https://padmanabha-portfolio.vercel.app) • [📧 **Contact**](mailto:padmanabhadas9647@gmail.com) • [💼 **LinkedIn**](https://www.linkedin.com/in/padmanabha-das-59bb2019b/)

</div>

---

## ✨ **Highlights**

🎯 **3+ years** of experience in full-stack development  
🏆 **300+ active users** on live applications  
🤖 **AI Integration Expert** with Model Context Protocol (MCP) development  
📱 **Cross-platform specialist** in Flutter, React Native, and Next.js

---

## 🌟 **Key Features**

### 🎨 **Modern Design & UX**

- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Smooth Animations**: Powered by Framer Motion for engaging interactions
- **Gradient Aesthetics**: Beautiful color schemes and modern UI patterns

### ⚡ **Performance & Tech Stack**

- **Next.js 15**: Latest App Router with Turbopack for lightning-fast builds
- **React 19**: Cutting-edge React features and performance optimizations
- **TypeScript**: Full type safety and enhanced developer experience
- **Tailwind CSS 4.0**: Modern utility-first styling with enhanced features

### 🔗 **Dynamic Integrations**

- **Hygraph CMS**: Headless CMS for dynamic content management
- **Google Sheets API**: Contact form submissions with automated storage
- **GraphQL**: Efficient data fetching and management
- **Real-time Updates**: Content updates without redeployment

### 🛡️ **Security & Best Practices**

- **Environment Variables**: Secure API key management
- **Input Validation**: Comprehensive form validation and sanitization
- **Error Handling**: Graceful error boundaries and fallbacks
- **SEO Optimized**: Structured data and meta tags for better visibility

---

## 📸 **Screenshots**

> 🚧 **Coming Soon**: Portfolio screenshots will be added in the next 2-3 days showcasing:
>
> - **Desktop & Mobile Views**: Responsive design across all devices
> - **Dark & Light Themes**: Theme switching demonstration
> - **Interactive Sections**: Hero, skills, projects, and contact sections
> - **Smooth Animations**: Framer Motion effects in action
> - **Project Gallery**: Dynamic project cards with filtering

---

## 🏗️ **Architecture Overview**

```
src/
├── 📁 app/                      # Next.js App Router
│   ├── 🌐 api/contact/         # API routes for form submissions
│   ├── 📄 page.tsx             # Home page with all sections
│   ├── 📁 projects/            # Dedicated projects page
│   └── 🎨 globals.css          # Global styles and theme variables
├── 🧩 components/              # Reusable UI components
│   ├── 🏠 hero/                # Hero section with animated intro
│   ├── 👤 about/               # About section with personal info
│   ├── 💪 skills/              # Interactive skills showcase
│   ├── 💼 experiences/         # Professional timeline
│   ├── 🎓 educations/          # Academic background
│   ├── 🚀 projects/            # Project portfolio with categories
│   ├── 🏅 certifications/      # Professional certifications
│   ├── 📞 contact/             # Contact form with validation
│   ├── 🧭 navigation/          # Responsive navigation bar
│   ├── 🦶 footer/              # Footer with social links
│   └── 🎛️ ui/                  # Reusable UI primitives
├── 📊 lib/                     # Utility libraries
│   ├── 🔗 hygraph.ts           # CMS data fetching
│   ├── 📋 google-sheets.ts     # Form submission handling
│   ├── 🐙 github.ts            # GitHub API integration
│   └── 🛠️ utils.ts             # Common utilities
├── 🔧 types/                   # TypeScript type definitions
├── 📝 constants/               # Static configuration data
└── ⚙️ config/                  # Environment configuration
```

---

## 🛠️ **Technology Stack**

### **Frontend**

| Technology        | Version | Purpose                         |
|-------------------|---------|---------------------------------|
| **Next.js**       | 15.3.5  | React framework with App Router |
| **React**         | 19.0.0  | UI library with latest features |
| **TypeScript**    | 5.0     | Type-safe development           |
| **Tailwind CSS**  | 4.0     | Utility-first styling           |
| **Framer Motion** | 12.23.3 | Animation library               |

### **Backend & Services**

| Service               | Purpose                     |
|-----------------------|-----------------------------|
| **Hygraph CMS**       | Headless content management |
| **GraphQL**           | Efficient data querying     |
| **Google Sheets API** | Form data storage           |
| **Vercel**            | Deployment and hosting      |

### **Development Tools**

| Tool                         | Purpose                  |
|------------------------------|--------------------------|
| **ESLint**                   | Code linting and quality |
| **Turbopack**                | Fast build tool          |
| **next-themes**              | Theme management         |
| **class-variance-authority** | Component styling        |

---

## 🚀 **Quick Start**

### **Prerequisites**

- Node.js 18.0+
- npm or yarn package manager
- Git for version control

### **Installation**

```bash
# Clone the repository
git clone https://github.com/chayan-1906/padmanabha-portfolio.git
cd padmanabha-portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your API keys and configuration

# Start development server with Turbopack
npm run dev
```

### **Environment Setup**

Create a `.env.local` file with the following variables:

```env
# Hygraph CMS Configuration
HYGRAPH_ENDPOINT=your_hygraph_endpoint
HYGRAPH_TOKEN=your_hygraph_token

# Google Sheets API (for contact form)
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
GOOGLE_SHEETS_CLIENT_EMAIL=your_client_email

# GitHub Integration (optional)
GITHUB_TOKEN=your_github_token
```

### **Hygraph CMS Setup**

This portfolio requires a Hygraph CMS backend. You'll need to:

1. **Create a Hygraph Account**: Sign up at [hygraph.com](https://hygraph.com)
2. **Set up Content Models**: Create the following models in your Hygraph project:

#### Required Content Models:

- **PersonalInfo**: Name, title, description, email, phone, social links, resume URL
- **Sections**: Section names, titles, and subtitles for each portfolio section
- **TechStacks**: Technology names and display order
- **Skills**: Skill names, levels, icons, and categories
- **SkillCategories**: Category titles, gradients, colors, and icons
- **WorkExperiences**: Company details, roles, periods, descriptions, achievements
- **Projects**: Project titles, URLs, categories, featured status
- **ProjectCategories**: Category names, icons, and gradients
- **Educations**: Degree, institution, period, CGPA, highlights
- **Certifications**: Certificate names, issuers, dates, credential IDs
- **SocialLinks**: Platform names, URLs, and icons

3. **Configure Permissions**: Set up public read access for content delivery
4. **Get API Credentials**: Copy your endpoint URL and create a permanent auth token
5. **Populate Content**: Add your personal information and portfolio data

**📋 Schema Documentation**:
> ✅ **GraphQL Schema Definitions**: Use these type definitions to set up your own Hygraph project
>
> **Content Models Structure**:
> ```graphql
> type PersonalInfo {
>   name: String!
>   title: String!
>   description: String
>   email: String!
>   phone: String
>   avatar: Asset
>   resumeUrl: String
>   portfolioId: PortfolioId!
> }
> 
> type Skill {
>   name: String!
>   level: Int!
>   icon: String
>   order: Int
>   category: SkillCategory
>   portfolioId: PortfolioId!
> }
> 
> type WorkExperience {
>   company: String!
>   icon: String
>   location: String
>   period: String
>   color: String
>   role: [Role!]!
>   portfolioId: PortfolioId!
> }
> 
> # ... and more content models
> ```
>
> **For Others Using This Portfolio**:
> 1. Use the GraphQL schema definitions as reference
> 2. Create matching content models in your Hygraph project
> 3. Configure field types, validations, and relationships
> 4. Set up API permissions and get your tokens

---

## 📱 **Sections Overview**

### 🏠 **Hero Section**

- Dynamic name animation with gradient effects
- Tech stack carousel with smooth transitions
- Professional introduction with call-to-action buttons
- Social media links with hover animations

### 👤 **About Section**

- Personal background and philosophy
- Educational achievements with CGPA display
- Professional journey and key highlights
- Interactive timeline elements

### 💪 **Skills Section**

- Categorized skill display (Frontend, Mobile, Backend, Tools)
- Progress bars with animated percentage indicators
- Technology icons with hover effects
- Skill level visualization

### 💼 **Experience Section**

- Professional timeline with company logos
- Multiple roles per company with detailed descriptions
- Achievement highlights and key metrics
- Color-coded experience cards

### 🚀 **Projects Section**

- Featured projects with category filtering
- Dynamic project fetching from Hygraph CMS
- GitHub integration for repository data
- Live demo and code links

### 🏅 **Certifications Section**

- Professional certifications with credential verification
- Direct links to certificate documents
- Issuer information and completion dates

### 📞 **Contact Section**

- Interactive contact form with validation
- Google Sheets integration for form submissions
- Multiple contact methods (email, phone, location)
- Social media links

---

## 🎨 **Customization Guide**

### **Personal Information**

Update your details directly in the Hygraph CMS dashboard. You'll need to create your own Hygraph project and configure the content models to match the schema used in this portfolio.

### **Theme Customization**

Modify theme colors in `src/app/globals.css`:

```css
:root {
	--color-background: 255 255 255;
	--color-foreground: 0 0 0;
	--color-primary: 59 130 246;
	--color-secondary: 168 85 247;
}

[data-theme="dark"] {
	--color-background: 9 9 11;
	--color-foreground: 250 250 250;
}
```

### **Adding New Sections**

1. Create component in appropriate directory
2. Add to main page layout
3. Update navigation menu
4. Configure CMS content model

---

## 📊 **Performance Metrics**

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Excellent ratings
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### **Optimization Features**

- Image optimization with Next.js Image component
- Code splitting with dynamic imports
- Font optimization with next/font
- Efficient bundle size with tree shaking

---

## 🚀 **Deployment**

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically with each push to main branch

### **Manual Deployment**

```bash
npm run build
npm run start
```

---

## 🔧 **Development Guidelines**

### **Code Standards**

- Follow TypeScript strict mode
- Use ESLint configuration for consistent formatting
- Implement proper error boundaries
- Write clean, maintainable code with proper documentation

### **Component Architecture**

- Functional components with React hooks
- TypeScript interfaces for all props
- Consistent naming conventions (kebab-case for files)
- Separation of client and server components

### **Best Practices**

- Implement proper loading states
- Use React.memo for performance optimization
- Leverage Next.js built-in optimizations
- Follow accessibility guidelines (WCAG 2.1)

---

## 👨‍💻 **About the Developer**

<div align="center">

### **Padmanabha Das**

*Full-Stack Developer & AI Integration Specialist*

**3+ years** of experience building scalable web and mobile applications  
Specialized in **Next.js 15**, **React 19**, **Flutter**, and **AI integration**

[![Email](https://img.shields.io/badge/Email-padmanabhadas9647%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:padmanabhadas9647@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-chayan--1906-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/chayan-1906)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Padmanabha%20Das-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/padmanabha-das-59bb2019b/)

</div>

---

## 🙏 **Acknowledgments**

- **Next.js Team** for the incredible framework and developer experience
- **Vercel** for seamless deployment and hosting solutions
- **Hygraph** for providing an excellent headless CMS platform
- **Tailwind CSS** for the utility-first styling approach
- **Framer Motion** for beautiful animation capabilities
- **Open Source Community** for continuous inspiration and innovation

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and **Next.js 15** by [Padmanabha Das](https://github.com/chayan-1906)

*Last updated: January 2025*

</div>