import { useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const shuffleWords = ['DESIGN', 'DEVELOP', 'DEPLOY'];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [showRole, setShowRole] = useState(false);
  const [displayWord, setDisplayWord] = useState('');

  useEffect(() => {
    let letterInterval;
    let wordInterval;

    const startWordAnimation = () => {
      setCurrentLetterIndex(0);
      setDisplayWord('');
      
      letterInterval = setInterval(() => {
        setCurrentLetterIndex((prev) => {
          const currentWord = shuffleWords[currentWordIndex];
          if (prev >= currentWord.length) {
            clearInterval(letterInterval);
            return prev;
          }
          setDisplayWord(currentWord.slice(0, prev + 1));
          return prev + 1;
        });
      }, 100); // Speed of letter animation
    };

    // Start with first word
    startWordAnimation();

    // Change word after current word is fully typed
    wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        const nextIndex = (prev + 1) % shuffleWords.length;
        startWordAnimation();
        return nextIndex;
      });
    }, 3000); // Time to show each complete word

    // Show role text after all words are shown
    const roleTimeout = setTimeout(() => {
      setShowRole(true);
    }, 9000); // Show role after all words are shown

    return () => {
      clearInterval(letterInterval);
      clearInterval(wordInterval);
      clearTimeout(roleTimeout);
    };
  }, [currentWordIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-blue-600">Adapala Sriharsha Reddy</span>
            </h1>
            
            {/* Shuffling Words Animation */}
            <div className="h-12 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWordIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-2xl md:text-3xl text-blue-600 font-semibold"
                >
                  {displayWord}
                  <span className="animate-pulse">|</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Role Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-600 mb-8"
            >
              Full Stack Developer & AI Enthusiast
            </motion.div>

            <p className="text-gray-600 mb-8 text-lg">
              I build modern web applications and AI solutions that make a difference.
              Passionate about creating seamless user experiences and innovative solutions.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
                                  <div className="w-full max-w-xs mx-auto rounded-full overflow-hidden shadow-lg bg-white">
                        <img
                          src="/assets/images/profile.jpg"
                          alt="Adapala Sriharsha Reddy"
                          className="object-cover w-full h-full"
                        />
                      </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 