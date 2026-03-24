import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    sessionType: [] as string[],
    date: '',
    time: '',
    story: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      sessionType: prev.sessionType.includes(type)
        ? prev.sessionType.filter(t => t !== type)
        : [...prev.sessionType, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '917033121233';
    const selectedSessions = formData.sessionType.length > 0 ? formData.sessionType.join(', ') : 'Not selected';
    const message = [
      'Hello, I would like to book a photography session.',
      '',
      `Name: ${formData.firstName} ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Session Type: ${selectedSessions}`,
      `Preferred Date: ${formData.date}`,
      `Preferred Time: ${formData.time}`,
      `Story / Vision: ${formData.story || 'Not provided'}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="w-full py-12 md:py-20 bg-warmBg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warmBg via-warmSection to-warmBg opacity-30"></div>
      
      <div className="relative z-10 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-8 md:py-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair text-textPrimary mb-6 md:mb-8 tracking-wider leading-tight">
              Let's Create Something Beautiful Together
            </h2>
            
            <p className="text-textSecondary font-poppins text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
              Thank you for considering me to capture your special moments. Whether you're planning a wedding, celebrating motherhood, gathering your family, or updating your portraits, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="border-b border-secondaryAccent/30 pb-6">
                <h3 className="text-textPrimary font-playfair text-lg md:text-xl mb-2 tracking-wider">Email</h3>
                <p className="text-textSecondary font-poppins text-base md:text-lg">pksaw7717@gmail.com</p>
              </div>

              <div className="border-b border-secondaryAccent/30 pb-6">
                <h3 className="text-textPrimary font-playfair text-lg md:text-xl mb-2 tracking-wider">Phone</h3>
                <p className="text-textSecondary font-poppins text-base md:text-lg">+91 7033121233</p>
              </div>

              <div>
                <h3 className="text-textPrimary font-playfair text-lg md:text-xl mb-2 tracking-wider">Location</h3>
                <p className="text-textSecondary font-poppins text-base md:text-lg">Parakharo, JHARKHAND</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-cardBg rounded-xl p-6 md:p-8 border border-secondaryAccent/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div>
                <label className="block text-textPrimary font-playfair font-semibold mb-3 text-base md:text-lg tracking-wider">
                  Name <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-warmSection border-b border-textSecondary/30 px-0 py-2 text-textPrimary font-poppins placeholder-textSecondary/60 focus:outline-none focus:border-accent transition duration-300"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-warmSection border-b border-textSecondary/30 px-0 py-2 text-textPrimary font-poppins placeholder-textSecondary/60 focus:outline-none focus:border-accent transition duration-300"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-textPrimary font-playfair font-semibold mb-3 text-base md:text-lg tracking-wider">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-warmSection border-b border-textSecondary/30 px-0 py-2 text-textPrimary font-poppins placeholder-textSecondary/60 focus:outline-none focus:border-accent transition duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-textPrimary font-playfair font-semibold mb-4 text-base md:text-lg tracking-wider">
                  Type of Session <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['Wedding', 'Maternity', 'Family', 'Portrait'].map((type) => (
                    <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.sessionType.includes(type)}
                        onChange={() => handleCheckboxChange(type)}
                        className="w-5 h-5 rounded border-2 border-secondaryAccent/40 accent-accent cursor-pointer"
                      />
                      <span className="text-textPrimary font-poppins text-sm md:text-base group-hover:text-accent transition duration-300">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-textPrimary font-playfair font-semibold mb-3 text-base md:text-lg tracking-wider">
                    Select Date <span className="text-accent">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-warmSection border-b border-textSecondary/30 px-0 py-2 text-textPrimary font-poppins focus:outline-none focus:border-accent transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-textPrimary font-playfair font-semibold mb-3 text-base md:text-lg tracking-wider">
                    Select Time <span className="text-accent">*</span>
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full bg-warmSection border-b border-textSecondary/30 px-0 py-2 text-textPrimary font-poppins focus:outline-none focus:border-accent transition duration-300"
                  />
                </div>
              </div>

              {/* Story/Vision */}
              <div>
                <label className="block text-textPrimary font-playfair font-semibold mb-3 text-base md:text-lg tracking-wider">
                  A little about your story or vision
                </label>
                <textarea
                  name="story"
                  value={formData.story}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-warmSection border-b border-textSecondary/30 px-0 py-2 text-textPrimary font-poppins placeholder-textSecondary/60 focus:outline-none focus:border-accent transition duration-300 resize-none"
                  placeholder="Tell us about your special event and vision..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-white px-8 py-3 rounded-lg font-poppins font-semibold text-base md:text-lg shadow-[0_10px_30px_rgba(200,169,126,0.3)] hover:shadow-[0_15px_40px_rgba(200,169,126,0.4)] transition duration-300 cursor-pointer mt-8"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
