import { motion } from 'framer-motion';


const services = [
  {
    title: "UI/UX Design",
    icon: "/assets/icons/design.svg",
    description: "Creating intuitive and visually appealing user experiences",
    points: [
      "User-centered design principles",
      "Wireframing and prototyping",
      "Responsive design for all devices",
      "User testing and feedback integration",
      "Design system creation",
      "Accessibility compliance"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Web Development",
    icon: "/assets/icons/web.svg", 
    description: "Building modern, scalable web applications",
    points: [
      "Full-stack development (React, Next.js, Node.js)",
      "RESTful API development",
      "Database design and optimization",
      "Performance optimization",
      "SEO and accessibility",
      "Cross-browser compatibility"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "DevOps & Infrastructure",
    icon: "/assets/icons/devops.svg",
    description: "Streamlining deployment and infrastructure management",
    points: [
      "Cloud infrastructure (AWS, Azure, GCP)",
      "CI/CD pipeline automation",
      "Containerization with Docker",
      "Kubernetes orchestration",
      "Monitoring and logging",
      "Security best practices"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI & Machine Learning",
    icon: "/assets/icons/ai.svg",
    description: "Implementing intelligent solutions and automation",
    points: [
      "Custom AI/ML model development",
      "Natural Language Processing (NLP)",
      "Computer Vision applications",
      "Model deployment and scaling",
      "Data preprocessing and analysis",
      "Integration with existing systems"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export default function WhatIDo() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="how-i-can-help">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in creating comprehensive digital solutions that combine cutting-edge technology 
            with user-centered design to deliver exceptional results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                {/* Service Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                  <div className="w-8 h-8 relative">
                                <img
                                  src={service.icon}
                                  alt={service.title}
                                  className="object-contain filter brightness-0 invert w-full h-full"
                                />
                              </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Service Points */}
                <div className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (pointIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create something amazing. Whether you need a complete solution 
              or help with a specific aspect of your project, I'm here to help.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Let's Start a Conversation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 