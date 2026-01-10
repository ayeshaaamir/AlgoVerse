export const CodeEditor = () => {
  return (
    <div className="font-mono text-xs">
      {/* File tabs */}
      <div className="flex items-center gap-2 mb-2 border-b border-gray-700 pb-1">
        <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-800 rounded-t border-b-2 border-cyan-500">
          <span className="text-cyan-400">●</span>
          <span className="text-white text-xs">queue.py</span>
        </div>
      </div>

      {/* Code content */}
      <div className="space-y-0.5 mb-2">
        <div className="flex gap-2">
          <span className="text-gray-600 w-4 text-right">1</span>
          <span className="text-gray-400">{"class Queue:"}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 w-4 text-right">2</span>
          <span className="text-purple-400">{"  def"}</span>
          <span className="text-blue-400">{" __init__"}</span>
          <span className="text-gray-400">{"(self):"}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 w-4 text-right">3</span>
          <span className="text-gray-400">{"    self.items = []"}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 w-4 text-right">4</span>
          <span className="text-purple-400">{"  def"}</span>
          <span className="text-blue-400">{" enqueue"}</span>
          <span className="text-gray-400">{"(self, item):"}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-600 w-4 text-right">5</span>
          <span className="text-gray-400">
            {"    self.items.insert(0, item)"}
          </span>
        </div>
      </div>

      {/* AI Assistant tooltip */}
      <div className="bg-gray-800 rounded p-2 border border-cyan-500/50">
        <div className="flex items-start gap-2">
          <div className="text-cyan-400 text-sm">💡</div>
          <p className="text-gray-300 text-xs">
            Queue structure ready. Try enqueue!
          </p>
        </div>
      </div>
    </div>
  );
};
