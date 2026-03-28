'use client';

import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { PrivacyMask } from '../components/ui/PrivacyMask';
import {
  AreaChart, Area,
  BarChart, Bar,
  LineChart, Line,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend
} from 'recharts';

// --- MOCK DATA ---
const radarData = [
  { subject: 'Work Pattern', score: 65, fullMark: 100 },
  { subject: 'Cognitive', score: 70, fullMark: 100 },
  { subject: 'Communication', score: 55, fullMark: 100 },
  { subject: 'Calendar', score: 40, fullMark: 100 },
  { subject: 'Physiological', score: 80, fullMark: 100 },
];

const calendarData = [
  { name: 'W1', meetings: 12, focus: 20 },
  { name: 'W2', meetings: 15, focus: 18 },
  { name: 'W3', meetings: 22, focus: 10 }, // Overload starts here
  { name: 'W4', meetings: 24, focus: 8 },
  { name: 'W5', meetings: 18, focus: 15 },
  { name: 'W6', meetings: 20, focus: 12 },
];

const cognitiveData = [
  { name: 'W1', errorRate: 2, typingSpeed: 90 },
  { name: 'W2', errorRate: 3, typingSpeed: 85 },
  { name: 'W3', errorRate: 8, typingSpeed: 60 },
  { name: 'W4', errorRate: 9, typingSpeed: 55 },
  { name: 'W5', errorRate: 4, typingSpeed: 80 },
  { name: 'W6', errorRate: 3, typingSpeed: 82 },
];

const workPatternData = [
  { name: 'W1', sessionLength: 8.5, afterHours: 0.5 },
  { name: 'W2', sessionLength: 8.8, afterHours: 1.0 },
  { name: 'W3', sessionLength: 10.2, afterHours: 3.5 },
  { name: 'W4', sessionLength: 10.5, afterHours: 4.0 },
  { name: 'W5', sessionLength: 9.0, afterHours: 1.5 },
  { name: 'W6', sessionLength: 8.6, afterHours: 0.8 },
];

const physiologicalData = [
  { name: 'W1', hrv: 65, restingHR: 60 },
  { name: 'W2', hrv: 62, restingHR: 62 },
  { name: 'W3', hrv: 45, restingHR: 68 }, // Stress drop
  { name: 'W4', hrv: 42, restingHR: 70 },
  { name: 'W5', hrv: 55, restingHR: 65 },
  { name: 'W6', hrv: 60, restingHR: 62 },
];

const communicationData = [
  { name: 'W1', latency: 15, networkSize: 12 },
  { name: 'W2', latency: 18, networkSize: 11 },
  { name: 'W3', latency: 45, networkSize: 7 }, // Withdrawal
  { name: 'W4', latency: 50, networkSize: 6 },
  { name: 'W5', latency: 25, networkSize: 10 },
  { name: 'W6', latency: 20, networkSize: 11 },
];

