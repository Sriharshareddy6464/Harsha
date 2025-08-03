# Adapala Sriharsha Reddy - Portfolio

A modern, responsive portfolio website built with **Vite**, **React**, and **Tailwind CSS**.

## 🚀 Features

- **Modern Tech Stack**: Vite + React + Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach
- **Loading Screen**: Custom animated loading experience
- **Dynamic Backgrounds**: Interactive mouse-tracking effects
- **Infinite Scroll**: Tools and technologies showcase
- **Modern UI Components**: shadcn/ui integration

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📁 Project Structure

```
advportfolio/
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── resume/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── magicui/      # Custom UI effects
│   │   └── *.jsx         # Main components
│   ├── styles/
│   │   └── globals.css   # Global styles
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd advportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.jsx` - Name and title
- `src/components/About.jsx` - Personal description
- `src/components/Contact.jsx` - Contact details
- `src/components/Projects.jsx` - Your projects
- `src/components/AIProjects.jsx` - AI/ML projects
- `src/components/DevOps.jsx` - DevOps projects

### Assets
Place your assets in the `public/` directory:
- Profile image: `public/assets/images/profile.jpg`
- Project images: `public/assets/images/projects/`
- Tool icons: `public/assets/icons/tools/`
- Resume: `public/resume/`

## 🌟 Key Components

- **Header**: Navigation with animated triangle
- **Hero**: Landing section with typing animation
- **About**: Personal introduction with expertise cards
- **Skills**: Progress bars and infinite scrolling tools
- **What I Do**: Services offered
- **Projects**: Web development projects
- **DevOps**: Infrastructure projects
- **AI Projects**: AI/ML projects with flickering grid
- **Tools**: Design and development tools
- **Contact**: Interactive mouse-tracking background
- **Footer**: Social links and copyright

## 🎯 Performance

- **Fast Development**: Vite's hot module replacement
- **Optimized Build**: Tree shaking and code splitting
- **Image Optimization**: Proper sizing and formats
- **Lazy Loading**: Components load as needed

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.cjs` - ESLint configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using Vite, React, and Tailwind CSS**
