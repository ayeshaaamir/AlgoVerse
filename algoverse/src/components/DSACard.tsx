interface DSACardProps {
  title: string;
  icon: string;
  subtitle: string;
  builds: string[];
  concepts: string[];
  color: string;
  onClick?: () => void;
}

export const DSACard = ({
  title,
  icon,
  subtitle,
  builds,
  concepts,
  color,
  onClick,
}: DSACardProps) => {
  const colorClasses = {
    cyan: "from-cyan-900/20 to-cyan-950/20 border-cyan-800/30 hover:border-cyan-500/50",
    purple:
      "from-purple-900/20 to-purple-950/20 border-purple-800/30 hover:border-purple-500/50",
    green:
      "from-green-900/20 to-green-950/20 border-green-800/30 hover:border-green-500/50",
    yellow:
      "from-yellow-900/20 to-yellow-950/20 border-yellow-800/30 hover:border-yellow-500/50",
    orange:
      "from-orange-900/20 to-orange-950/20 border-orange-800/30 hover:border-orange-500/50",
    red: "from-red-900/20 to-red-950/20 border-red-800/30 hover:border-red-500/50",
    indigo:
      "from-indigo-900/20 to-indigo-950/20 border-indigo-800/30 hover:border-indigo-500/50",
    pink: "from-pink-900/20 to-pink-950/20 border-pink-800/30 hover:border-pink-500/50",
    violet:
      "from-violet-900/20 to-violet-950/20 border-violet-800/30 hover:border-violet-500/50",
    lime: "from-lime-900/20 to-lime-950/20 border-lime-800/30 hover:border-lime-500/50",
    emerald:
      "from-emerald-900/20 to-emerald-950/20 border-emerald-800/30 hover:border-emerald-500/50",
    teal: "from-teal-900/20 to-teal-950/20 border-teal-800/30 hover:border-teal-500/50",
    sky: "from-sky-900/20 to-sky-950/20 border-sky-800/30 hover:border-sky-500/50",
    slate:
      "from-slate-900/20 to-slate-950/20 border-slate-800/30 hover:border-slate-500/50",
  };

  const buttonColors = {
    cyan: "bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-400 border-cyan-500/50",
    purple:
      "bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 border-purple-500/50",
    green:
      "bg-green-600/20 hover:bg-green-600/30 text-green-400 border-green-500/50",
    yellow:
      "bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400 border-yellow-500/50",
    orange:
      "bg-orange-600/20 hover:bg-orange-600/30 text-orange-400 border-orange-500/50",
    red: "bg-red-600/20 hover:bg-red-600/30 text-red-400 border-red-500/50",
    indigo:
      "bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 border-indigo-500/50",
    pink: "bg-pink-600/20 hover:bg-pink-600/30 text-pink-400 border-pink-500/50",
    violet:
      "bg-violet-600/20 hover:bg-violet-600/30 text-violet-400 border-violet-500/50",
    lime: "bg-lime-600/20 hover:bg-lime-600/30 text-lime-400 border-lime-500/50",
    emerald:
      "bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border-emerald-500/50",
    teal: "bg-teal-600/20 hover:bg-teal-600/30 text-teal-400 border-teal-500/50",
    sky: "bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 border-sky-500/50",
    slate:
      "bg-slate-600/20 hover:bg-slate-600/30 text-slate-400 border-slate-500/50",
  };

  return (
    <div
      className={`bg-gradient-to-br ${
        colorClasses[color as keyof typeof colorClasses]
      } border rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer group`}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">
          What You'll Build
        </h4>
        <ul className="space-y-1">
          {builds.map((build, index) => (
            <li
              key={index}
              className="text-sm text-gray-400 flex items-start gap-2"
            >
              <span className="text-cyan-400 mt-0.5">✓</span>
              <span>{build}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="text-xs font-semibold text-gray-500 mb-2">
          What's Inside:
        </h4>
        <ul className="space-y-1">
          {concepts.map((concept, index) => (
            <li
              key={index}
              className="text-xs text-gray-500 flex items-start gap-2"
            >
              <span className="text-gray-600">•</span>
              <span>{concept}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={onClick}
        className={`w-full ${
          buttonColors[color as keyof typeof buttonColors]
        } px-4 py-2 rounded-lg border font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3`}
      >
        <span>Explore {title}</span>
        <span>→</span>
      </button>
    </div>
  );
};
