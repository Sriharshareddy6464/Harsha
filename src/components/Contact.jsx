import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1, height: 1 });

  const updateDimensions = useCallback(() => {
    if (sectionRef.current) {
      const { width, height } = sectionRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  const handleMouseMove = useCallback((event) => {
    if (sectionRef.current) {
      const { left, top } = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - left,
        y: event.clientY - top,
      });
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', updateDimensions);
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [updateDimensions, handleMouseMove]);

  useEffect(() => {
    if (dimensions.width <= 1 || dimensions.height <= 1) return;

    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const bgHue = (mousePosition.x / dimensions.width) * 360;
    const shapeHue = (mousePosition.y / dimensions.height) * 360;

    sectionElement.style.setProperty('--dynamic-bg-hue', String(bgHue));
    sectionElement.style.setProperty('--dynamic-shape-hue', String(shapeHue));
    
    sectionElement.style.setProperty('--dynamic-bg-saturation', '70%');
    sectionElement.style.setProperty('--dynamic-bg-lightness', '50%');
    sectionElement.style.setProperty('--dynamic-shape-saturation', '80%');
    sectionElement.style.setProperty('--dynamic-shape-lightness', '60%');

  }, [mousePosition, dimensions]);

  const getPathD = useCallback(() => {
    if (dimensions.width <= 1 || dimensions.height <= 1) return "M0,0 Z"; 

    const W = dimensions.width;
    const H = dimensions.height;
    
    // Normalize mouse X position, clamped between 0 (left) and 1 (right)
    const mxNorm = Math.max(0, Math.min(1, mousePosition.x / W));

    // Point P1 on the top edge (y=0)
    // P1.x moves from 0 (when mouse is left) to W (when mouse is right)
    const p1x = mxNorm * W;
    const p1y = 0;

    // Point P2 on the bottom edge (y=H)
    // P2.x moves from W (when mouse is left) to 0 (when mouse is right)
    const p2x = (1 - mxNorm) * W;
    const p2y = H;

    // The path defines a polygon using:
    // P1 (top edge, interpolated by mouse.x)
    // P2 (bottom edge, inversely interpolated by mouse.x)
    // Bottom-left corner (0, H)
    // Top-left corner (0, 0)
    // This polygon will cover the area to the "left" of the diagonal P1-P2,
    // bounded by the left edge of the screen.
    return `
      M ${p1x} ${p1y}
      L ${p2x} ${p2y}
      L 0 ${H}
      L 0 0
      Z
    `;
  }, [dimensions, mousePosition]);
  
  const pathD = getPathD();

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-20 overflow-hidden transition-colors duration-100 ease-linear
                 bg-[hsl(var(--dynamic-bg-hue,0)_var(--dynamic-bg-saturation,70%)_var(--dynamic-bg-lightness,50%))]"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        className="absolute inset-0 w-full h-full transition-colors duration-100 ease-linear z-0
                   fill-[hsl(var(--dynamic-shape-hue,180)_var(--dynamic-shape-saturation,80%)_var(--dynamic-shape-lightness,60%))]"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
      >
        <path d={pathD} />
      </svg>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Let's Build
          </h2>
          <p className="max-w-2xl mx-auto">
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
                <span className="text-gray-200">adapalasriharshareddy@gmail.com</span>
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
                <span className="text-gray-200">+91 9346946464</span>
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