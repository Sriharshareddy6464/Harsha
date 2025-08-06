import { motion } from 'framer-motion';

import { useEffect, useRef } from 'react';

const skills = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "Python", 
      "TypeScript",
      "HTML/CSS",
      "SQL",
    ]
  },
  {
    category: "Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Django",
    ]
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Docker",
      "Postman",
      "Figma",
      "VS Code",
    ]
  },
  {
    category: "IDE",
    items: [
      "VS Code",
      "Cursor AI",
      "IntelliJ",
      "PyCharm",
      "WebStorm",
    ]
  },
  {
    category: "AI",
    items: [
      "OpenAI API",
      "HuggingFace",
      "LangChain",
      "Claude API",
      "Gemini API",
    ]
  },
  {
    category: "ML",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ]
  }
];

const tools = [
  // LLMs / AI / ML Tools
  { name: 'Gemini AI', icon: '/assets/icons/tools/gemini ai.svg', category: 'AI' },
  { name: 'Hugging Face', icon: '/assets/icons/tools/huggingface.png', category: 'AI' },
  { name: 'OpenAI', icon: '/assets/icons/tools/openai.svg', category: 'AI' },
  { name: 'Claude', icon: '/assets/icons/tools/claude.png', category: 'AI' },
  { name: 'Grok', icon: '/assets/icons/tools/grok.png', category: 'AI' },
  { name: 'DeepSeek', icon: '/assets/icons/tools/deepseek.png', category: 'AI' },
  { name: 'Perplexity', icon: '/assets/icons/tools/perplexity.svg', category: 'AI' },
  { name: 'Runway ML', icon: '/assets/icons/tools/runway.png', category: 'AI' },
  { name: 'Midjourney', icon: '/assets/icons/tools/midjourney.png', category: 'AI' },
  { name: 'ElevenLabs', icon: '/assets/icons/tools/elevenlabs.webp', category: 'AI' },
  { name: 'D-ID', icon: '/assets/icons/tools/d-id.png', category: 'AI' },
  { name: 'Descript', icon: '/assets/icons/tools/descript.png', category: 'AI' },
  { name: 'Replicate', icon: '/assets/icons/tools/replicate.svg', category: 'AI' },
  { name: 'Vercel AI SDK', icon: '/assets/icons/tools/vercel.ico', category: 'AI' },
  { name: 'Weights & Biases', icon: '/assets/icons/tools/wandb.webp', category: 'AI' },


  // Design / Creative / Animation Tools
  { name: 'Figma', icon: '/assets/icons/tools/figma.svg', category: 'Design' },
  { name: 'Framer', icon: '/assets/icons/tools/framermotion.svg', category: 'Design' },
  { name: 'Krita', icon: '/assets/icons/tools/krita.png', category: 'Design' },
  { name: 'LottieFiles', icon: '/assets/icons/tools/lottiefiles.png', category: 'Design' },
  { name: 'Lunacy', icon: '/assets/icons/tools/lunacy.svg', category: 'Design' },
  { name: 'Spline', icon: '/assets/icons/tools/spline.png', category: 'Design' },
  { name: 'Webflow', icon: '/assets/icons/tools/webflow.png', category: 'Design' },
  { name: 'Canva', icon: '/assets/icons/tools/canva.png', category: 'Design' },
  { name: 'Blender', icon: '/assets/icons/tools/blender.svg', category: 'Design' },
  { name: 'Adobe XD', icon: '/assets/icons/tools/adobexd.svg', category: 'Design' },
  { name: 'Adobe Photoshop', icon: '/assets/icons/tools/photoshop.svg', category: 'Design' },
  { name: 'Adobe Lightroom', icon: '/assets/icons/tools/lightroom.svg', category: 'Design' },
  { name: 'Adobe Illustrator', icon: '/assets/icons/tools/illustrator.svg', category: 'Design' },
  { name: 'Adobe After Effects', icon: '/assets/icons/tools/aftereffects.svg', category: 'Design' },
  { name: 'Rive', icon: '/assets/icons/tools/rive.png', category: 'Design' },

  // Dev Tools / Platforms
  { name: 'Cursor IDE', icon: '/assets/icons/tools/cursorai.png', category: 'Dev' },
  { name: 'Google AI Studio', icon: '/assets/icons/tools/google ai studio.png', category: 'Dev' },
  { name: 'GSAP', icon: '/assets/icons/tools/gsap.png', category: 'Dev' },
  { name: 'Notion', icon: '/assets/icons/tools/notion.png', category: 'Dev' },
  { name: 'Vercel', icon: '/assets/icons/tools/vercel.svg', category: 'Dev' },
  { name: 'Postman', icon: '/assets/icons/tools/postman.svg', category: 'Dev' },
  { name: 'GitHub Actions', icon: '/assets/icons/tools/githubactions.png', category: 'Dev' },
  { name: 'Docker', icon: '/assets/icons/tools/docker.svg', category: 'Dev' },
  { name: 'Railway', icon: '/assets/icons/tools/railway.svg', category: 'Dev' },
];

const Skills = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical skills that I've developed through
            years of experience and continuous learning.
          </p>
        </motion.div>

                 <div className="grid grid-cols-6 gap-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {skillGroup.category}
              </h3>
                             <div className="space-y-3">
                 {skillGroup.items.map((skill, skillIndex) => (
                   <div key={skillIndex} className="flex items-center">
                     <span className="text-gray-700 font-medium">{skill}</span>
                   </div>
                 ))}
               </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section with Infinite Scroll */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Tools & Technologies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of modern tools and technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="relative w-full overflow-hidden bg-white py-8 rounded-lg shadow-sm">
            <div 
              ref={scrollRef}
              className="flex space-x-12 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* First set of tools */}
              <div className="flex space-x-12">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 mb-2 relative bg-white rounded-lg p-2 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="object-contain p-1 w-full h-full"
                      />
                    </div>
                    <span className="text-xs text-gray-700 font-medium text-center max-w-[100px]">
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-gray-500 mt-1">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12">
                {tools.map((tool, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 mb-2 relative bg-white rounded-lg p-2 shadow-sm transition-transform duration-300 group-hover:scale-110">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="object-contain p-1 w-full h-full"
                      />
                    </div>
                    <span className="text-xs text-gray-700 font-medium text-center max-w-[100px]">
                      {tool.name}
                    </span>
                    <span className="text-[10px] text-gray-500 mt-1">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 