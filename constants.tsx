
import React from 'react';
import { Service, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Swedish Massage',
    description: 'A gentle, full-body massage that is great for people who are new to massage or have a lot of tension.',
    duration: '60/90 min',
    price: '$95',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Deep Tissue Massage',
    description: 'Uses more pressure than a Swedish massage. It is a good option if you have chronic muscle problems.',
    duration: '60/90 min',
    price: '$115',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Hot Stone Therapy',
    description: 'Best for people who have muscle pain and tension or who simply want to relax. Promotes blood flow.',
    duration: '90 min',
    price: '$145',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Aromatherapy Massage',
    description: 'Combines soft, gentle pressure with the use of essential oils to enhance psychological and physical well-being.',
    duration: '60/90 min',
    price: '$110',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Couples Massage',
    description: 'Share a relaxing massage with a friend or partner in the same room. Perfect for special occasions.',
    duration: '60/90 min',
    price: '$190',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'Prenatal Massage',
    description: 'A safe way for expectant mothers to find relief from the aches and pains of pregnancy.',
    duration: '60 min',
    price: '$105',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    rating: 5,
    text: "The most relaxing experience I've had in years. The deep tissue massage really helped with my chronic back pain. Highly recommended!",
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    name: 'David Wilson',
    rating: 5,
    text: "Serenity Touch lives up to its name. The atmosphere is calming from the second you walk in. The hot stone therapy is a must-try.",
    location: 'Los Angeles, CA',
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    rating: 5,
    text: "Professional, clean, and truly expert therapists. I come here once a month for my aromatherapy session and it changes my whole mood.",
    location: 'San Diego, CA',
  },
];
