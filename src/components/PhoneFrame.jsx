import { cn } from '../lib/utils.js';

/**
 * Tall portrait rectangle for mobile screenshots.
 *
 * Slim hairline border, soft drop shadow, modest rounded corners — just
 * enough framing to read as "mobile" without faking a device chrome.
 * Default aspect is 9:19.5 (modern phone).
 */
export function PhoneFrame({ className, innerClassName, children }) {
  return (
    <div
      className={cn(
        'relative aspect-[9/19.5] overflow-hidden rounded-2xl border border-white/15 bg-ink-950',
        '[box-shadow:0_60px_120px_-20px_rgba(0,0,0,0.85),0_30px_60px_-15px_rgba(0,0,0,0.7),0_12px_24px_-8px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,175,204,0.22),0_0_40px_-6px_rgba(255,175,204,0.35),inset_0_1px_0_0_rgba(255,255,255,0.10),inset_0_-1px_0_0_rgba(0,0,0,0.5)]',
        className
      )}
    >
      <div className={cn('relative h-full w-full', innerClassName)}>
        {children}
      </div>
    </div>
  );
}
