
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=2000"
          alt="Spa Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-sage-600 uppercase bg-sage-100 rounded-full">
              Licensed Massage Therapy in California
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-sage-900 leading-tight mb-6">
              Relax. Refresh. <br />
              <span className="italic text-sage-500 font-light">Rejuvenate.</span>
            </h1>
            <p className="text-lg text-sage-700 mb-10 leading-relaxed max-w-lg">
              Indulge in a sanctuary of peace and tranquility. Our expert therapists are dedicated to restoring your body's natural balance through luxury massage treatments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                className="bg-sage-600 text-white px-8 py-4 rounded-full text-center font-semibold shadow-lg hover:bg-sage-700 transition-all"
              >
                Explore Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="bg-white text-sage-900 border border-sage-200 px-8 py-4 rounded-full text-center font-semibold shadow-sm hover:border-sage-400 transition-all"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="flex items-center gap-4 text-sage-600">
            <div className="w-12 h-px bg-sage-400"></div>
            <span className="text-sm tracking-widest uppercase font-medium">Scroll to Discover</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
