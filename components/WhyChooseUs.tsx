
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, CalendarDays, Star } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Licensed Professionals',
      desc: 'Our team consists of highly trained and board-certified massage therapists.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Clean Environment',
      desc: 'We maintain the highest standards of hygiene and safety for your peace of mind.'
    },
    {
      icon: <CalendarDays className="w-8 h-8" />,
      title: 'Flexible Booking',
      desc: 'Easily schedule your sessions online or over the phone at your convenience.'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: '5-Star Satisfaction',
      desc: 'Join hundreds of happy clients who have experienced our signature care.'
    }
  ];

  return (
    <section className="py-24 bg-sage-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sage-400 font-semibold tracking-widest uppercase text-sm block mb-4"
            >
              Why Your Business?
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Standard of Excellence in <span className="italic text-sage-300">Holistic Care</span>
            </h2>
            <p className="text-sage-300 text-lg mb-10 leading-relaxed max-w-lg">
              We go beyond the traditional massage. Our focused approach ensures that every session is a therapeutic journey designed specifically for your body.
            </p>
            <div className="flex gap-8 border-t border-sage-800 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center">
                  <ShieldCheck className="text-sage-400 w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center">
                  <Star className="text-sage-400 w-5 h-5" />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">California Certified</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-sage-800/50 border border-sage-700 hover:border-sage-500 transition-all"
              >
                <div className="text-sage-400 mb-6">{f.icon}</div>
                <h4 className="text-xl font-serif mb-3">{f.title}</h4>
                <p className="text-sm text-sage-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
