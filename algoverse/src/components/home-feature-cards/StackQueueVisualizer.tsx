export const StackQueueVisualizer = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Stack */}
      <div>
        <div className="flex flex-col-reverse gap-1 mb-2 items-center">
          <div className="w-14 h-8 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-sm">
            7
          </div>
          <div className="w-14 h-8 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-sm">
            3
          </div>
          <div className="text-lg">↓</div>
        </div>
        <div className="text-xs text-center mb-2">Pushed: 7</div>
        <div className="flex items-center gap-1 text-xs text-cyan-400 justify-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span>Stack</span>
        </div>
      </div>

      {/* Queue */}
      <div>
        <div className="flex gap-1 mb-2 items-center justify-center">
          <span className="text-lg">→</span>
          <div className="flex gap-1">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs">
              5
            </div>
            <div className="w-8 h-8 border border-gray-600 rounded flex items-center justify-center text-gray-600 text-xs">
              0
            </div>
          </div>
        </div>
        <div className="mb-2">
          <div className="flex gap-1 items-center justify-center">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs">
              7
            </div>
            <div className="w-8 h-8 bg-cyan-500/50 rounded flex items-center justify-center text-white font-bold text-xs">
              7
            </div>
          </div>
        </div>
        <div className="text-xs text-center mb-2">Dequeued: 5</div>
        <div className="flex items-center gap-1 text-xs text-cyan-400 justify-center">
          <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
          <span>Queue</span>
        </div>
      </div>
    </div>
  );
};
