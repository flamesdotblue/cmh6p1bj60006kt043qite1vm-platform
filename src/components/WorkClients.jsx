import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Smart Manufacturing Platform',
    desc: 'Computer vision + predictive maintenance suite reducing downtime by 27%.',
    image: 'https://images.unsplash.com/photo-1581093458791-9d09a5c0b77e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AI Retail Dashboard',
    desc: 'Unified demand forecasting and pricing intelligence for 3.2k stores.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cloud Data Automation',
    desc: 'Serverless ELT with governance-first observability at scale.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

const clients = [
  { name: 'Acme', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=ACME' },
  { name: 'Orion', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=ORION' },
  { name: 'Delta', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=DELTA' },
  { name: 'Nimbus', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=NIMBUS' },
  { name: 'Helix', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=HELIX' },
  { name: 'Volt', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=VOLT' },
  { name: 'Apex', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=APEX' },
  { name: 'Nova', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=NOVA' },
  { name: 'Zenith', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=ZENITH' },
  { name: 'Atlas', logo: 'https://dummyimage.com/200x80/ffffff/000000&text=ATLAS' },
];

export default function WorkClients() {
  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-20">
      {/* Case Studies Hatchet-style */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-5 md:sticky md:top-24 self-start">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[28px] md:text-[40px] font-extrabold">Case Studies</motion.h3>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 text-white/75">
            Sticky narrative on the left, cinematic visuals on the right. Scroll to reveal each story.
          </motion.p>
        </div>
        <div className="col-span-12 md:col-span-7 space-y-14">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.6, delay: 0.05 }} className="group">
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h4 className="text-2xl font-semibold">{p.title}</h4>
                  <p className="text-white/80 mt-2 max-w-xl">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clients */}
      <div id="clients" className="mt-24">
        <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[28px] md:text-[40px] font-extrabold">Trusted by global innovators and industry leaders.</motion.h3>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {clients.map((c) => (
            <div key={c.name} className="h-24 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group">
              <img src={c.logo} alt={c.name} className="h-10 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 grayscale transition" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
