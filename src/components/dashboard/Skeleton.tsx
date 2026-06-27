export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-white/[0.04] ${className}`}>
      <div className="absolute inset-0 animate-scan bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </div>
  );
}