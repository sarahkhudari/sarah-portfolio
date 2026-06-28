import { cn } from '../../lib/utils.js';

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl transition-all duration-500',
        '[box-shadow:0_24px_60px_-22px_rgba(255,175,204,0.35),0_2px_8px_-4px_rgba(255,175,204,0.20),inset_0_1px_0_0_rgba(255,255,255,0.06)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cn('p-6 pb-0', className)}>{children}</div>;
}

export function CardContent({ className, children }) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return (
    <div className={cn('flex items-center gap-3 p-6 pt-0', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h3
      className={cn(
        'font-display text-xl font-semibold text-blush-50',
        className
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn('text-sm leading-relaxed text-blush-200/80', className)}>
      {children}
    </p>
  );
}
