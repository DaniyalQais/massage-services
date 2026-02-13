
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Signature 60',
      price: '$95',
      duration: '60 Minutes',
      description: 'Perfect for a targeted focus on specific tension areas.',
      features: ['Personalized consultation', 'Essential oils included', 'Post-massage tea', 'Hot towel finish'],
      popular: false
    },
    {
      name: 'Ultimate 90',
      price: '$135',
      duration: '90 Minutes',
      description: 'Our most popular choice for full body rejuvenation.',
      features: ['Everything in Signature 60', 'Additional focus areas', 'Enhanced aromatherapy', 'Heated basalt stones'],
      popular: true
    },
    {
      name: 'Luxe 120',
      price: '$185',
      duration: '120 Minutes',
      description: 'The complete immersion. Deep healing for mind and body.',
      features: ['Everything in Ultimate 90', 'Scalp & foot treatment', 'Cold stone eye relief', 'Premium take-home oil'],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-luxury-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sage-500 font-semibold tracking-widest uppercase text-sm block mb-4"
          >
            Our Packages
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6">Transparent Wellness Pricing</h2>
          <p className="text-sage-600">Choose the duration that fits your schedule. No hidden fees, just pure relaxation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-[2rem] border ${
                plan.popular ? 'border-sage-400 bg-sage-50 shadow-xl' : 'border-sage-100 bg-white shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sage-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-serif text-sage-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-serif font-bold text-sage-900">{plan.price}</span>
                  <span className="text-sage-500 text-sm">/ session</span>
                </div>
                <p className="text-sage-500 text-sm mt-2">{plan.duration}</p>
              </div>
              <p className="text-sage-700 text-sm mb-8 leading-relaxed">
                {plan.description}
              </p>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3 text-sm text-sage-800">
                    <Check className="text-sage-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-bold transition-all ${
                  plan.popular
                    ? 'bg-sage-600 text-white hover:bg-sage-700 shadow-md'
                    : 'bg-sage-100 text-sage-900 hover:bg-sage-200'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
