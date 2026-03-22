import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-warmBg/70 backdrop-blur-sm z-50 border-b border-secondaryAccent/30"
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl sm:text-2xl font-playfair text-accent font-semibold tracking-widest">
            Capture life
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            <a href="#home" className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="relative">
              <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base">
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-cardBg shadow-lg rounded-md py-2 z-10 border border-gold/20"
                >
                  <a href="#weddings" className="block px-4 py-2 text-white hover:bg-gold/20 font-poppins">Weddings</a>
                  <a href="#maternity" className="block px-4 py-2 text-white hover:bg-gold/20 font-poppins">Maternity</a>
                  <a href="#family" className="block px-4 py-2 text-white hover:bg-gold/20 font-poppins">Family</a>
                  <a href="#portraits" className="block px-4 py-2 text-white hover:bg-gold/20 font-poppins">Portraits</a>
                </motion.div>
              )}
            </div>
            <a href="#pricing" className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-textPrimary hover:text-accent transition duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warmBg/95 backdrop-blur-sm border-t border-secondaryAccent/30"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <div>
                <button onClick={() => setIsOpen(!isOpen)} className="text-textPrimary hover:text-accent transition duration-300 font-poppins">
                  Portfolio
                </button>
                {isOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <a href="#weddings" className="block text-textSecondary hover:text-accent font-poppins" onClick={() => setMobileMenuOpen(false)}>Weddings</a>
                    <a href="#maternity" className="block text-textSecondary hover:text-accent font-poppins" onClick={() => setMobileMenuOpen(false)}>Maternity</a>
                    <a href="#family" className="block text-textSecondary hover:text-accent font-poppins" onClick={() => setMobileMenuOpen(false)}>Family</a>
                    <a href="#portraits" className="block text-textSecondary hover:text-accent font-poppins" onClick={() => setMobileMenuOpen(false)}>Portraits</a>
                  </div>
                )}
              </div>
              <a href="#pricing" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#contact" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;