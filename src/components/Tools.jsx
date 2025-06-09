import { motion } from 'framer-motion';
import Image from 'next/image';

const Tools = () => {
  const tools = [
    {
      category: "Design Tools",
      items: [
        {
          name: "Canva",
          description: "Graphic design and social media",
          icon: "/assets/icons/tools/canva.png"
        },
        {
          name: "Figma",
          description: "UI/UX design and prototyping",
          icon: "/assets/icons/tools/figma.svg"
        },
        {
          name: "Adobe XD",
          description: "User experience design",
          icon: "/assets/icons/tools/adobexd.svg"
        },
      ]
    },
    {
      category: "Development Tools",
      items: [
        {
          name: "Cursor AI IDE",
          description: "Code editor and IDE",
          icon: "/assets/icons/tools/cursorai.png"
        },
        {
          name: "Git",
          description: "Version control system",
          icon: "/assets/icons/tools/github.svg"
        },
        {
          name: "Postman",
          description: "API development and testing",
          icon: "/assets/icons/tools/postman.svg"
        }
      ]
    },
    {
      category: "Productivity",
      items: [
        {
          name: "Notion",
          description: "Project management and documentation",
          icon: "/assets/icons/tools/notion.png"
        },
        {
          name: "Slack",
          description: "Team communication",
          icon: "/assets/icons/tools/slack.png"
        },
        {
          name: "Trello",
          description: "Task management",
          icon: "/assets/icons/tools/trello.png"
        }
      ]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-orange-500 text-white ">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-white">
            Tools & Technologies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-white">
            A collection of tools and technologies I use to bring ideas to life
            and streamline my workflow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="flex items-center space-x-4"
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools; 