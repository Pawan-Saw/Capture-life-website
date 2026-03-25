import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Navbar from './Navbar';

type ServiceKey =
  | 'candid-photography'
  | 'pre-wedding-photography'
  | 'portrait-photography'
  | 'ring-ceremony-photography'
  | 'portfolio-photography'
  | 'baby-shoot'
  | 'maternity-photography';

type ServiceConfig = {
  title: string;
  description: string;
  accent: string;
  heroImage: string;
  gallery: [string, string];
  bullets: string[];
  variant: 1 | 2 | 3 | 4;
  shootGrid?: string[];
};

const serviceConfig: Record<ServiceKey, ServiceConfig> = {
  'candid-photography': {
    title: 'Candid Photography',
    description: 'Natural, story-led moments captured with an artistic documentary style.',
    accent: '#aa3bff',
    heroImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Candid storytelling', 'Natural posing guidance', 'Cinematic color grading'],
    variant: 4,
    shootGrid: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  'pre-wedding-photography': {
    title: 'Pre-Wedding Photography',
    description: 'Romantic pre-wedding sessions with cinematic framing and premium edits.',
    accent: '#C8A97E',
    heroImage: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Golden hour shoots', 'Cinematic framing', 'Premium retouching'],
    variant: 2,
  },
  'portrait-photography': {
    title: 'Portrait Photography',
    description: 'Elegant portraits crafted with flattering light and refined retouching.',
    accent: '#8A6F54',
    heroImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Studio-style posing', 'Texture & skin retouching', 'High-detail final gallery'],
    variant: 3,
  },
  'ring-ceremony-photography': {
    title: 'Ring Ceremony Photography',
    description: 'Complete coverage of ring ceremony moments with candid and posed shots.',
    accent: '#2C2C2C',
    heroImage: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Moment coverage', 'Emotive candid frames', 'Event timeline gallery'],
    variant: 1,
  },
  'portfolio-photography': {
    title: 'Portfolio Photography',
    description: 'Professional portfolio shoots designed for personal branding and modeling.',
    accent: '#C8A97E',
    heroImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Brand-ready edits', 'Outfit & pose direction', 'Cohesive portfolio set'],
    variant: 2,
  },
  'baby-shoot': {
    title: 'Baby Shoot',
    description: 'Soft, joyful baby sessions focused on comfort, emotion, and timeless keepsakes.',
    accent: '#aa3bff',
    heroImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Comfort-first sessions', 'Gentle lighting', 'A keepsake gallery'],
    variant: 3,
  },
  'maternity-photography': {
    title: 'Maternity Photography',
    description: 'Graceful maternity sessions celebrating motherhood with warm visual storytelling.',
    accent: '#8A6F54',
    heroImage: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
    ],
    bullets: ['Warm storytelling', 'Elegant posing guidance', 'Soft cinematic color'],
    variant: 2,
  },
};

const defaultConfig: ServiceConfig = {
  title: 'Service',
  description: 'Service details coming soon.',
  accent: '#C8A97E',
  heroImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  ],
  bullets: ['Premium edits', 'Great posing guidance', 'Beautiful final gallery'],
  variant: 1,
};

