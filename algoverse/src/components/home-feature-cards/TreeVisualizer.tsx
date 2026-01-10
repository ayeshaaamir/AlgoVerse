export const TreeVisualizer = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Tree structure */}
      <div className="relative mb-3">
        {/* Root node */}
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs relative z-10">
            8
          </div>
        </div>

        {/* Second level */}
        <div className="flex justify-center gap-16 mb-4 relative">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            5
          </div>
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            7
          </div>
        </div>

        {/* Third level */}
        <div className="flex justify-between gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            4
          </div>
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 font-bold text-xs">
            4
          </div>
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
            6
          </div>
        </div>

        {/* SVG lines connecting nodes */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ top: 0, left: 0 }}
        >
          <line
            x1="50%"
            y1="16"
            x2="35%"
            y2="44"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <line
            x1="50%"
            y1="16"
            x2="65%"
            y2="44"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <line
            x1="35%"
            y1="52"
            x2="20%"
            y2="80"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <line
            x1="35%"
            y1="52"
            x2="40%"
            y2="80"
            stroke="#334155"
            strokeWidth="1.5"
          />
          <line
            x1="65%"
            y1="52"
            x2="80%"
            y2="80"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-2 text-xs">
        <div className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded">
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span className="text-gray-400">Binary Tree</span>
        </div>
      </div>
    </div>
  );
};
