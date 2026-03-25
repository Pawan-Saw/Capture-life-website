import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

type Category = {
  name: string;
  slug: string;
};

const categories: Category[] = [
  { name: 'Pre-Wedding Photography', slug: 'pre-wedding-photography' },
  { name: 'Ring Ceremony Photography', slug: 'ring-ceremony-photography' },
  { name: 'Candid Photography', slug: 'candid-photography' },
  { name: 'Portrait Photography', slug: 'portrait-photography' },
  { name: 'Portfolio Photography', slug: 'portfolio-photography' },
  { name: 'Baby Shoot', slug: 'baby-shoot' },
  { name: 'Maternity Photography', slug: 'maternity-photography' },
];

const GalleryPage = () => {
  const [activeSlug, setActiveSlug] = useState<string>(categories[0].slug);

  const basePhotos = useMemo(
    () => [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1533106418986-963d5f8f2b7f?auto=format&fit=crop&w=1200&q=80',
    ],
    []
  );

  const filteredPhotos = useMemo(() => {
    const idx = categories.findIndex((c) => c.slug === activeSlug);
    const shift = idx < 0 ? 0 : idx * 2;
    const rotated = [...basePhotos.slice(shift), ...basePhotos.slice(0, shift)];
    return rotated;
  }, [activeSlug, basePhotos]);

  const topStripPhotos = filteredPhotos.slice(0, 10);
  const gridPhotos = filteredPhotos.slice(0, 6);
  const extraPhotos = filteredPhotos.slice(6, 12);

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full bg-[#EFE7DC] pt-24 pb-14">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-[#D8C8B5] bg-[#F5F1EB] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          >
            {/* Top thumbnail strip */}
            <div className="bg-[#F5F1EB] px-4 py-4">
              <div className="flex items-center justify-between gap-4 mb-3">
                <h1 className="font-playfair text-3xl text-[#2C2C2C]">Gallery</h1>
                <Link
                  to="/#contact"
                  className="rounded-full bg-accent text-white px-5 py-2 text-sm font-semibold"
                >
                  Book a Session
                </Link>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-1">
                {topStripPhotos.map((src) => (
                  <div key={src} className="flex-shrink-0 w-24 sm:w-28 h-16 sm:h-18 rounded-xl overflow-hidden border border-[#D8C8B5] bg-white">
                    <img src={src} alt="Gallery thumbnail" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Main layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 p-4 sm:p-6">
              {/* Sidebar categories */}
              <aside className="rounded-3xl border border-[#D8C8B5] bg-white/80 p-4">
                <p className="font-poppins text-sm text-[#8A6F54] mb-3">Categories</p>
                <div className="flex flex-col gap-1">
                  {categories.map((cat) => {
                    const active = cat.slug === activeSlug;
                    return (
                      <button
                        key={cat.slug}
                        type="button"
                        onClick={() => setActiveSlug(cat.slug)}
                        className={`text-left px-3 py-2 rounded-xl transition ${
                          active
                            ? 'bg-accent/15 text-[#2C2C2C] border border-accent/30'
                            : 'bg-transparent hover:bg-accent/10 text-[#2C2C2C]'
                        }`}
                      >
                        <span className="font-poppins text-sm leading-tight">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Image grid */}
              <div className="rounded-3xl border border-[#D8C8B5] bg-white/50 p-3 sm:p-4 overflow-hidden">
                <div className="grid grid-cols-3 gap-3 auto-rows-fr">
                  {/* Big tile */}
                  <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden border border-[#D8C8B5] bg-white">
                    <img src={gridPhotos[0]} alt="Gallery image big" className="w-full h-full object-cover" />
                  </div>
                  {/* Small tiles */}
                  {gridPhotos.slice(1).map((src) => (
                    <div
                      key={src}
                      className="rounded-2xl overflow-hidden border border-[#D8C8B5] bg-white"
                    >
                      <img src={src} alt="Gallery image" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {extraPhotos.slice(0, 3).map((src) => (
                    <div key={src} className="col-span-1 rounded-2xl overflow-hidden border border-[#D8C8B5] bg-white">
                      <img src={src} alt="Gallery extra" className="w-full h-36 object-cover" />
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex justify-center">
                  <button
                    type="button"
                    className="rounded-full bg-accent text-white px-6 py-2.5 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;

