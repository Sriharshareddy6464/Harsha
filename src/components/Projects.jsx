import { motion } from 'framer-motion';

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
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "VS Code Clone",
      description: "A hand-coded tribute to VS Code's homepage with custom wave animations and modern design principles.",
      image: "/assets/images/projects/image.png",
      technologies: ["HTML5", "CSS3", "Vite.js", "TypeScript"],
      github: "https://github.com/Sriharshareddy6464/100x_vscode_clone",
      live: "https://100x-vscode-clone.vercel.app/"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management and payment processing.",
      image: "/assets/images/projects/ecommerce.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Sriharshareddy6464/ecommerce",
      live: "https://ecommerce-demo.vercel.app/"
    },
    {
      title: "404CULT Website",
      description: "A platform for community exploring and sharing 404 errors of developers.",
      image: "/assets/images/projects/404cult.jpg",
      technologies: ["React", "Vite", "Express", "Tailwind CSS"],
      github: "https://github.com/Sriharshareddy6464/404-cult",
      live: "https://404-cult.vercel.app/",

    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A collection of my recent web development projects showcasing my
            expertise in building modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block cursor-pointer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                      />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
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
                  <Button size="sm" asChild>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
                <BorderBeam
                  duration={4}
                  size={300}
                  className="from-transparent via-blue-500 to-transparent"
                />
                <BorderBeam
                  duration={4}
                  delay={2}
                  size={300}
                  borderWidth={2}
                  className="from-transparent via-purple-500 to-transparent"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 