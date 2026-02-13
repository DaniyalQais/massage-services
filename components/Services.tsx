
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { Clock, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-sage-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage-500 font-semibold tracking-widest uppercase text-sm block mb-4"
          >
            Our Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-sage-900 mb-6"
          >
            Premium Healing Treatments
          </motion.h2>
          <div className="h-1 w-20 bg-sage-300 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                  <span className="text-sage-900 font-bold">{service.price}</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-sage-500 text-xs font-bold uppercase tracking-wider mb-3">
                  <Clock size={14} />
                  <span>{service.duration}</span>
                </div>
                <h3 className="text-2xl font-serif text-sage-900 mb-4 group-hover:text-sage-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sage-700 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 text-sage-600 font-bold text-sm uppercase tracking-widest hover:text-sage-800 transition-colors"
                >
                  Book Session <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
