import { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import AIProjects from '../components/AIProjects';
import DevOps from '../components/DevOps';
import Tools from '../components/Tools';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import Experience from '../components/Experience';
import HowICanHelp from '../components/HowICanHelp';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    // Show loading for 1.5s, then start exit animation
    const timer = setTimeout(() => setStartExit(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // When exit animation finishes, hide loading screen
  const handleExited = () => setLoading(false);

  // --- Data for the Experience component ---
  const experienceData = {
    title: "My Professional Journey",
    buttonLabel: "View Resume",
    buttonLink: "/resume/Adapala Sriharsha Reddy.pdf", // Updated path for your resume
    cards: [
      {
        title: "Software Engineer @ TechCorp",
        description: "Developed and maintained scalable web applications using React and Node.js. Implemented CI/CD pipelines and managed cloud infrastructure on AWS. Led a team of 3 junior developers."
      },
      {
        title: "AI Researcher @ InnovateLabs",
        description: "Conducted research on natural language processing models, focusing on sentiment analysis. Developed and deployed custom BERT models for real-time text classification."
      },
      {
        title: "Full Stack Developer @ StartupX",
        description: "Built responsive user interfaces with Next.js and Tailwind CSS. Designed and managed PostgreSQL databases. Contributed to both frontend and backend development in an agile environment."
      },
      {
        title: "Freelance Web Developer",
        description: "Designed and developed custom websites for small businesses and individuals. Specializing in modern JavaScript frameworks and user-centric design principles."
      },
    ]
  };
  // --- End of Experience data ---

  return (
    <>
      <Head>
        <title>Harsha - Portfolio</title>
        <meta name="description" content="Full Stack Developer & AI Enthusiast Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Loading Screen */}
      {loading && (
        <LoadingScreen startExit={startExit} onExited={handleExited} />
      )}

      {/* Main Content */}
      {!loading && (
        <main>
          <Header />
          <Hero />
          <About />
          <Skills />
          <HowICanHelp />
          <Experience {...experienceData} />
          <Projects />
          <AIProjects />
          <DevOps />
          <Tools />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
} 