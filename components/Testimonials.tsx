
import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-sage-50 relative overflow-hidden">
      {/* Decorative Quote Icon */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 opacity-[0.03] text-sage-900 pointer-events-none">
        <Quote size={400} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage-500 font-semibold tracking-widest uppercase text-sm block mb-4"
          >
            Client Love
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6">Words from our Community</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-sage-100"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? 'text-sage-500 fill-sage-500' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-sage-800 italic mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="mt-auto">
                <p className="font-serif text-xl text-sage-900">{t.name}</p>
                <p className="text-xs font-bold text-sage-400 uppercase tracking-widest mt-1">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
