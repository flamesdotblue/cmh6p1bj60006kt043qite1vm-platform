import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative w-full h-[90vh] md:h-[900px] overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          style={{ width: '100%', height: '100%' }}
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
        />
      </div>

      {/* Gradient and blur overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0E1A2B]/40 to-[#121212]" />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(0,191,166,0.20) 0%, rgba(0,191,166,0.00) 60%)' }} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-20 h-full flex items-center">
        <div className="w-full">
          {/* Animated Logo */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
            <div className="w-14 h-14 rounded-md bg-gradient-to-br from-[#00BFA6] to-[#0E1A2B] shadow-[0_0_40px_#00BFA6]" />
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="font-extrabold tracking-[-0.02em] leading-[110%] text-[42px] md:text-[80px]">
            We Build Bold Ideas into Powerful Realities
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-6 text-lg md:text-xl text:white/80 max-w-2xl">
            Transforming industries through AI, Cloud, and Digital Strategy.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="mt-10">
            <a href="#work" className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-[#00BFA6] text-[#0E1A2B] font-[Manrope] font-semibold uppercase tracking-wider shadow-[0_0_30px_rgba(0,191,166,0.4)] hover:shadow-[0_0_50px_rgba(0,191,166,0.7)] hover:-translate-y-0.5 transition">
              Explore Our Work <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
