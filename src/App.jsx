import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import WorkClients from './components/WorkClients';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="min-h-screen bg-[#121212] text-[#F5F5F5] antialiased selection:bg-[#00BFA6]/30 selection:text-white">
      {/* Top Progress Bar */}
      <motion.div style={{ width }} className="fixed top-0 left-0 h-1 bg-[#00BFA6] z-50" />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#00BFA6] to-[#0E1A2B] shadow-[0_0_20px_#00BFA6]" />
              <span className="text-lg tracking-widest font-semibold uppercase font-[Manrope]">Parangada</span>
            </a>
            <nav className="hidden md:flex items-center gap-10 font-[Manrope] text-sm uppercase">
              <a className="hover:text-[#00BFA6] transition" href="#about">About</a>
              <a className="hover:text-[#00BFA6] transition" href="#services">Expertise</a>
              <a className="hover:text-[#00BFA6] transition" href="#work">Projects</a>
              <a className="hover:text-[#00BFA6] transition" href="#contact">Contact</a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg:white/5">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-5 py-4 space-y-3 font-[Manrope] text-sm uppercase">
              <a onClick={() => setOpen(false)} className="block hover:text-[#00BFA6]" href="#about">About</a>
              <a onClick={() => setOpen(false)} className="block hover:text-[#00BFA6]" href="#services">Expertise</a>
              <a onClick={() => setOpen(false)} className="block hover:text-[#00BFA6]" href="#work">Projects</a>
              <a onClick={() => setOpen(false)} className="block hover:text-[#00BFA6]" href="#contact">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="space-y-32 md:space-y-36">
        <section id="hero"><Hero /></section>
        <section id="about"><AboutServices /></section>
        <section id="work"><WorkClients /></section>
        <section id="contact"><ContactFooter /></section>
      </main>
    </div>
  );
}
