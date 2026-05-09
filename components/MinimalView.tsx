
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const MinimalView: React.FC = () => {
  return (
    <div className="bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Header */}
      <nav className="p-8 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-serif tracking-widest uppercase">Refresh Massage Therapy</h1>
        <div className="space-x-8 text-xs uppercase tracking-widest font-medium text-zinc-500">
          <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            The Art of <br />
            <span className="italic">Stillness.</span>
          </h2>
          <p className="max-w-md mx-auto text-zinc-500 text-lg mb-10 font-light leading-relaxed">
            A sanctuary for the modern soul. Expertly crafted massage therapy in a space of pure minimal luxury.
          </p>
          <a
            href="#contact"
            className="inline-block px-12 py-4 bg-zinc-900 text-white text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all"
          >
            Inquire Now
          </a>
        </motion.div>
      </section>

      {/* Philosophy (Brief) */}
      <section id="about" className="py-24 px-6 border-t border-zinc-100">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4 block">Philosophy</span>
          <h3 className="text-3xl font-serif mb-6">Restoration through reduction.</h3>
          <p className="text-zinc-500 font-light leading-relaxed">
            We believe that true luxury is found in the absence of noise. Every touch is intentional, every moment is yours.
          </p>
        </div>
      </section>

      {/* Services (Grid) */}
      <section id="services" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-default"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-zinc-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <h4 className="text-lg font-serif mb-2">{service.title}</h4>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-zinc-200 flex justify-between text-[10px] uppercase tracking-widest text-zinc-500">
                  <span>{service.duration}</span>
                  <span>{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 text-center border-t border-zinc-100">
        <h2 className="text-3xl font-serif mb-8">Ready to begin?</h2>
        <p className="text-zinc-500 mb-12 font-light">Available for bookings in Lufkin.</p>
        <div className="text-xs uppercase tracking-widest text-zinc-400 space-y-4">
          <p>© 2026 Refresh Massage Therapy</p>
          <p>Privacy / Terms</p>
        </div>
      </footer>
    </div>
  );
};

export default MinimalView;
