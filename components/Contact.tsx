
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to confirm your booking.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sage-500 font-semibold tracking-widest uppercase text-sm block mb-4"
            >
              Get in Touch
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-8">Begin Your Journey to Relaxation</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-sage-900 mb-1">Our Location</h4>
                  <p className="text-sage-600">123 Serenity Blvd, Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-sage-900 mb-1">Call Us</h4>
                  <p className="text-sage-600">+1 (310) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-sage-50 flex items-center justify-center text-sage-600 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-sage-900 mb-1">Working Hours</h4>
                  <p className="text-sage-600">Mon - Fri: 9 AM - 8 PM</p>
                  <p className="text-sage-600">Sat - Sun: 10 AM - 6 PM</p>
                </div>
              </div>
            </div>

            {/* Maps Placeholder */}
            <div className="w-full h-64 bg-sage-100 rounded-[2rem] overflow-hidden grayscale border border-sage-200">
               <div className="w-full h-full flex flex-col items-center justify-center text-sage-400 gap-4">
                  <MapPin size={48} />
                  <span className="font-medium">Interactive Map Placeholder</span>
               </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-sage-50 p-10 rounded-[2.5rem] shadow-sm border border-sage-100"
            >
              <h3 className="text-2xl font-serif text-sage-900 mb-6">Request an Appointment</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-sage-600 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-3 rounded-2xl border border-sage-200 focus:outline-none focus:border-sage-500 bg-white"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-sage-600 uppercase tracking-widest mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-5 py-3 rounded-2xl border border-sage-200 focus:outline-none focus:border-sage-500 bg-white"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-sage-600 uppercase tracking-widest mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-5 py-3 rounded-2xl border border-sage-200 focus:outline-none focus:border-sage-500 bg-white"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-sage-600 uppercase tracking-widest mb-2">Service</label>
                    <select
                      className="w-full px-5 py-3 rounded-2xl border border-sage-200 focus:outline-none focus:border-sage-500 bg-white"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select Service</option>
                      <option value="swedish">Swedish Massage</option>
                      <option value="deep">Deep Tissue</option>
                      <option value="hotstone">Hot Stone Therapy</option>
                      <option value="aromatherapy">Aromatherapy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sage-600 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-3 rounded-2xl border border-sage-200 focus:outline-none focus:border-sage-500 bg-white resize-none"
                    placeholder="Tell us about any specific areas you'd like us to focus on..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-sage-600 text-white py-4 rounded-full font-bold shadow-lg hover:bg-sage-700 transition-all flex items-center justify-center gap-2"
                >
                  Send Request <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
