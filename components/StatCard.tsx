'use client';

import { motion } from 'framer-motion';

const STAT_ICONS: React.ReactNode[] = [
  <svg key="0" className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-2.74a2.25 2.25 0 013.182-3.182l.001.001" /></svg>,
  <svg key="1" className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="2" className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>,
  <svg key="3" className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v-11.25A2.25 2.25 0 0018 3.75h-2.25M20.25 3h-1.5M3.75 16.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75M20.25 16.5H17.5m0 0h2.25m0-2.25v-2.25m0 2.25v2.25m0-2.25h2.25" /></svg>,
  <svg key="4" className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031A3 3 0 0115 15.75c-2.684 0-4.5.879-4.5 2.625 0 1.734 1.816 2.625 4.5 2.625 2.684 0 4.5-.891 4.5-2.625 0-1.756-1.815-2.625-4.5-2.625m-10.5 0a9.094 9.094 0 003.741.479 3 3 0 004.682-2.72m-.94 3.198a3 3 0 01-.94 2.031 3 3 0 002.94-2.031 3 3 0 00-4.682-2.72m.94 3.198a9.094 9.094 0 01-.94 3.198m15-6a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="5" className="w-7 h-7 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>,
];

interface StatCardProps {
  value: string;
  label: string;
  source?: string;
  index?: number;
}

export function StatCard({ value, label, source, index = 0 }: StatCardProps) {
  return (
    <motion.div
      className="relative rounded-xl border border-teal/20 bg-gradient-to-r from-teal-tint/40 to-surface p-6 pl-5 border-l-4 border-l-teal shadow-sm transition-all hover:shadow-md hover:from-teal-tint/60"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay: (index ?? 0) * 0.05 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-heading text-2xl md:text-3xl font-bold text-ink tabular-nums tracking-tight">
            {value}
          </div>
          <div className="mt-1 text-sm font-medium text-teal">
            {label}
          </div>
          {source && (
            <p className="mt-2 text-xs text-muted2 max-w-[90%]">
              {source}
            </p>
          )}
        </div>
        <div className="shrink-0">{STAT_ICONS[index % 6]}</div>
      </div>
    </motion.div>
  );
}
