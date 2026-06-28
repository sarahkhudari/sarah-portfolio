import { cn } from '../../lib/utils.js';

export function Badge({ className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blush-200 backdrop-blur transition-all duration-300 hover:border-neon-pink/50 hover:text-white hover:shadow-[0_0_18px_-4px_rgba(255,175,204,0.6)]',
        className
      )}
    >
      {children}
    </span>
  );
}
