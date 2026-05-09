
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=1000"
                alt="Therapist at work"
                className="rounded-[2rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-sage-100 rounded-[2rem] -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -left-6 md:-top-12 md:-left-12 z-20"
            >
              <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-sage-50 max-w-[150px] md:max-w-[200px]">
                <p className="text-3xl md:text-4xl font-serif text-sage-600 mb-1">10+</p>
                <p className="text-[10px] md:text-sm font-medium text-sage-700">Years of Professional Experience</p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sage-500 font-semibold tracking-widest uppercase text-sm block mb-4"
            >
              Our Sanctuary
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-sage-900 mb-8 leading-tight"
            >
              Healing Hands, Calming Presence
            </motion.h2>
            <p className="text-sage-700 text-lg mb-8 leading-relaxed">
              At Refresh Massage Therapy, we believe that true wellness begins with a calm mind and a relaxed body. Founded in Lufkin, our mission has always been to provide a holistic approach to stress relief and physical health.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Licensed and Board-Certified Therapists',
                'Tailored Treatments for Individual Needs',
                'Calm, Sanitary, and Luxury Environment',
                'Commitment to Holistic Wellness'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center">
                    <CheckCircle className="text-sage-600 w-4 h-4" />
                  </div>
                  <span className="text-sage-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ x: 10 }}
              href="#contact"
              className="inline-flex items-center gap-4 text-sage-900 font-serif text-xl group"
            >
              <span className="border-b-2 border-sage-200 group-hover:border-sage-600 transition-all">Book Your Journey</span>
              <div className="w-12 h-12 rounded-full border border-sage-200 flex items-center justify-center group-hover:bg-sage-600 group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14m-7-7 7 7-7 7" />
  </svg>
);

export default About;
