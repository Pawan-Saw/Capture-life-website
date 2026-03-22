import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-warmSection text-textPrimary py-6 md:py-8 border-t border-secondaryAccent/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 text-center">
        <p className="font-poppins text-textPrimary text-sm md:text-base">&copy; 2026 Luxury Wedding Photography. All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 mt-4">
          <a href="#" className="hover:text-accent transition duration-300 font-poppins text-sm md:text-base">Instagram</a>
          <a href="#" className="hover:text-accent transition duration-300 font-poppins text-sm md:text-base">Facebook</a>
          <a href="#" className="hover:text-accent transition duration-300 font-poppins text-sm md:text-base">Twitter</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;