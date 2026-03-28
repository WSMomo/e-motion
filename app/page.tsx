'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './components/ui/Button';
import { Activity, ShieldCheck, ArrowRight, EyeOff, BarChart3, Users, Zap, CheckCircle2, Lock, Focus } from 'lucide-react';
import { useRef } from 'react';

export default function LandingPage() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });
  
  const yHeroText = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-on-surface relative overflow-x-hidden selection:bg-primary selection:text-white" ref={scrollRef}>
      
      {/* Background Ambient Blooms */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <motion.div 
         animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
         className="fixed top-[40%] right-[10%] w-[40%] h-[40%] bg-tertiary/10 blur-[160px] rounded-full pointer-events-none -z-10" 
      />

      {/* Header */}
      <motion.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 lg:px-12 flex items-center justify-between h-28 lg:h-32 relative z-50 w-full max-w-[1400px] mx-auto"
      >
        <div className="flex-1" /> {/* Left spacer */}
        
        <Link href="/" className="flex items-center justify-center cursor-pointer flex-shrink-0">
          <div className="relative w-80 h-32 lg:w-[480px] lg:h-48 flex items-center justify-center">
            <Image src="/images/logo.webp" alt="e-motion logo" fill className="object-contain drop-shadow-sm" priority sizes="(max-width: 768px) 320px, 480px" />
          </div>
        </Link>
        
        <nav className="flex-1 flex justify-end items-center space-x-6">
          <Link href="/login">
             <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 rounded-full shadow-sm font-semibold bg-surface/80 backdrop-blur-md hover:bg-surface-container-low text-on-surface transition-colors focus:outline-none"
             >
              HR Portal
             </motion.button>
          </Link>
        </nav>
      </motion.header>

      <main>
        {/* UPPER HERO SECTION */}
        <section className="relative pt-6 pb-20 px-6 lg:px-12 w-full max-w-[1400px] mx-auto">
          <motion.div 
            style={{ y: yHeroText, opacity: opacityHero }}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center"
          >
            {/* Left Copy */}
            <div className="flex flex-col items-start z-10 text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs lg:text-sm font-semibold mb-6 backdrop-blur-md border border-primary/20"
              >
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Privacy-First HR Analytics
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                className="font-manrope text-[2.75rem] leading-[1.1] md:text-5xl lg:text-[4.5rem] xl:text-[5rem] font-medium tracking-tight mb-4 text-on-surface"
              >
                Sense the emotion. <br/>
                <span className="text-secondary block mt-1 font-light">Protect the individual.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                className="font-inter text-base lg:text-lg text-on-surface-variant max-w-lg leading-relaxed mb-8"
              >
                Safely translate ambient and behavioral signals into aggregated team insights. Enhance focus and predict fatigue without crossing personal boundaries.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                 <Link href="/login">
                   <Button className="h-12 px-8 text-base rounded-full shadow-ambient hover:shadow-lg transition-all duration-300 group">
                     Access Platform
                     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </Link>
                 <span className="text-xs font-inter text-outline font-medium px-2 opacity-60 flex items-center"><ShieldCheck className="w-4 h-4 mr-1"/> Minimum cohort: 5+</span>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-[4/3] flex items-center justify-center z-0"
            >
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative w-full h-[110%] -mt-4">
                 <Image src="/images/media__1774662331713.png" alt="Hero Concept" fill className="object-contain drop-shadow-2xl" priority sizes="(max-width: 768px) 100vw, 50vw"/>
               </motion.div>
            </motion.div>
          </motion.div>
        </section>


        {/* MIDDLE SECTION - CORE PILLARS (VERTICAL EXPANSION) */}
        <section className="relative py-24 w-full bg-surface-container-lowest border-y border-outline-variant/10">
           <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
           
           <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
             <motion.div 
               initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
               className="text-center max-w-2xl mx-auto mb-16"
             >
               <h2 className="font-manrope text-3xl md:text-5xl font-medium tracking-tight mb-4">A new dimension of <span className="text-[#0F766E] italic">organizational clarity.</span></h2>
               <p className="font-inter text-on-surface-variant text-lg">We shift the focus from tracking individuals to understanding the structural heartbeat of your teams.</p>
             </motion.div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: <Activity />, title: "Pattern Detection", desc: "Correlate context-switching and meeting density with drops in cognitive throughput.", color: "text-primary", bg: "bg-primary/5" },
                  { icon: <Lock />, title: "Absolute Privacy", desc: "Edge-computing and strict thresholding (n>5) guarantee that no single employee is ever exposed.", color: "text-secondary", bg: "bg-secondary/5" },
                  { icon: <Zap />, title: "Predictive Interventions", desc: "Get alerted before burnout escalates. Receive actionable insights to structurally improve workflows.", color: "text-[#0F766E]", bg: "bg-[#0F766E]/5" },
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: i * 0.15 }}
                    className={`rounded-[2rem] p-8 border border-outline-variant/15 ${feature.bg} hover:-translate-y-2 transition-transform duration-500`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-surface shadow-sm border border-outline-variant/10 flex items-center justify-center ${feature.color} mb-6`}>
                      {feature.icon}
                    </div>
                    <h3 className="font-manrope text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="font-inter text-sm text-on-surface-variant leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
             </div>
           </div>
        </section>


        {/* LOWER SECTION - BENTO GRID & PRIVACY */}
        <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-auto">
             
             {/* Big Feature (Analytics) */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
                className="lg:col-span-2 relative group overflow-hidden rounded-[2.5rem] bg-surface/60 backdrop-blur-xl border border-outline-variant/15 flex flex-col md:flex-row hover:border-primary/30 transition-colors"
             >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="p-10 md:w-1/2 flex flex-col justify-center z-10">
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/10 text-xs font-semibold mb-6 shadow-sm self-start">
                    <Focus className="w-4 h-4 mr-2 text-primary" /> Multi-modal processing
                  </div>
                  <h3 className="font-manrope text-3xl font-semibold mb-4">Deep Insight Networks</h3>
                  <p className="font-inter text-on-surface-variant leading-relaxed">
                    Correlate invisible dynamics across your organization. Understand focus stability and meeting fatigue by analyzing anonymized patterns spanning multiple departments.
                  </p>
                </div>
                <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                   <Image src="/images/media__1774662338040.png" alt="Analytics" fill className="object-cover md:object-contain object-right p-8 opacity-90 group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
             </motion.div>

             {/* Small Card 1 */}
             <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-[2.5rem] bg-tertiary/10 backdrop-blur-xl border border-tertiary/20 p-10 flex flex-col items-start hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden"
             >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-tertiary/30 blur-3xl rounded-full" />
                <div className="w-14 h-14 rounded-2xl bg-surface flex items-center justify-center text-tertiary mb-6 shadow-sm relative z-10 border border-outline-variant/10">
                 <Users className="w-6 h-6" />
                </div>
                <h3 className="font-manrope text-2xl font-semibold mb-3 relative z-10">Group Level Only</h3>
                <p className="font-inter text-on-surface-variant text-sm leading-relaxed mb-8 relative z-10">
                  Data is only generated when a team has 5 or more members. Individual metrics are mathematically impossible to extract.
                </p>
                <div className="mt-auto font-manrope text-5xl font-bold text-tertiary relative z-10 drop-shadow-sm">
                  &gt; 5
                </div>
             </motion.div>

             {/* Privacy Big Card */}
             <motion.div
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7, delay: 0.3 }}
                className="lg:col-span-3 rounded-[3rem] bg-gradient-to-br from-surface to-[#bca1e0]/10 border border-[#bca1e0]/20 p-8 lg:p-14 flex flex-col md:flex-row items-center overflow-hidden relative shadow-sm hover:shadow-md transition-shadow"
             >
                <div className="relative w-full md:w-1/2 aspect-video md:aspect-[3/2] lg:aspect-[16/9] mb-8 md:mb-0">
                  <motion.div animate={{ rotate: [0, 2, -2, 0], y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="w-full h-full relative">
                    <Image src="/images/media__1774662355261.png" alt="Privacy Shield" fill className="object-contain" sizes="(max-width: 768px) 100vw, 50vw" />
                  </motion.div>
                </div>
                <div className="md:w-1/2 md:pl-12 lg:pl-16 z-10 text-left">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-highest text-on-surface text-xs font-semibold mb-6 shadow-sm border border-outline-variant/10">
                    <ShieldCheck className="w-4 h-4 mr-2 text-primary" /> End-to-End Cryptography
                  </div>
                  <h3 className="font-manrope text-3xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight">By design, we know <span className="italic text-[#bca1e0]">nothing</span> about who you are.</h3>
                  <p className="font-inter text-on-surface-variant text-lg leading-relaxed mb-10">
                    Unlike traditional surveillance tools, e-motion performs edge-computing directly on sensors. Only anonymized, aggregated statistical waves are sent to our cloud. No webcam feeds, no raw biometrics. Ever.
                  </p>
                  <ul className="space-y-4 font-inter text-on-surface font-medium border-t border-outline-variant/10 pt-6">
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-primary" /> Zero Individual Dashboard</li>
                    <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-secondary" /> No Employee Ranking</li>
                  </ul>
                </div>
             </motion.div>

           </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="w-full py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <motion.div 
             animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }} 
             transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
             className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--theme-primary)_0%,transparent_50%)] opacity-10 blur-3xl" 
          />
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
             <motion.h2 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
               className="font-manrope text-4xl lg:text-6xl font-medium tracking-tight mb-6"
             >
               Ready to map your team&apos;s <span className="italic text-primary">emotion?</span>
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
               className="font-inter text-lg text-on-surface-variant max-w-xl mx-auto mb-10"
             >
               Join the platform that puts human wellbeing first, structurally predicting burnout without ever surveilling the individual.
             </motion.p>

             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                <Link href="/login">
                  <Button className="h-16 px-10 text-lg rounded-full shadow-ambient hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    See the Dashboard Demo
                  </Button>
                </Link>
             </motion.div>
          </div>
        </section>
        
      </main>
    </div>
  );
}
