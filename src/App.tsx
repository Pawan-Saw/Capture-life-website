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
    </div>
  );
}

export default App;

