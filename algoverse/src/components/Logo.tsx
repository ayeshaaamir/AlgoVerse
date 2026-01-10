export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="3" fill="#22d3ee" />

          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="7"
            stroke="#22d3ee"
            strokeWidth="1.5"
            fill="none"
            className="animate-spin-slow"
            style={{ animationDuration: "8s" }}
          />
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="7"
            stroke="#22d3ee"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(60 16 16)"
            className="animate-spin-slow"
            style={{ animationDuration: "10s" }}
          />
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="7"
            stroke="#22d3ee"
            strokeWidth="1.5"
            fill="none"
            transform="rotate(120 16 16)"
            className="animate-spin-slow"
            style={{ animationDuration: "12s" }}
          />
        </svg>
      </div>
      <span className="text-xl font-bold">
        Algo<span className="text-cyan-400">Verse</span>
      </span>
    </div>
  );
};
