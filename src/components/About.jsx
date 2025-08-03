import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Brain, Code, Cloud, Users, Target, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Brain,
      title: "AI Engineer",
      description: "Generative AI, MLOps, Machine Learning",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Next.js, React, Modern Web Technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "DevOps Specialist",
      description: "Cloud Infrastructure, CI/CD, Scalable Systems",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const principles = [
    {
      icon: Target,
      title: "Start Smart",
      description: "Strategic planning and intelligent architecture"
    },
    {
      icon: Zap,
      title: "Build Fast",
      description: "Rapid development and MVP delivery"
    },
    {
      icon: Users,
      title: "Design with Soul",
      description: "User-centered design with meaningful impact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
                     <div className="max-w-4xl mx-auto space-y-6">
             <p className="text-xl text-white leading-relaxed">
               I'm <span className="text-blue-300 font-semibold">Sri Harsha</span>, a Computer Science Engineering graduate focused on becoming an AI Engineer, Full-Stack Web Developer, and DevOps Specialist. My skill set spans Cloud, MLOps, Generative AI, and modern Web Technologies.
             </p>
             <p className="text-lg text-white leading-relaxed">
               I believe in building with purpose — whether it's developing AI-first solutions or rapidly delivering MVP products, designing seamless frontends with Next.js, or deploying scalable systems through DevOps pipelines.
             </p>
             <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
               <p className="text-lg text-white mb-4">
                 I'm also the co-founder of <span className="text-purple-300 font-semibold">404Cult</span>, an open-source frontend community dedicated to experimenting, designing, and sharing impactful UI/UX work.
               </p>
             </div>
           </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
                     <h3 className="text-2xl font-bold text-center mb-8 text-white">My Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{skill.title}</CardTitle>
                  </CardHeader>
                                     <CardContent className="text-center">
                     <p className="text-white">{skill.description}</p>
                   </CardContent>
                  <BorderBeam
                    duration={4}
                    size={300}
                    className="from-transparent via-blue-400 to-transparent"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
                     <h3 className="text-2xl font-bold mb-6 text-white">My Approach</h3>
           <p className="text-xl text-white mb-8">
             Simple but strategic:
           </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-center mb-4">
                  <principle.icon className="w-8 h-8 text-blue-400" />
                </div>
                                 <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                 <p className="text-white text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
            <p className="text-2xl font-bold text-white mb-4">
              Whether it's AI-first, MVP-first, or Design-first — the mission stays the same:
            </p>
            <div className="text-3xl md:text-4xl font-bold text-white space-y-2">
              <p>Make it real.</p>
              <p>Make it matter.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
              asChild
            >
              <a href="#contact">Let's Build Something Amazing</a>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-full"
              asChild
            >
              <a href="/resume/Adapala Sriharsha Reddy.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 