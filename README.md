# Karan Murari - Portfolio Website

A modern, responsive personal portfolio website showcasing web development expertise, built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo
Visit: [karanmurari.in](https://karanmurari.in)

## 🛠️ Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Email**: EmailJS
- **Analytics**: Google Analytics
- **Deployment**: Vercel

## 📋 Features
- Responsive design for all devices
- Modern UI with smooth animations
- Dark theme with custom gradients
- Contact form with email integration
- SEO optimized (meta tags, schema markup, sitemap)
- Google Analytics tracking
- Performance optimized

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ProjectsSection.tsx
│   └── ...
├── pages/              # Page components
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
└── main.tsx           # App entry point
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### SEO Configuration
Update the following files for your domain:
- `index.html` - Meta tags and schema markup
- `public/sitemap.xml` - Sitemap URLs
- `public/robots.txt` - Robots directives

## 📊 Analytics
Google Analytics is integrated with ID: `G-5VWXCTMN8L`

## 🌐 Deployment on Vercel

1. **Push code to GitHub**
2. **Connect to Vercel**
3. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
4. **Deploy**

The `vercel.json` file is configured for SPA routing.

## 📝 License
MIT License - feel free to use this code for your own portfolio!

## 🤝 Contact
- **Email**: karanmurari766@gmail.com
- **LinkedIn**: [linkedin.com/in/karanmurari](https://linkedin.com/in/karanmurari)
- **GitHub**: [github.com/KaranMurari](https://github.com/KaranMurari)