import { forwardRef } from 'react';
import { cn } from '../../lib/utils.js';

const variants = {
  primary:
    'text-white shadow-soft bg-[linear-gradient(135deg,#ffafcc_0%,#ff8db5_50%,#f48fb1_100%)] bg-[length:180%_180%] hover:bg-[position:100%_50%] hover:shadow-glow-lg',
  ghost:
    'border border-white/15 bg-white/5 text-blush-100 backdrop-blur-xl hover:bg-white/10 hover:text-white hover:border-neon-pink/50 hover:shadow-glow-soft',
  outline:
    'border border-neon-pink/50 bg-transparent text-blush-100 hover:bg-neon-pink/10 hover:border-neon-pink hover:shadow-glow-soft',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export const Button = forwardRef(function Button(
  { className, variant = 'primary', size = 'md', asChild, children, ...props },
  ref
) {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp
      ref={ref}
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-neon-pink/30',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {variant === 'primary' && (
        <span
          aria-hidden
          className="sheen-overlay pointer-events-none absolute inset-0 -translate-x-[120%] opacity-0 transition-opacity duration-300 group-hover:animate-sheen group-hover:opacity-100"
        />
      )}
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  );
});
