import { Card } from '../../components/ui/Card';

export default function PrivacyPage() {
  return (
    <div className="p-8 lg:p-12 max-w-7xl mx-auto flex flex-col gap-10">
      
      <header>
        <h1 className="font-manrope text-4xl lg:text-[2.75rem] font-light tracking-tight mb-2">Privacy Center</h1>
        <p className="font-inter text-on-surface-variant max-w-2xl">
          The core architecture of e-motion is designed to protect individual autonomy while empowering HR with macro-level insights.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="space-y-8">
           <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm">
             <div className="flex items-center space-x-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                 1
               </div>
               <h3 className="font-manrope text-xl font-semibold">No Individual Drill-down</h3>
             </div>
             <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
               e-motion is statistically incapable of isolating a single user's data. Our query engine enforces strict grouping logic so that managers and HR professionals can only ever see demographic or team-level trends.
             </p>
           </Card>

           <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm">
             <div className="flex items-center space-x-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                 2
               </div>
               <h3 className="font-manrope text-xl font-semibold">Minimum Cohort Threshold</h3>
             </div>
             <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
               A strict `n ≥ 5` limit is applied globally. If a team or intersectional demographic falls below 5 active members, its data is automatically obfuscated and masked from the dashboard to prevent deduction attacks.
             </p>
           </Card>

           <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm">
             <div className="flex items-center space-x-4 mb-4">
               <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                 3
               </div>
               <h3 className="font-manrope text-xl font-semibold">No Employee Ranking</h3>
             </div>
             <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
               We do not score, rank, or evaluate individuals. e-motion does not integrate with performance management systems. It is an environmental metric tool, not a human surveillance instrument.
             </p>
           </Card>
        </div>

        <div className="space-y-8 flex flex-col">
           <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm bg-surface-container-lowest">
             <h3 className="font-manrope text-xl font-semibold mb-6">Data Governance Flow</h3>
             
             <div className="space-y-4 border-l-2 border-primary pl-4 relative">
               <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary" />
               <h4 className="font-inter text-sm font-semibold">1. Device Edge Processing</h4>
               <p className="font-inter text-xs text-on-surface-variant mb-4">Raw signals (e.g., webcam frames, keystroke timings) are parsed locally on the employee's machine. Vectorized abstract markers are generated.</p>
               
               <div className="absolute top-[40%] -left-[5px] w-2 h-2 rounded-full bg-primary" />
               <h4 className="font-inter text-sm font-semibold">2. Discard Raw Data</h4>
               <p className="font-inter text-xs text-on-surface-variant mb-4">Immediately upon generating abstraction vectors, all raw source media and identifying biometric traces are securely dropped from memory. No local storage.</p>
               
               <div className="absolute top-[80%] -left-[5px] w-2 h-2 rounded-full bg-primary" />
               <h4 className="font-inter text-sm font-semibold">3. Server-side Aggregation</h4>
               <p className="font-inter text-xs text-on-surface-variant">Vectors enter the e-motion engine where they are stripped of PII and combined with cohort identifiers. Results are cached and exposed via HR dashboard.</p>
             </div>
           </Card>

           <Card elevation="lowest" className="p-8 border border-outline-variant/10 shadow-sm bg-[#e6f2ff] flex-1 mt-4">
              <h3 className="font-manrope text-2xl font-light text-primary mb-4 tracking-tight">Why HR Cannot See Individuals</h3>
              <p className="font-inter text-sm text-[var(--color-on-secondary-fixed-variant)] leading-relaxed mb-6">
                 Because solving workplace wellbeing is a structural challenge, not an individual failing. When leaders understand environmental overload, they can adapt processes, load balance efficiently, and protect their workforce sustainably.
              </p>
              <div className="inline-block px-4 py-2 bg-[#ffffff] rounded-lg text-xs font-inter font-semibold text-primary">
                 Auditable by GDPR standards
              </div>
           </Card>
        </div>
      </div>

    </div>
  );
}
