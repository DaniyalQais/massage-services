
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, Shield, Star, CheckCircle } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const LeadGenView: React.FC = () => {
    return (
        <div className="bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
            {/* Promo Banner */}
            <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                🎉 Limited Time Offer: Get 20% OFF your first booking! Use code <span className="underline decoration-2">YOURBIZ20</span>
            </div>

            {/* Navigation */}
            <nav className="p-4 md:px-12 flex justify-between items-center bg-white shadow-sm sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">Y</div>
                    <h1 className="text-xl font-bold tracking-tight">Your Business</h1>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
                    <a href="#services" className="hover:text-blue-600">Services</a>
                    <a href="#testimonials" className="hover:text-blue-600">Reviews</a>
                    <a href="#faq" className="hover:text-blue-600">FAQ</a>
                </div>
                <a
                    href="tel:+15551234567"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                    <Phone className="w-4 h-4" /> (555) 123-4567
                </a>
            </nav>

            {/* Hero with Lead Form */}
            <section className="py-12 md:py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                        <Star className="w-3 h-3 fill-current" /> Top Rated Massage Therapy in CA
                    </div>
                    <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Relax Your Body, <span className="text-blue-600 underline">Refresh Your Mind.</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Pain relief doesn't have to wait. Book a licensed therapist today and experience the difference of clinical expertise combined with luxury spa comfort.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500" /> Licensed & Insured Therapists
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500" /> Same-Day Appointments Available
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500" /> 100% Satisfaction Guarantee
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
                >
                    <h3 className="text-2xl font-bold mb-2">Claim Your First-Time Discount</h3>
                    <p className="text-slate-500 mb-6">Fill out the form below to get your coupon and book your session.</p>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold mb-1">Service Interested In</label>
                            <select className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none">
                                <option>Select a service</option>
                                {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                            </select>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                            <Calendar className="w-5 h-5" /> Book My Session
                        </button>
                    </form>
                    <p className="mt-4 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                        <Shield className="w-3 h-3" /> Your data is secure and will never be shared.
                    </p>
                </motion.div>
            </section>

            {/* Trust Bar */}
            <div className="bg-slate-100 py-8 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 opacity-50 grayscale">
                    <div className="font-bold text-xl italic">HEALTHLINE</div>
                    <div className="font-bold text-xl italic">WELL+GOOD</div>
                    <div className="font-bold text-xl italic">VOGUE</div>
                    <div className="font-bold text-xl italic">WRED</div>
                </div>
            </div>

            {/* Social Proof */}
            <section id="testimonials" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">What Our Clients Are Saying</h2>
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                        </div>
                        <p className="text-slate-500">Over 500+ five-star reviews from satisfied clients.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map(t => (
                            <div key={t.id} className="p-6 bg-slate-50 rounded-xl border border-slate-100 italic text-slate-600">
                                "{t.text}"
                                <div className="mt-4 flex items-center gap-3 not-italic">
                                    <div className="w-10 h-10 bg-slate-200 rounded-full" />
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                                        <div className="text-xs text-slate-400">{t.location}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sticky CTA for Mobile */}
            <div className="fixed bottom-0 left-0 right-0 p-4 md:hidden z-50">
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-2xl flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" /> Reserve Now
                </button>
            </div>

            {/* Footer */}
            <footer className="py-12 bg-slate-900 text-slate-400 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-6 font-bold text-white uppercase tracking-widest text-sm">Your Business</div>
                    <p className="mb-8">123 Wellness Blvd, San Francisco, CA 94105</p>
                    <div className="flex justify-center gap-6 text-sm">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LeadGenView;
