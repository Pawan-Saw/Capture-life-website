import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Wedding from './components/Wedding';
import AboutUs from './components/AboutUs';
import PortfolioPreview from './components/PortfolioPreview';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-warmBg text-textPrimary font-poppins overflow-x-hidden">
      <Navbar />
      <Hero />
      <Wedding />
      <AboutUs />
      <PortfolioPreview />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/7033121233"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_25px_rgba(37,211,102,0.35)] flex items-center justify-center animate-pulse transition-transform duration-300 hover:scale-105"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 11.9999C20 16.4182 16.4183 19.9999 12 19.9999C10.4667 19.9999 9.03869 19.5665 7.83333 18.8009L4 20L5.19914 16.2012C4.43363 14.9958 4 13.5667 4 12.0333C4 7.61492 7.58172 4.0332 12 4.0332C16.4183 4.0332 20 7.61492 20 11.9999Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 9.6C9.7 10.8 10.6 11.7 11.8 12.2C12.1 12.3 12.3 12.2 12.5 12L13.1 11.4C13.3 11.2 13.5 11.1 13.8 11.2L15 11.6C15.3 11.7 15.4 12 15.3 12.3C15 13.3 14 13.9 12.9 13.7C10.8 13.4 8.6 11.2 8.3 9.1C8.1 8 8.7 7 9.7 6.7C10 6.6 10.3 6.7 10.4 7L10.8 8.2C10.9 8.5 10.8 8.7 10.6 8.9L10 9.5C9.8 9.7 9.7 9.9 9.8 10.2"
            fill="white"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;

