import { motion } from 'framer-motion';

import { FlickeringGrid } from '@/components/magicui/flickering-grid';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ExternalLink, Github, Brain } from "lucide-react";

const aiProjects = [
  {
    title: 'Creorez AI resume Builder',
    description: 'AI-powered resume builder that helps users create professional resumes effortlessly.',
    image: '/assets/images/projects/creorez.png',
    technologies: ['Python', 'React', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/Sriharshareddy6464/doityourez',
    demo: 'https://creores.vercel.app/',
  },
  {
    title: 'Sentiment Analysis using NLTK',
    description: 'Natural Language Toolkit (NLTK) based project for text processing and analysis.',
    image: 'https://placehold.co/400x300?text=NLTK',
    technologies: ['NLTK', 'Python'],
    github: 'https://github.com/yourusername/nltk-nlp',
    demo: '',
  },
  {
    title: 'Deepfake Detection',
    description: 'A deep learning model to detect deepfake images and videos.',
    image: 'https://placehold.co/400x300?text=Deepfake',
    technologies: ['TensorFlow', 'OpenCV', 'Python'],
    github: 'https://github.com/yourusername/deepfake-detection',
    demo: '',
  },
  {
    title: 'Emotion Detection',
    description: 'Detects emotions from text or images using AI models.',
    image: 'https://placehold.co/400x300?text=Emotion+Detection',
    technologies: ['PyTorch', 'Transformers', 'Python'],
    github: 'https://github.com/yourusername/emotion-detection',
    demo: '',
  },
  {
    title: 'Text Classification Model',
    description: 'A fine-tuned BERT model for sentiment analysis and text classification tasks.',
    image: 'https://placehold.co/400x300?text=Text+AI',
    technologies: ['HuggingFace', 'PyTorch', 'Transformers', 'Python'],
    github: 'https://github.com/yourusername/text-classifier',
    demo: 'https://text-classifier-demo.com',
  },
  {
    title: 'Image Generation App',
    description: 'An application that generates images from text descriptions using Stable Diffusion.',
    image: 'https://placehold.co/400x300?text=Image+Gen',
    technologies: ['Stable Diffusion', 'FastAPI', 'Python', 'React'],
    github: 'https://github.com/yourusername/image-gen',
    demo: 'https://image-gen-demo.com',
  },
];

const AIProjects = () => {
  return (
    <section id="ai-projects" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* FlickeringGrid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#3B82F6"
        maxOpacity={0.3}
        flickerChance={0.05}
        height={1200}
        width={1920}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            AI & Machine Learning Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my work in artificial intelligence and machine learning, including NLP, computer vision, and more.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {aiProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border border-gray-200/50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
                <BorderBeam
                  duration={4}
                  size={300}
                  className="from-transparent via-purple-500 to-transparent"
                />
                <BorderBeam
                  duration={4}
                  delay={2}
                  size={300}
                  borderWidth={2}
                  className="from-transparent via-pink-500 to-transparent"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects; 