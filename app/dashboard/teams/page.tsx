'use client';

import { Card } from '../../components/ui/Card';
import { PrivacyMask } from '../../components/ui/PrivacyMask';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';


const mockTrendData = (baseFocus: number, variance: number) => {
  return Array.from({ length: 14 }).map((_, i) => ({
    day: `D${i + 1}`,
    focus: Math.min(100, Math.max(0, baseFocus + (Math.random() * variance * 2 - variance)))
  }));
};

export default function TeamsPage() {
  const teams = [
    { name: 'Programmers', count: 42, risk: 'Low', statusColor: 'bg-primary', chartColor: 'var(--theme-primary)', focus: '82%', overload: '34/100', history: mockTrendData(80, 5) },
    { name: 'Sales', count: 18, risk: 'High', statusColor: 'bg-red-400', chartColor: '#f87171', focus: '45%', overload: '78/100', history: mockTrendData(50, 20) },
    { name: 'Marketing', count: 12, risk: 'Medium', statusColor: 'bg-orange-400', chartColor: '#fb923c', focus: '68%', overload: '52/100', history: mockTrendData(65, 10) },
    { name: 'Customer Support', count: 35, risk: 'Medium', statusColor: 'bg-secondary', chartColor: 'var(--theme-secondary)', focus: '55%', overload: '61/100', history: mockTrendData(60, 15) }
  ];

  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col gap-10">

      <header>
        <h1 className="font-manrope text-4xl lg:text-[2.75rem] font-light tracking-tight mb-2">Groups & Teams</h1>
        <p className="font-inter text-on-surface-variant">Analyze demographic segments ensuring minimum privacy thresholds.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teams.map((team, idx) => (
          <Card key={idx} elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm relative overflow-hidden flex flex-col h-full">
            {/* Ambient status glow */}
            <div className={`absolute -inset-10 ${team.statusColor} blur-3xl opacity-[0.03] pointer-events-none`} />

            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-manrope text-2xl font-light tracking-tight">{team.name}</h3>
                <p className="font-inter text-xs text-on-surface-variant mt-1">
                  <span className="font-medium">Aggregated from {team.count} employees</span>
                </p>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-xs font-inter font-bold uppercase tracking-widest ${team.risk === 'High' ? 'bg-red-500/10 text-red-500' : team.risk === 'Medium' ? 'bg-orange-400/10 text-orange-400' : 'bg-primary/10 text-primary'}`}>
                Risk: {team.risk}
              </div>
            </div>

            <PrivacyMask defaultRevealed={true} reason="Minimum cohort rule met for analytics.">
              <div className="flex flex-col sm:flex-row gap-6 mt-4">

                {/* Stats Column */}
                <div className="w-full sm:w-1/3 flex flex-col gap-4">
                  <div className="pb-4 border-b border-outline-variant/10">
                    <span className="font-inter text-xs uppercase tracking-wider text-on-surface-variant block mb-1">Focus Stability</span>
                    <span className="font-manrope text-3xl font-light">{team.focus}</span>
                  </div>
                  <div>
                    <span className="font-inter text-xs uppercase tracking-wider text-on-surface-variant block mb-1">Overload Index</span>
                    <span className="font-manrope text-3xl font-light">{team.overload}</span>
                  </div>
                </div>

                {/* Chart Column */}
                <div className="w-full sm:w-2/3 h-32 relative flex flex-col justify-end">
                  <span className="absolute top-0 right-0 font-inter text-[10px] text-on-surface-variant uppercase">14-Day Focus Trend</span>
                  <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={team.history}>
                      <defs>
                        <linearGradient id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={team.chartColor} stopOpacity={0.3} />
                          <stop offset="95%" stopColor={team.chartColor} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <YAxis domain={[0, 100]} hide />
                      <Area type="monotone" dataKey="focus" stroke={team.chartColor} strokeWidth={2} fillOpacity={1} fill={`url(#gradient-${idx})`} isAnimationActive={true} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/10">
                <span className="font-inter text-xs uppercase tracking-wider text-on-surface-variant mb-3 block border-l-2 border-primary pl-2">
                  Main Correlatives
                </span>
                <p className="font-inter text-sm text-on-surface leading-relaxed border border-outline-variant/10 p-3 rounded-xl bg-surface-container-low">
                  {team.risk === 'High' ? 'High volume of synchronous meetings detected. Elevated structural fatigue markers correlate with drop in focus.' : team.risk === 'Medium' ? 'Moderate friction in communication latency. Potential early signs of meeting overload.' : 'Adequate asynchronous time. Routine recovery cycles intact and error rates stable.'}
                </p>
              </div>
            </PrivacyMask>
          </Card>
        ))}
      </section>

    </div>
  );
}
