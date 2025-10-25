import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function ContactFooter() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0E1A2B 0%, #00BFA6 100%)', opacity: 0.15 }} />
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-24 relative">
          <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[32px] md:text-[48px] font-extrabold">
            Let’s Build the Future Together.
          </motion.h3>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-md bg-[#00BFA6] text-[#0E1A2B] font-[Manrope] font-semibold uppercase tracking-wider shadow-[0_0_30px_rgba(0,191,166,0.4)] hover:shadow-[0_0_50px_rgba(0,191,166,0.7)] hover:-translate-y-0.5 transition">
              Start a Project
            </button>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition" aria-label="X">
                <Twitter size={18} />
              </a>
              <a href="mailto:hello@parangada.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-20 py-14 grid grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#00BFA6] to-[#0E1A2B]" />
              <span className="text-lg tracking-widest font-semibold uppercase font-[Manrope]">Parangada</span>
            </div>
            <p className="mt-4 text-white/70 max-w-sm">We design and engineer products that shape the next decade of digital experiences.</p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h5 className="text-sm uppercase font-semibold text-white/80">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-white/70">
              <li><a className="hover:text-[#00BFA6]" href="#about">About</a></li>
              <li><a className="hover:text-[#00BFA6]" href="#services">Services</a></li>
              <li><a className="hover:text-[#00BFA6]" href="#work">Projects</a></li>
              <li><a className="hover:text-[#00BFA6]" href="#clients">Clients</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <h5 className="text-sm uppercase font-semibold text-white/80">Services</h5>
            <ul className="mt-4 space-y-2 text:white/70">
              <li>AI & Automation</li>
              <li>Cloud Platforms</li>
              <li>Data & Analytics</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3">
            <h5 className="text-sm uppercase font-semibold text-white/80">Contact</h5>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>hello@parangada.com</li>
              <li>+1 (555) 555-0199</li>
              <li>Global • Remote-first</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-white/60 text-sm">© 2025 Parangada. All Rights Reserved.</div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-5">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="w-full max-w-lg rounded-xl bg-[#0E1A2B] border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold">Start a Project</h4>
                <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white">✕</button>
              </div>
              <form className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Name</label>
                  <input className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-[#00BFA6]" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Email</label>
                  <input type="email" className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-[#00BFA6]" placeholder="you@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Project Brief</label>
                  <textarea rows={4} className="w-full rounded-md bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-[#00BFA6]" placeholder="Tell us about your goals" />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-md border border-white/15 hover:bg-white/5 transition">Cancel</button>
                  <button type="submit" className="px-5 py-2 rounded-md bg-[#00BFA6] text-[#0E1A2B] font-semibold">Send</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
