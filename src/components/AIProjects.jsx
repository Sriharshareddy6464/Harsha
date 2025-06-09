import { motion } from 'framer-motion';
import Image from 'next/image';

const aiProjects = [
  {
    title: 'AI Chatbot',
    description: 'Conversational AI chatbot for customer support and automation.',
    image: 'https://placehold.co/400x300?text=Chatbot',
    technologies: ['Rasa', 'Python', 'React'],
    github: 'https://github.com/yourusername/ai-chatbot',
    demo: 'https://ai-chatbot-demo.com',
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
    <section id="ai-projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
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
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm font-medium"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIProjects; 