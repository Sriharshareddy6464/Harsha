import { motion } from 'framer-motion';
import Image from 'next/image';

const DevOps = () => {
  const projects = [
    {
      title: "Cloud Infrastructure",
      description: "Automated cloud infrastructure setup using Terraform and AWS services.",
      image: "/assets/images/projects/cloud.jpg",
      technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
      github: "https://github.com/yourusername/cloud-infra",
      details: "https://cloud-infra-docs.com"
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
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.details}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOps; 