import { useState } from "react";
import { Button } from "../ui/Button";

export const ArrayVisualizer = () => {
  const [array] = useState([7, 2, 5, 8, 3]);
  const [action, setAction] = useState("");

  return (
    <div>
      <div className="flex gap-1 mb-3 justify-center">
        {array.map((num, index) => (
          <div
            key={index}
            className="w-10 h-10 bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-sm transition-all duration-300 hover:scale-110"
          >
            {num}
          </div>
        ))}
        <div className="w-10 h-10 border border-dashed border-gray-600 rounded"></div>
      </div>

      <div className="h-1 bg-gray-800 rounded-full overflow-hidden mb-3">
        <div className="h-full bg-cyan-500 w-5/6 transition-all duration-300"></div>
      </div>

      <div className="flex gap-2 mb-2 justify-center text-xs">
        <Button variant="feature" size="sm" onClick={() => setAction("push")}>
          Push
        </Button>
        <Button variant="feature" size="sm" onClick={() => setAction("pop")}>
          Pop
        </Button>
        <Button variant="secondary" size="sm" onClick={() => setAction("")}>
          Reset
        </Button>
      </div>

      <p className="text-xs text-gray-400 text-center">
        {action
          ? action === "push"
            ? "Adding 3..."
            : "Removing..."
          : "Select operation"}
      </p>
    </div>
  );
};
