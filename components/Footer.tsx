
import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sage-50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Leaf className="text-sage-600 w-8 h-8" />
              <span className="font-serif text-2xl font-semibold tracking-tight text-sage-900">
                Refresh Massage Therapy
              </span>
            </a>
            <p className="text-sage-600 text-sm leading-relaxed mb-6">
              Elevating wellness through the art of professional massage. Experience luxury relaxation in the heart of Lufkin.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-sage-200 flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-sage-200 flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-sage-200 flex items-center justify-center text-sage-600 hover:bg-sage-600 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-sage-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sage-600 hover:text-sage-900 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-sage-900 mb-6">Services</h4>
            <ul className="space-y-4">
              {['Swedish Massage', 'Deep Tissue', 'Hot Stone', 'Aromatherapy'].map(s => (
                <li key={s}>
                  <a href="#services" className="text-sage-600 hover:text-sage-900 transition-colors text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-sage-900 mb-6">Newsletter</h4>
            <p className="text-sage-600 text-sm mb-4">Join our list for exclusive wellness tips and offers.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-xl border border-sage-200 bg-white focus:outline-none focus:border-sage-500 text-sm"
              />
              <button className="bg-sage-900 text-white py-3 rounded-xl text-sm font-bold uppercase tracking-widest hover:bg-sage-800 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-sage-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-sage-500 uppercase tracking-widest">
          <p>© 2024 Refresh Massage Therapy. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sage-900">Privacy Policy</a>
            <a href="#" className="hover:text-sage-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
