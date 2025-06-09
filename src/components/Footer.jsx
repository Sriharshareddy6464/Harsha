import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Adapala Sriharsha Reddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 