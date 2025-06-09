import { motion } from 'framer-motion';
import Image from 'next/image';

const socialLinks = [
  {
    name: 'Gmail',
    url: 'mailto:adapalasriharshareddy@gmail.com',
    icon: '/assets/icons/gmail.svg',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sriharshareddy-adapala-781a76299/?trk=opento_sprofile_details',
    icon: '/assets/icons/linkedin.svg',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Sriharshareddy6464',
    icon: '/assets/icons/github.svg',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/SriharshaXIX',
    icon: '/assets/icons/x.svg',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/your-profile',
    icon: '/assets/icons/facebook.svg',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Let's Build
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-black">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/assets/icons/gmail.svg"
                    alt="Email"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-700">adapalasriharshareddy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 relative">
                  <Image
                    src="/assets/icons/phone.svg"
                    alt="Phone"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-700">+91 9346946464</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6 mt-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 relative">
                  <Image
                    src={social.icon}
                    alt={social.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 