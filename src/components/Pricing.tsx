import { motion } from 'framer-motion';

const Pricing = () => {
  const packages = [
    {
      title: 'Basic Package',
      price: '₹1,200',
      features: [
        'Up to 4 hours on-location shooting',
        '50+ edited high-resolution photos',
        'Online gallery for viewing and sharing',
      ],
    },
    {
      title: 'Standard Package',
      price: '₹2,000',
      features: [
        'Up to 6 hours on-location shooting',
        '100+ edited high-resolution photos',
        'Online gallery for viewing and sharing',
        'Signature 8x10 canvas print',
      ],
    },
    {
      title: 'Premium Package',
      price: '₹3,500',
      features: [
        'Full-day on-location shooting',
        '200+ edited high-resolution photos',
        'Online gallery for viewing and sharing',
        'Personalized canvas print',
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full py-12 md:py-16" style={{ backgroundColor: '#F5F1EB' }}>
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT SIDE: creative collage */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl bg-[#EFE7DC] shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
                alt="Couple wedding large"
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="p-4 md:p-5 pt-14">
                <div className="rounded-2xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.08)] mb-3">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
                    alt="Medium couple"
                    className="w-full h-36 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 1"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                   <div className="rounded-xl overflow-hidden shadow-[0_8px_18px_rgba(0,0,0,0.08)]">
                    <img
                      src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80"
                      alt="Small couple 2"
                      className="w-full h-24 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: pricing text and cards */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-playfair text-[#2C2C2C]">Prewedding</h2>
              <p className="text-3xl md:text-4xl font-playfair text-[#2C2C2C]">𝔭𝔥𝔬𝔱𝔬𝔤𝔯𝔞𝔭𝔥𝔶 𝔭𝔯𝔦𝔠𝔢 𝔩𝔦𝔰𝔱</p>
              <p className="text-lg md:text-xl font-cursive text-[#8A6F54]"></p>
            </div>

            <div className="grid grid-cols-1 gap-5">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-[#EFE7DC] border border-[#D8C8B5] p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl md:text-2xl font-playfair text-[#2C2C2C]">{pkg.title}</h3>
                    <span className="text-xl md:text-2xl font-playfair text-[#C8A97E]">{pkg.price}</span>
                  </div>
                  <ul className="text-[#2C2C2C] font-poppins text-sm md:text-base space-y-2 mb-5 pl-5 list-disc">
                    {pkg.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <button className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#2C2C2C] px-8 py-2.5 text-white font-semibold group">
                    <span className="absolute inset-0 bg-[#C8A97E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Book Now</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;