
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, TrendingUp, Handshake, Mail, MapPin } from 'lucide-react';
import { SERVICES } from '../constants';

const BusinessView: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 font-sans">
            {/* Header */}
            <nav className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Handshake className="text-emerald-600 w-6 h-6" />
                        <span className="text-xl font-bold tracking-tight">Business <span className="text-emerald-600">Pro</span></span>
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <a href="#teams" className="hover:text-emerald-600 transition-colors">Team Wellness</a>
                        <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
                        <a href="#pricing" className="hover:text-emerald-600 transition-colors">Corporate Pricing</a>
                    </div>
                    <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-all shadow-sm">
                        Contact Sales
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-emerald-600 font-bold tracking-wider text-xs uppercase mb-4 block">Corporate Wellness Solutions</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 leading-tight">
                            A Healthier Team is a <span className="text-emerald-600">More Productive</span> Team.
                        </h2>
                        <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                            Elevate your office culture with professional on-site massage therapy and wellness programs. Reduced stress, improved focus, and higher retention.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-gray-800 transition-all">
                                Download Brochure
                            </button>
                            <button className="border border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
                                Schedule Consultation
                            </button>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute right-0 top-0 w-1/3 h-full bg-emerald-50 -skew-x-12 hidden lg:block" />
            </section>

            {/* Key Benefits */}
            <section id="teams" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                            <TrendingUp className="text-emerald-600 w-10 h-10 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Boost Productivity</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Regular massage reduces office-related stress and sharpens mental clarity for critical tasks.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                            <Users className="text-emerald-600 w-10 h-10 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Improve Retention</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Wellness benefits are a top-tier perk that attracts and keeps the best talent in your industry.</p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                            <Building2 className="text-emerald-600 w-10 h-10 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Healthier Workspace</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Our licensed therapists help mitigate common workplace physical issues like neck and back pain.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Services */}
            <section id="services" className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-16 text-center">Flexible Wellness Models</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200"
                            alt="Office Wellness"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-emerald-600 font-bold">01</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">On-Site Office Massage</h4>
                                <p className="text-gray-500 text-sm">We bring 15-20 minute chair massage sessions directly to your office workspace, causing minimal disruption.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-emerald-600 font-bold">02</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Employee Benefit Packages</h4>
                                <p className="text-gray-500 text-sm">Pre-paid massage credits for your team to use at our premium studio locations at their convenience.</p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-emerald-600 font-bold">03</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-2">Executive Retreats</h4>
                                <p className="text-gray-500 text-sm">Full-day luxury wellness experiences for leadership teams and special corporate events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / CTA */}
            <section id="pricing" className="py-24 bg-gray-900 text-white rounded-[3rem] mx-6 mb-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transform your workplace?</h2>
                    <p className="text-gray-400 text-lg mb-12">Custom plans starting for teams of 10 to 500+. Get a tailored quote within 24 hours.</p>
                    <div className="flex justify-center gap-6">
                        <button className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-bold hover:bg-emerald-700 transition-all text-lg">
                            Get a Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-500">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <Handshake className="text-emerald-600 w-5 h-5" />
                            <span className="text-lg font-bold text-gray-900 tracking-tight">Business <span className="text-emerald-600">Pro</span></span>
                        </div>
                        <p>Providing enterprise-grade wellness solutions since 2012.</p>
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Contact</div>
                        <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> sales@businesspro.com</p>
                        <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 500 Howard St, San Francisco, CA</p>
                    </div>
                    <div className="space-y-3">
                        <div className="font-bold text-gray-900 mb-4 uppercase tracking-widest text-xs">Legal</div>
                        <a href="#" className="block hover:text-emerald-600">Privacy Policy</a>
                        <a href="#" className="block hover:text-emerald-600">Terms of Service</a>
                        <a href="#" className="block hover:text-emerald-600">Insurance Info</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BusinessView;