export default function DashboardOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
  };

  const AxisFont = { fontSize: 11, fill: 'var(--theme-on-surface-variant)' };
  const TooltipStyle = { borderRadius: '12px', border: '1px solid var(--theme-outline-variant)', backgroundColor: 'var(--theme-surface)', color: 'var(--theme-on-surface)', fontSize: '12px' };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full max-w-7xl mx-auto flex flex-col gap-10 p-8 lg:p-12 mb-20"
    >
      {/* Header Info */}
      <motion.header variants={itemVariants} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <h1 className="font-manrope text-4xl lg:text-[2.75rem] font-light tracking-tight mb-2">Company Overview</h1>
          <p className="font-inter text-on-surface-variant max-w-2xl">
            Aggregated demographic insights mapping 5 key dimensions of burnout across 12 teams (248 members).
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-primary px-4 py-2 border border-outline-variant/15 rounded-full bg-surface-container-lowest shadow-sm h-fit">
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-inter text-xs font-semibold uppercase tracking-wider">Privacy Threshold: Min 5 pers/team</span>
        </div>
      </motion.header>

      {/* Main KPIs - Maslach Burnout Dimensions Layering */}
      <motion.section variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div variants={itemVariants}>
           <Card elevation="lowest" className="p-6 h-full flex flex-col border border-outline-variant/10 shadow-ambient">
             <h3 className="font-inter text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-4">Overall Exhaustion</h3>
             <div className="flex items-baseline space-x-2 mb-2 flex-grow">
               <span className="font-manrope text-4xl font-light">68</span>
               <span className="text-on-surface-variant text-sm">/ 100</span>
             </div>
             <p className="font-inter text-xs text-red-500 font-medium mt-auto">+12% vs last month</p>
           </Card>
        </motion.div>
        
        <motion.div variants={itemVariants}>
           <Card elevation="lowest" className="p-6 h-full flex flex-col border border-outline-variant/10 shadow-ambient">
             <h3 className="font-inter text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-4">Cynicism & Withdrawal</h3>
             <div className="flex items-baseline space-x-2 mb-2 flex-grow">
               <span className="font-manrope text-4xl font-light">Moderate</span>
             </div>
             <p className="font-inter text-xs text-on-surface-variant font-medium mt-auto">Network isolation increasing</p>
           </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
           <Card elevation="lowest" className="p-6 h-full flex flex-col border border-outline-variant/10 shadow-ambient">
             <h3 className="font-inter text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-4">Reduced Efficacy</h3>
             <div className="flex items-baseline space-x-2 mb-2 flex-grow">
               <span className="font-manrope text-4xl font-light">Warning</span>
             </div>
             <p className="font-inter text-xs text-red-500 font-medium mt-auto">Error rate rising</p>
           </Card>
        </motion.div>

        <motion.div variants={itemVariants}>
           <Card elevation="lowest" className="p-6 h-full flex flex-col border border-outline-variant/10 shadow-ambient relative overflow-hidden">
             <div className="absolute top-0 right-0 w-2 h-full bg-secondary" />
             <h3 className="font-inter text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-4">Team Baseline Health</h3>
             <div className="flex items-baseline space-x-2 mb-2 flex-grow">
               <span className="font-manrope text-4xl font-light">Stable</span>
             </div>
             <p className="font-inter text-xs text-secondary font-medium mt-auto">System tracking learned baselines</p>
           </Card>
        </motion.div>
      </motion.section>

      {/* Main Content Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
         {/* Left Column (2 span): Charts Array */}
         <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            
            {/* 1. Radar & Calendar Overview */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
              <Card elevation="lowest" className="p-6 border border-outline-variant/10 shadow-sm flex flex-col min-h-[350px] overflow-hidden">
                <h3 className="font-manrope text-xl font-medium tracking-tight mb-1">Signal Health Radar</h3>
                <p className="font-inter text-xs text-on-surface-variant mb-4">Aggregate scoring across 5 key dimensions</p>
                <div className="flex-1 w-full min-h-[250px] min-w-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                      <PolarGrid stroke="var(--theme-outline-variant)" />
                      <PolarAngleAxis dataKey="subject" tick={AxisFont} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar name="Company Average" dataKey="score" stroke="var(--theme-primary)" fill="var(--theme-primary)" fillOpacity={0.6} />
                      <Tooltip contentStyle={TooltipStyle} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card elevation="lowest" className="p-6 border border-outline-variant/10 shadow-sm flex flex-col min-h-[350px] overflow-hidden">
                <h3 className="font-manrope text-xl font-medium tracking-tight mb-1">Calendar & Meetings</h3>
                <p className="font-inter text-xs text-on-surface-variant mb-4">Signal: Uninterrupted Focus vs Meeting Load</p>
                <div className="flex-1 w-full min-h-[250px] min-w-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={calendarData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--theme-outline-variant)" opacity={0.3} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={AxisFont} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={AxisFont} />
                      <Tooltip contentStyle={TooltipStyle} cursor={{ fill: 'var(--theme-surface-high)' }} />
                      <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                      <Bar dataKey="focus" name="Focus Time (hrs)" stackId="a" fill="var(--theme-primary)" radius={[0, 0, 4, 4]} />
                      <Bar dataKey="meetings" name="Meetings (hrs)" stackId="a" fill="var(--theme-secondary)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </motion.div>

            {/* 2. Cognitive & Productivity Area */}
            <motion.div variants={itemVariants} className="w-full min-w-0">
               <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm relative min-h-[350px] overflow-hidden">
                  <h3 className="font-manrope text-2xl font-light tracking-tight mb-1">Productivity & Cognitive Flow</h3>
                  <p className="font-inter text-sm text-on-surface-variant mb-6">Signal: Typing speed baseline deviation and error rate</p>
                  <PrivacyMask defaultRevealed={true} reason="Aggregated keystroke patterns mapped anonymously.">
                    <div className="h-64 w-full min-w-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={cognitiveData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorTyping" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--theme-primary)" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="var(--theme-primary)" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--theme-outline-variant)" opacity={0.3} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={AxisFont} dy={10} />
                          <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={AxisFont} />
                          <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={AxisFont} />
                          <Tooltip contentStyle={TooltipStyle} />
                          <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                          <Area yAxisId="left" type="monotone" name="Typing Consistency (%)" dataKey="typingSpeed" stroke="var(--theme-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorTyping)" />
                          <Line yAxisId="right" type="step" name="Error Rate Deviation" dataKey="errorRate" stroke="var(--theme-secondary)" strokeWidth={3} dot={{ strokeWidth: 2, r: 4 }} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </PrivacyMask>
               </Card>
            </motion.div>

            {/* 3. Work Patterns & Communication */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-w-0">
               <Card elevation="lowest" className="p-6 border border-outline-variant/10 shadow-sm flex flex-col min-h-[350px] overflow-hidden">
                  <h3 className="font-manrope text-xl font-medium tracking-tight mb-1">Work Patterns</h3>
                  <p className="font-inter text-xs text-on-surface-variant mb-4">Signal: Session length & After-hours activity</p>
                  <div className="flex-1 w-full min-h-[250px] min-w-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={workPatternData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--theme-outline-variant)" opacity={0.3} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={AxisFont} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={AxisFont} />
                        <Tooltip contentStyle={TooltipStyle} />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                        <Line type="monotone" name="Session (hrs)" dataKey="sessionLength" stroke="var(--theme-primary)" strokeWidth={3} dot={false} />
                        <Line type="monotone" name="After-Hours (hrs)" dataKey="afterHours" stroke="#f87171" strokeWidth={3} strokeDasharray="5 5" dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
               </Card>

               <Card elevation="lowest" className="p-6 border border-outline-variant/10 shadow-sm flex flex-col min-h-[350px] overflow-hidden">
                  <h3 className="font-manrope text-xl font-medium tracking-tight mb-1">Collaboration</h3>
                  <p className="font-inter text-xs text-on-surface-variant mb-4">Signal: Response latency vs Network size</p>
                  <div className="flex-1 w-full min-h-[250px] min-w-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={communicationData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--theme-outline-variant)" opacity={0.3} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={AxisFont} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={AxisFont} />
                        <Tooltip contentStyle={TooltipStyle} cursor={{ fill: 'var(--theme-surface-high)' }} />
                        <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
                        <Bar dataKey="networkSize" name="Collab Network" fill="var(--theme-primary)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="latency" name="Latency (min/10)" fill="var(--theme-secondary)" fillOpacity={0.5} radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
               </Card>
            </motion.div>

            {/* 4. Physiological Data */}
            <motion.div variants={itemVariants} className="w-full min-w-0">
               <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm relative min-h-[300px] overflow-hidden">
                  <h3 className="font-manrope text-2xl font-light tracking-tight mb-1">Physiological Resilience</h3>
                  <p className="font-inter text-sm text-on-surface-variant mb-6">Signal: (Optional Wearable) Aggregated HRV vs Resting HR trend</p>
                  <PrivacyMask defaultRevealed={true} reason="Aggregated wearable metrics. Raw individual data never hits servers.">
                    <div className="h-48 w-full min-w-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={physiologicalData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--theme-outline-variant)" opacity={0.3} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={AxisFont} dy={10} />
                          <YAxis axisLine={false} tickLine={false} domain={['dataMin - 10', 'dataMax + 10']} tick={AxisFont} />
                          <Tooltip contentStyle={TooltipStyle} />
                          <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                          <Line type="basis" name="Aggregate HRV(ms)" dataKey="hrv" stroke="var(--theme-secondary)" strokeWidth={4} dot={{ r: 4 }} />
                          <Line type="monotone" name="Resting HR (bpm)" dataKey="restingHR" stroke="#f87171" strokeWidth={2} dot={false} strokeDasharray="4 2" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </PrivacyMask>
               </Card>
            </motion.div>

         </div>

         {/* Right Column (1 span): Recommendations */}
         <div className="col-span-1">
            <motion.div variants={itemVariants} className="sticky top-24">
               <Card elevation="low" className="p-8 h-full rounded-[2.5rem] border border-outline-variant/10 shadow-ambient bg-surface-container-low">
                  <h3 className="font-manrope text-2xl font-light tracking-tight mb-8">Active Interventions</h3>
                  
                  <div className="space-y-6">
                     <motion.div whileHover={{ scale: 1.02 }} className="bg-surface p-6 rounded-3xl border border-red-500/20 shadow-sm cursor-pointer transition-colors hover:border-red-500/40 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-1.5 h-full bg-red-400" />
                       <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-red-500">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase">Tier 2 Risk • Manager</span>
                          </div>
                       </div>
                       <h4 className="font-manrope text-lg font-semibold mb-2 text-on-surface">Reduce Meeting Load (Sales)</h4>
                       <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                         The Sales cohort shows excessive meeting density causing a sharp drop in Focus Stability and increased Error Rate. Suggest introducing a "No-Meeting Wednesday".
                       </p>
                     </motion.div>

                     <motion.div whileHover={{ scale: 1.02 }} className="bg-surface p-6 rounded-3xl border border-orange-400/20 shadow-sm cursor-pointer transition-colors hover:border-orange-400/40 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-1.5 h-full bg-orange-400" />
                       <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2 text-orange-400">
                            <span className="w-2 h-2 rounded-full bg-orange-400" />
                            <span className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase">Tier 1 Risk • Automated</span>
                          </div>
                       </div>
                       <h4 className="font-manrope text-lg font-semibold mb-2 text-on-surface">After-Hours Activity (Eng)</h4>
                       <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                         Engineering cohort logged elevated session lengths. Gentle OS-level nudges have been triggered locally to encourage closing for the day.
                       </p>
                     </motion.div>

                     <motion.div whileHover={{ scale: 1.02 }} className="bg-surface p-6 rounded-3xl border border-outline-variant/30 shadow-sm cursor-pointer transition-colors hover:border-primary/40 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-1.5 h-full bg-primary" />
                       <div className="flex items-center space-x-2 text-primary mb-4">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase">Structural Suggestion</span>
                       </div>
                       <h4 className="font-manrope text-lg font-semibold mb-2 text-on-surface">Collaboration Withdrawal</h4>
                       <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                         Noticeable latency across internal messaging matching a drop in network size. Recommend team 1:1 check-ins to investigate social isolation.
                       </p>
                     </motion.div>
                  </div>
               </Card>
            </motion.div>
         </div>

      </div>
    </motion.div>
  );
}
