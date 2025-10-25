import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Cloud, LineChart, Shield, Workflow, Cog } from 'lucide-react';

const services = [
  { icon: Cpu, title: 'AI & Automation', desc: 'Optimize operations with intelligent systems.' },
  { icon: Cloud, title: 'Cloud Platforms', desc: 'Secure, scalable, and cost-efficient.' },
  { icon: LineChart, title: 'Data & Analytics', desc: 'Insight pipelines for real-time decisions.' },
  { icon: Shield, title: 'Cybersecurity', desc: 'Resilience across apps and data.' },
  { icon: Workflow, title: 'Product Strategy', desc: 'Roadmaps from vision to launch.' },
  { icon: Cog, title: 'DevOps & SRE', desc: 'Automation-first delivery and reliability.' },
];

export default function AboutServices() {
  return (
    <div className="max-w-[1440px] mx-auto px-5 md:px-20">
      {/* About */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="col-span-12 md:col-span-6">
          <h2 className="text-[36px] md:text-[56px] leading-[110%] font-extrabold tracking-tight">About Parangada</h2>
          <p className="mt-6 text-white/80 text-[18px] leading-[150%] max-w-xl">
            We are a technology innovation company partnering with leaders to design, prototype, and scale transformative products. Our teams combine strategy, design, and engineering to deliver measurable business outcomes.
          </p>
          <p className="mt-4 text-white/90 font-medium">
            <span className="text-[#00BFA6]">Driven by innovation</span>, powered by technology.
          </p>
        </motion.div>

        {/* Visual with parallax-like depth */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="col-span-12 md:col-span-6">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#0E1A2B] to-black">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 30% 30%, rgba(0,191,166,0.18) 0%, rgba(0,191,166,0) 60%)' }} />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center mix-blend-lighten opacity-60" />
            <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_40%_40%,black,transparent_70%)]" />
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <div id="services" className="mt-24">
        <motion.h3 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-[28px] md:text-[40px] font-extrabold">What We Do Best</motion.h3>
        <div className="mt-8 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-6 min-w-max">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="w-[320px] h-[400px] rounded-xl bg-[#0E1A2B]/60 border border-white/10 p-6 flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,191,166,0.3)] hover:border-[#00BFA6]/50 transition">
                <div>
                  <div className="w-12 h-12 rounded-md bg-[#00BFA6]/15 flex items-center justify-center text-[#00BFA6]">
                    <s.icon size={24} />
                  </div>
                  <h4 className="mt-6 text-xl font-semibold">{s.title}</h4>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="text-xs text-white/50">Learn more →</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
