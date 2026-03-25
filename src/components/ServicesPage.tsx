import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';

const services = [
  { title: 'Candid Photography', slug: 'candid-photography' },
  { title: 'Pre-Wedding Photography', slug: 'pre-wedding-photography' },
  { title: 'Portrait Photography', slug: 'portrait-photography' },
  { title: 'Ring Ceremony Photography', slug: 'ring-ceremony-photography' },
  { title: 'Portfolio Photography', slug: 'portfolio-photography' },
  { title: 'Baby Shoot', slug: 'baby-shoot' },
  { title: 'Maternity Photography', slug: 'maternity-photography' },
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-warmBg text-textPrimary pt-24 pb-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-playfair mb-3"
        >
          Our Services
        </motion.h1>
        <p className="text-textSecondary font-poppins mb-8">
          Explore each service in detail.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl bg-cardBg border border-secondaryAccent/20 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-xl font-playfair mb-4">{service.title}</h3>
              <Link
                to={`/services/${service.slug}`}
                className="inline-flex rounded-full bg-accent text-white px-5 py-2 text-sm font-semibold"
              >
                View Service
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicesPage;
