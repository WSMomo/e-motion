import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden text-on-surface">
      {/* Decorative calm background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-surface-container-low to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="w-full max-w-[420px] mb-8 text-center">
        <div className="w-12 h-12 mx-auto rounded-full bg-primary bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary font-manrope font-semibold text-xl mb-6 shadow-sm">
          e
        </div>
        <h1 className="font-manrope text-3xl font-light tracking-tight mb-2">People Ops Portal</h1>
        <p className="font-inter text-on-surface-variant text-sm">Secure access to demographic wellbeing insights</p>
      </div>

      <Card elevation="low" className="w-full max-w-[420px] p-8 lg:p-10 border border-outline-variant/10 relative">
        <form className="space-y-6">
          <Input 
            label="Corporate Email" 
            type="email" 
            placeholder="hr.manager@company.com" 
            required
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            required
          />

          <div className="pt-2">
            <Link href="/dashboard">
              <Button variant="primary" className="w-full h-12 text-base shadow-sm">
                Secure Login
              </Button>
            </Link>
          </div>
          
          <div className="text-center pt-4">
             <Link href="#" className="font-inter text-sm text-primary hover:underline">
               Request Demo Access
             </Link>
          </div>
        </form>
      </Card>

      <div className="max-w-[420px] text-center mt-10 p-4 border border-outline-variant/15 rounded-xl bg-surface-container-lowest/50 backdrop-blur-sm">
        <div className="flex items-center justify-center space-x-2 text-primary mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span className="font-inter text-xs font-semibold uppercase tracking-wider">Privacy by Design</span>
        </div>
        <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
          e-motion only exposes team-level aggregated insights. We do not store raw biometric data, nor do we provide individual employee reporting. Minimum cohort threshold strictly enforced.
        </p>
      </div>

    </div>
  );
}
