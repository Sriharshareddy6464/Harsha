import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: "Bachelor's in Computer Science and Engineering",
      school: "Guru Nanak Instituion of Technology , GNIT , Hyderabad",
      year: "2022-2025",
      description: "Focused on AI, Machine Learning, and Software Engineering"
    },
    {
      degree: "Diploma in Computer Science and Engineering",
      school: "TKR Polytechnic College , Hyderabad",
      year: "2019-2022",
      description: " learned about programming languages like C, C++, Java, and Python. Also learned about software engineering and database management."
    },
    // Add more education items
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "NO company",
      period: "2020-2023",
      description: "Developed and maintained web applications using React, Node.js, and cloud technologies"
    },
    // Add more experience items
    {
      role: "AI Developer",
      company: "NO company",
      period: "2023-present",
      description: "Developed and deployed intelligent applications using Python, machine learning frameworks (such as TensorFlow, PyTorch), and cloud-based AI services. Built models for classification, detection, and natural language tasks, integrating them into scalable APIs and web platforms."
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-blue-600 text-black ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto">
            A passionate developer with expertise in full-stack development and AI.
            Always eager to learn and implement new technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-gray-800">
                    {edu.degree}
                  </h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-gray-500 mb-2">{edu.year}</p>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 mb-2">{exp.period}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 