const ServiceDetailPage = () => {
  const { slug = '' } = useParams();
  const config = (serviceConfig as Partial<Record<string, ServiceConfig>>)[slug] || defaultConfig;

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-warmBg text-textPrimary pt-24 pb-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl overflow-hidden border border-secondaryAccent/20 shadow-[0_10px_35px_rgba(0,0,0,0.08)] bg-cardBg"
        >
          {/* Hero */}
          <div
            className="relative w-full"
            style={{
              backgroundImage: `url(${config.heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, rgba(245,241,235,0.98) 0%, rgba(245,241,235,0.65) 45%, rgba(245,241,235,0.2) 100%)` }} />
            <div className="relative p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondaryAccent/20 bg-warmBg/70 px-4 py-2">
                <span className="h-2 w-2 rounded-full" style={{ background: config.accent }} />
                <span className="font-poppins text-sm text-textSecondary">Service</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-playfair" style={{ color: config.accent }}>
                {config.title}
              </h1>
              <p className="mt-3 max-w-2xl font-poppins text-textSecondary text-lg leading-relaxed">
                {config.description}
              </p>
            </div>
          </div>

          {/* Body variants (different layout / styling per service) */}
          {config.variant === 1 && (
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-warmBg">
                    <img src={config.gallery[0]} alt="Service preview 1" className="w-full h-64 object-cover" />
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="rounded-3xl border border-secondaryAccent/20 bg-warmBg p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-playfair">What you get</h2>
                    <ul className="mt-4 space-y-3">
                      {config.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full" style={{ background: config.accent }} />
                          <span className="font-poppins text-textSecondary leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/services"
                        className="rounded-full bg-accent text-white px-6 py-2 font-semibold text-sm"
                        style={{ background: config.accent }}
                      >
                        Back to Services
                      </Link>
                      <Link
                        to="/#contact"
                        className="rounded-full border border-secondaryAccent px-6 py-2 font-semibold text-sm hover:bg-secondaryAccent/10 transition"
                      >
                        Contact for Booking
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-warmBg">
                  <img src={config.gallery[1]} alt="Service preview 2" className="w-full h-72 object-cover" />
                </div>
              </div>
            </div>
          )}

          {config.variant === 2 && (
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 relative">
                  <img src={config.gallery[0]} alt="Service image" className="w-full h-80 md:h-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)`,
                    }}
                  />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="text-white font-poppins text-sm">
                      Signature style
                    </div>
                    <div className="text-white font-playfair text-2xl" style={{ color: '#fff' }}>
                      Premium Editing & Cinematic Color
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-secondaryAccent/20 bg-warmBg p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-playfair">Included in this service</h2>
                    <ul className="mt-4 space-y-3">
                      {config.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="mt-1.5 h-2.5 w-2.5 rounded-full" style={{ background: config.accent }} />
                          <span className="font-poppins text-textSecondary leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="rounded-2xl border border-secondaryAccent/20 bg-white/50 p-4">
                      <p className="font-poppins text-sm text-textSecondary">
                        Want a quote? We will confirm availability and suggest best timing for your location.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/services"
                        className="rounded-full text-white px-6 py-2 font-semibold text-sm"
                        style={{ background: config.accent }}
                      >
                        Back to Services
                      </Link>
                      <Link
                        to="/#pricing"
                        className="rounded-full border border-secondaryAccent px-6 py-2 font-semibold text-sm hover:bg-secondaryAccent/10 transition"
                      >
                        View Packages
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-warmBg">
                <img src={config.gallery[1]} alt="Service extra image" className="w-full h-72 object-cover" />
              </div>
            </div>
          )}

          {config.variant === 3 && (
            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="rounded-3xl border border-secondaryAccent/20 bg-warmBg p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-playfair">A refined experience</h2>
                    <p className="mt-3 font-poppins text-textSecondary leading-relaxed">
                      {config.title} sessions are designed to feel comfortable, guided, and premium—so you get portraits that look effortless and elegant.
                    </p>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {config.bullets.slice(0, 2).map((b, idx) => (
                        <div key={b} className="rounded-2xl border border-secondaryAccent/20 bg-white/50 p-4">
                          <div className="text-xs uppercase tracking-widest font-poppins text-textSecondary">
                            Step {idx + 1}
                          </div>
                          <div className="mt-2 font-poppins text-[#2C2C2C]">{b}</div>
                        </div>
                      ))}
                      {config.bullets.slice(2, 3).map((b) => (
                        <div key={b} className="sm:col-span-2 rounded-2xl border border-secondaryAccent/20 bg-white/50 p-4">
                          <div className="text-xs uppercase tracking-widest font-poppins text-textSecondary">
                            Final Deliverables
                          </div>
                          <div className="mt-2 font-poppins text-[#2C2C2C]">{b}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to="/services"
                        className="rounded-full text-white px-6 py-2 font-semibold text-sm"
                        style={{ background: config.accent }}
                      >
                        Back to Services
                      </Link>
                      <Link
                        to="/#contact"
                        className="rounded-full border border-secondaryAccent px-6 py-2 font-semibold text-sm hover:bg-secondaryAccent/10 transition"
                      >
                        Contact for Booking
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-warmBg relative">
                    <img src={config.gallery[0]} alt="Portrait style image" className="w-full h-80 object-cover" />
                    <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 20%, ${config.accent}2a 0%, transparent 50%)` }} />
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-warmBg">
                <img src={config.gallery[1]} alt="Portrait style image 2" className="w-full h-72 object-cover" />
              </div>
            </div>
          )}

          {config.variant === 4 && (
            <div className="p-6 md:p-10">
              {/* Text + collage */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-1"
                >
                  <div className="rounded-3xl border border-secondaryAccent/20 bg-warmBg p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-secondaryAccent/20 bg-cardBg px-4 py-2">
                      <span className="h-2 w-2 rounded-full" style={{ background: config.accent }} />
                      <span className="font-poppins text-sm text-textSecondary">Candid Photography</span>
                    </div>
                    <h2 className="mt-5 text-3xl font-playfair" style={{ color: config.accent }}>
                      Candid, Emotion & Story
                    </h2>
                    <p className="mt-3 font-poppins text-textSecondary leading-relaxed">
                      {config.description}
                    </p>

                    <div className="mt-5 space-y-2">
                      {config.bullets.map((b) => (
                        <div key={b} className="flex items-start gap-3">
                          <span className="mt-1 h-2.5 w-2.5 rounded-full" style={{ background: config.accent }} />
                          <span className="font-poppins text-textSecondary">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7">
                      <Link
                        to="/#contact"
                        className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-2.5 font-semibold text-sm"
                      >
                        Let’s Discuss
                      </Link>
                    </div>
                  </div>
                </motion.div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-cardBg shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                      <img
                        src={config.heroImage}
                        alt="Candid hero"
                        className="h-72 w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-cardBg shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                        <img
                          src={config.gallery[0]}
                          alt="Candid preview 1"
                          className="h-36 w-full object-cover"
                        />
                      </div>
                      <div className="rounded-3xl overflow-hidden border border-secondaryAccent/20 bg-cardBg shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                        <img
                          src={config.gallery[1]}
                          alt="Candid preview 2"
                          className="h-36 w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="mt-12">
                <h3 className="text-2xl md:text-3xl font-playfair text-center mb-6">
                  Some of our Candid Shoots...
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {(config.shootGrid || [config.heroImage, config.gallery[0], config.gallery[1]]).slice(0, 6).map((src) => (
                    <div key={src} className="rounded-2xl overflow-hidden border border-secondaryAccent/20 bg-cardBg">
                      <img src={src} alt="Candid shoot" className="w-full h-44 md:h-40 object-cover" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="rounded-full bg-accent text-white px-6 py-2.5 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  >
                    See More →
                  </button>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/services"
                  className="rounded-full border border-secondaryAccent px-6 py-2 font-semibold text-sm hover:bg-secondaryAccent/10 transition"
                >
                  Back to Services
                </Link>
                <Link
                  to="/#pricing"
                  className="rounded-full bg-accent text-white px-6 py-2 font-semibold text-sm hover:opacity-95 transition"
                >
                  View Packages
                </Link>
              </div>
            </div>
          )}
        </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
