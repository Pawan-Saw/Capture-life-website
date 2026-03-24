import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

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

  const goToPayment = (pkg: { title: string; price: string }) => {
    const params = new URLSearchParams({
      package: pkg.title,
      price: pkg.price,
    });
    navigate(`/payment-demo?${params.toString()}`);
  };

  return (
    <section id="pricing" className="w-full py-10 md:py-14 bg-[#F5F1EB]">
      <div className="w-full px-0 md:px-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden bg-[#ece6df] shadow-[0_10px_35px_rgba(0,0,0,0.08)]"
        >
          <img
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80"
            alt="Prewedding hero"
            className="h-44 md:h-56 w-full object-cover"
          />

          <div className="grid grid-cols-1 lg:grid-cols-[42%_58%] gap-6 md:gap-8 px-4 pb-4 md:px-7 md:pb-7 lg:px-8 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10 -mt-20 md:-mt-24 lg:-mt-28 space-y-3"
            >
              <div className="mx-auto w-[92%] h-56 md:h-64 overflow-hidden rounded-t-[999px] rounded-b-none border-[10px] md:border-[12px] border-[#ece6df] bg-[#ece6df]">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80"
                  alt="Couple close-up"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mx-auto w-[92%]">
                <div className="h-52 md:h-64 overflow-hidden border-[10px] md:border-[12px] border-[#ece6df] bg-[#ece6df]">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                    alt="Couple walking"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mx-auto w-[90%] grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80"
                    alt="Bride in field"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
                    alt="Couple silhouette"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="pt-1 md:pt-3 lg:pt-6"
            >
              <h2 className="text-5xl md:text-6xl font-playfair text-[#8A6F54] leading-none">Prewedding</h2>
              <p className="mt-1 text-3xl md:text-4xl italic font-playfair text-[#2C2C2C]">Photography Price List</p>

              <div className="mt-7 space-y-7">
                {packages.map((pkg) => (
                  <div key={pkg.title}>
                    <div className="flex items-end justify-between gap-3">
                      <h3 className="text-3xl font-playfair text-[#2C2C2C]">{pkg.title}</h3>
                      <span className="text-3xl italic font-playfair text-[#9f815f]">{pkg.price}</span>
                    </div>
                    <ul className="mt-3 list-disc pl-6 space-y-1 text-lg text-[#2C2C2C] font-poppins">
                      {pkg.features.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() => goToPayment(pkg)}
                        className="rounded-full border border-[#b79a79] px-5 py-1.5 text-sm font-semibold text-[#7e6448] hover:bg-[#b79a79] hover:text-white transition"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;