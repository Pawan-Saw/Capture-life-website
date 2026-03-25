import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (!isOpen) return;
      const target = e.target as Node | null;
      if (target && dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const closeAllMenus = () => {
    setIsOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-warmBg/70 backdrop-blur-sm z-50 border-b border-secondaryAccent/30"
    >
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl sm:text-2xl font-playfair text-accent font-semibold tracking-widest">
            Capture life
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-10">
            <a
              href="/#home"
              onClick={closeAllMenus}
              className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/#about"
              onClick={closeAllMenus}
              className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base"
              >
                Our Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 z-10 w-56 pt-2 rounded-lg border border-gold/20 bg-cardBg shadow-lg overflow-hidden"
                >
                  <div className="py-2 flex flex-col">
                    <Link
                      to="/services/candid-photography"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Candid Photography
                    </Link>
                    <Link
                      to="/services/pre-wedding-photography"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Pre-Wedding Photography
                    </Link>
                    <Link
                      to="/services/portrait-photography"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Portrait Photography
                    </Link>
                    <Link
                      to="/services/ring-ceremony-photography"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Ring Ceremony Photography
                    </Link>
                    <Link
                      to="/services/portfolio-photography"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Portfolio Photography
                    </Link>
                    <Link
                      to="/services/baby-shoot"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Baby Shoot
                    </Link>
                    <Link
                      to="/services/maternity-photography"
                      onClick={closeAllMenus}
                      className="px-4 py-2 text-textPrimary hover:bg-accent/15 hover:text-accent transition-colors font-poppins text-sm leading-tight"
                    >
                      Maternity Photography
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>
            <a
              href="/#pricing"
              onClick={closeAllMenus}
              className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold/60 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/gallery"
              onClick={closeAllMenus}
              className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold/60 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/#contact"
              onClick={closeAllMenus}
              className="text-textPrimary hover:text-accent transition duration-300 relative group tracking-wider font-poppins text-sm lg:text-base"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="tel:6354595035"
              aria-label="Call 6354595035"
              className="text-textPrimary hover:text-accent transition duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5.25a2.25 2.25 0 012.25-2.25h2.106a2.25 2.25 0 012.186 1.715l.622 2.488a2.25 2.25 0 01-.985 2.435l-1.37.822a15.05 15.05 0 006.766 6.766l.822-1.37a2.25 2.25 0 012.435-.985l2.488.622a2.25 2.25 0 011.715 2.186v2.106A2.25 2.25 0 0118.75 21h-1.5C9.38 21 3 14.62 3 6.75v-1.5z"
                />
              </svg>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => {
              setIsOpen(false);
              setMobileMenuOpen((v) => !v);
            }}
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
              <a href="/#home" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={closeAllMenus}>
                Home
              </a>
              <a href="/#about" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={closeAllMenus}>
                About
              </a>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="block text-textPrimary hover:text-accent transition duration-300 font-poppins"
                >
                  Our Services
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 space-y-2">
                    <Link to="/services/candid-photography" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Candid Photography
                    </Link>
                    <Link to="/services/pre-wedding-photography" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Pre-Wedding Photography
                    </Link>
                    <Link to="/services/portrait-photography" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Portrait Photography
                    </Link>
                    <Link to="/services/ring-ceremony-photography" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Ring Ceremony Photography
                    </Link>
                    <Link to="/services/portfolio-photography" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Portfolio Photography
                    </Link>
                    <Link to="/services/baby-shoot" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Baby Shoot
                    </Link>
                    <Link to="/services/maternity-photography" className="block rounded-md px-2 py-1 text-textSecondary hover:bg-accent/10 hover:text-accent font-poppins transition-colors" onClick={closeAllMenus}>
                      Maternity Photography
                    </Link>
                  </div>
                )}
              </div>
              <a href="/#pricing" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/gallery" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={closeAllMenus}>
                Gallery
              </a>
              <a href="/#contact" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={closeAllMenus}>
                Contact
              </a>
              <a href="tel:6354595035" className="block text-textPrimary hover:text-accent transition duration-300 font-poppins" onClick={closeAllMenus}>
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;