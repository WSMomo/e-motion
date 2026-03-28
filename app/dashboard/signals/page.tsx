'use client';

import { Card } from '../../components/ui/Card';
import { BarChart, Bar, ResponsiveContainer, Cell, LineChart, Line, XAxis } from 'recharts';

const staticBarData = [
  { val: 45 }, { val: 60 }, { val: 30 }, { val: 80 }, { val: 65 }, { val: 90 }, { val: 55 }
];
const staticLineData = Array.from({ length: 20 }).map((_, i) => ({ val: Math.sin(i / 2) * 40 + 60 + (i % 3 * 5) }));

export default function SignalsPage() {
  const signalSources = [
    {
      title: 'Keystroke Dynamics Aggregate',
      description: 'Translates typing rhythm and pacing into fatigue markers.',
      privacy: 'No keylogging. Only metadata (speed, variance) is retained.',
      processing: 'Local pre-processing only. Absolute anonymity.',
      chartType: 'line',
      color: 'var(--theme-primary)'
    },
    {
      title: 'Calendar & Workload Analytics',
      description: 'Evaluates meeting density, focus block continuity, and after-hours synchronous work.',
      privacy: 'Subject and participants sanitized. Only temporal flow is tracked.',
      processing: 'Aggregated at the cohort level.',
      chartType: 'bar',
      color: 'var(--theme-secondary)'
    },
    {
      title: 'Ambient Office Signals',
      description: 'Indexes acoustic pressure and lighting levels in open spaces.',
      privacy: 'No audio recorded. dB envelopes and lux levels only.',
      processing: 'Anonymized spatial vectors.',
      chartType: 'line',
      color: '#0F766E'
    },
    {
      title: 'Wearable Recovery Metrics',
      description: 'Assesses systemic recovery and sleep sufficiency ratios.',
      privacy: 'Opt-in required. Strict demographic aggregation (n > 10).',
      processing: 'Obfuscated before server transmission.',
      chartType: 'line',
      color: '#f87171'
    },
    {
      title: 'Webcam Vitals Abstraction',
      description: 'Extracts cognitive load indicators from optical micro-expressions.',
      privacy: 'No raw webcam storage. Zero facial recognition.',
      processing: 'Edge-processed feature vectors only.',
      chartType: 'bar',
      color: '#a855f7'
    }
  ];

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col gap-10">
      
      <header>
        <h1 className="font-manrope text-4xl lg:text-[2.75rem] font-light tracking-tight mb-2">Sources & Signals</h1>
        <p className="font-inter text-on-surface-variant max-w-2xl">
          e-motion derives insights through a multi-modal approach. Below are the signal domains utilized to compute team wellbeing metrics.
        </p>
      </header>

      <section className="space-y-6">
        {signalSources.map((source, idx) => (
          <Card key={idx} elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm flex flex-col md:flex-row gap-8 items-stretch relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-64 h-full opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: source.color }} />

            <div className="md:w-1/4 flex flex-col justify-center">
              <h3 className="font-manrope text-xl font-semibold text-on-surface mb-2">{source.title}</h3>
              <p className="font-inter text-[13px] text-on-surface-variant leading-relaxed">{source.description}</p>
            </div>
            
            <div className="md:w-2/4 bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-2xl flex flex-col sm:flex-row gap-6 relative z-10">
              <div className="flex-1">
                <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">Privacy Guarantee</span>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">{source.privacy}</p>
              </div>
              <div className="border-l border-outline-variant/15 pl-6 flex-1">
                <span className="font-inter text-[10px] font-bold uppercase tracking-widest text-[#0F766E] mb-2 block">Processing Model</span>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">{source.processing}</p>
              </div>
            </div>

            <div className="md:w-1/4 h-28 md:h-auto bg-surface flex items-center justify-center rounded-xl p-4 border border-outline-variant/5">
                <ResponsiveContainer width="100%" height="100%">
                  {source.chartType === 'bar' ? (
                     <BarChart data={staticBarData}>
                       <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                         {staticBarData.map((_, i) => (
                           <Cell key={`cell-${i}`} fill={source.color} fillOpacity={0.3 + (i * 0.1)} />
                         ))}
                       </Bar>
                     </BarChart>
                  ) : (
                     <LineChart data={staticLineData}>
                       <Line type="monotone" dataKey="val" stroke={source.color} strokeWidth={3} dot={false} isAnimationActive={true} />
                     </LineChart>
                  )}
                </ResponsiveContainer>
            </div>

          </Card>
        ))}
      </section>

    </div>
  );
}
