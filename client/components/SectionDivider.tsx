export default function SectionDivider() {
  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden">
      {/* Gradient line divider */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>

      {/* Blurred light streaks for depth */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-32 h-16 bg-gold/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-32 h-16 bg-electric-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      {/* Center accent dot */}
      <div className="relative w-2 h-2 rounded-full bg-gold/60 shadow-lg shadow-gold/30" />
    </div>
  );
}
