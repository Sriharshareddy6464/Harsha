import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIProjects from './components/AIProjects';
import DevOps from './components/DevOps';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import WhatIDo from './components/WhatIDo';

function App() {
  const [loading, setLoading] = useState(true);
  const [startExit, setStartExit] = useState(false);

  useEffect(() => {
    // Show loading for 1.5s, then start exit animation
    const timer = setTimeout(() => setStartExit(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // When exit animation finishes, hide loading screen
  const handleExited = () => setLoading(false);

  return (
    <>
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
          <WhatIDo />
          <Projects />
          <DevOps />
          <AIProjects />
          <Tools />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App; 