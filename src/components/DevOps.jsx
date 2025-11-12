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
import { ExternalLink, Github, FileText } from "lucide-react";

const DevOps = () => {
  const projects = [
    {
      title: "Creorez for Cloud Infrastructure",
      description: "Deploying and Utilizing AWS microservices for the Creorez platform for generating latex to pdf.",
      image: '/assets/images/projects/creorez.png',
      technologies: ["AWS", "EC2"],
      github: "https://github.com/Sriharshareddy6464/doityourez/blob/main/devops/doc/architecture.md",
      details: "https://cerores.vercel.app/"
    },
    {
      title: "CI/CD Pipeline",
      description: "End-to-end CI/CD pipeline implementation with GitHub Actions and Docker.",
      image: "/assets/images/projects/cicd.jpg",
      technologies: ["GitHub Actions", "Docker", "AWS", "Terraform"],
      github: "https://github.com/yourusername/cicd-pipeline",
      details: "https://cicd-docs.com"
    },
    {
      title: "Monitoring System",
      description: "Comprehensive monitoring and logging system using Prometheus and Grafana.",
      image: "/assets/images/projects/monitoring.jpg",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "Docker"],
      github: "https://github.com/yourusername/monitoring",
      details: "https://monitoring-docs.com"
    }
  ];

  return (
    <section id="devops" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            DevOps & Infrastructure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building scalable and reliable infrastructure solutions using modern
            DevOps practices and cloud technologies.
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
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium"
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
                      href={project.details}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <FileText className="h-4 w-4" />
                      Documentation
                    </a>
                  </Button>
                </CardFooter>
                <BorderBeam
                  duration={4}
                  size={300}
                  className="from-transparent via-green-500 to-transparent"
                />
                <BorderBeam
                  duration={4}
                  delay={2}
                  size={300}
                  borderWidth={2}
                  className="from-transparent via-emerald-500 to-transparent"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOps; 