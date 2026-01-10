import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { Button } from "../ui/Button";

const dictionary = [
  {
    word: "algorithm",
    definition: "A step-by-step procedure for solving a problem",
  },
  {
    word: "array",
    definition:
      "A collection of elements stored at contiguous memory locations",
  },
  {
    word: "binary",
    definition: "Related to a system of numerical notation with base 2",
  },
  {
    word: "cache",
    definition:
      "A hardware or software component that stores data for faster access",
  },
  {
    word: "database",
    definition: "An organized collection of structured information",
  },
  {
    word: "encryption",
    definition: "The process of converting information into a secret code",
  },
  {
    word: "function",
    definition:
      "A block of organized, reusable code that performs a single action",
  },
  {
    word: "graph",
    definition: "A data structure consisting of nodes and edges",
  },
  {
    word: "hash",
    definition:
      "A function that converts input into a fixed-size string of bytes",
  },
  {
    word: "index",
    definition: "A data structure that improves the speed of data retrieval",
  },
  {
    word: "javascript",
    definition: "A high-level programming language for web development",
  },
  { word: "kernel", definition: "The core component of an operating system" },
  {
    word: "loop",
    definition:
      "A sequence of instructions that repeats until a condition is met",
  },
  {
    word: "memory",
    definition: "Hardware that stores data and instructions for quick access",
  },
  {
    word: "network",
    definition: "A group of interconnected computers and devices",
  },
  {
    word: "object",
    definition: "A data structure containing data and methods",
  },
  {
    word: "protocol",
    definition: "A set of rules governing data communication",
  },
  {
    word: "query",
    definition: "A request for data or information from a database",
  },
  {
    word: "recursion",
    definition: "A function that calls itself to solve smaller instances",
  },
  {
    word: "stack",
    definition: "A linear data structure following LIFO principle",
  },
  {
    word: "thread",
    definition: "The smallest unit of processing that can be scheduled",
  },
  { word: "unicode", definition: "A standard for consistent encoding of text" },
  { word: "variable", definition: "A named storage location in memory" },
  {
    word: "webpack",
    definition: "A module bundler for JavaScript applications",
  },
  { word: "xml", definition: "A markup language for encoding documents" },
  { word: "yaml", definition: "A human-readable data serialization language" },
  {
    word: "zip",
    definition: "A file format for data compression and archiving",
  },
];

export const BinarySearchFeature = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchSteps, setSearchSteps] = useState<
    {
      left: number;
      right: number;
      mid: number;
      midWord: string;
      comparison: string;
      action: string;
    }[]
  >([]);
  const [result, setResult] = useState<{
    found: boolean;
    word?: string;
    definition?: string;
    steps?: number;
  } | null>(null);
  const [currentHighlight, setCurrentHighlight] = useState<{
    left: number;
    right: number;
    mid: number;
  } | null>(null);
  const [showLinearComparison, setShowLinearComparison] = useState(false);
  const [linearSteps, setLinearSteps] = useState(0);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const runBinarySearch = async (target: string) => {
    const searchWord = target.toLowerCase().trim();
    if (!searchWord) return;

    setIsSearching(true);
    setSearchSteps([]);
    setResult(null);
    setShowLinearComparison(false);

    let left = 0;
    let right = dictionary.length - 1;
    const steps: typeof searchSteps = [];

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midWord = dictionary[mid].word;

      setCurrentHighlight({ left, right, mid });

      let comparison: string;
      let action: string;

      if (midWord === searchWord) {
        comparison = `"${midWord}" === "${searchWord}"`;
        action = "✓ Found it!";
        steps.push({ left, right, mid, midWord, comparison, action });
        setSearchSteps([...steps]);
        await sleep(800);

        setResult({
          found: true,
          word: dictionary[mid].word,
          definition: dictionary[mid].definition,
          steps: steps.length,
        });
        setIsSearching(false);

        // Calculate linear search steps for comparison
        const linearIdx = dictionary.findIndex((d) => d.word === searchWord);
        setLinearSteps(linearIdx + 1);
        setShowLinearComparison(true);
        return;
      } else if (midWord < searchWord) {
        comparison = `"${midWord}" < "${searchWord}"`;
        action = "→ Search right half (words after this)";
        steps.push({ left, right, mid, midWord, comparison, action });
        setSearchSteps([...steps]);
        await sleep(800);
        left = mid + 1;
      } else {
        comparison = `"${midWord}" > "${searchWord}"`;
        action = "← Search left half (words before this)";
        steps.push({ left, right, mid, midWord, comparison, action });
        setSearchSteps([...steps]);
        await sleep(800);
        right = mid - 1;
      }
    }

    setResult({ found: false, steps: steps.length });
    setCurrentHighlight(null);
    setIsSearching(false);
  };

  const handleSearch = () => {
    runBinarySearch(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !isSearching) {
      handleSearch();
    }
  };

  const resetDemo = () => {
    setSearchTerm("");
    setSearchSteps([]);
    setResult(null);
    setCurrentHighlight(null);
    setShowLinearComparison(false);
    setIsSearching(false);
  };

  const getWordStyle = (index: number) => {
    if (!currentHighlight) return "bg-gray-800/50 border-gray-700";

    const { left, right, mid } = currentHighlight;

    if (index === mid) {
      if (result?.found && dictionary[index].word === result.word) {
        return "bg-green-500/30 border-green-500 scale-105 shadow-lg shadow-green-500/20";
      }
      return "bg-yellow-500/30 border-yellow-500 scale-105 shadow-lg shadow-yellow-500/20";
    }

    if (index >= left && index <= right) {
      return "bg-cyan-500/20 border-cyan-500/50";
    }

    return "bg-gray-900/50 border-gray-800 opacity-30";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 text-white">
      <header className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800/50 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/topics")}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Back to Topics
          </button>
          <Logo />
        </div>
        <nav className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Playground
          </Button>
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button variant="primary" size="sm">
            Sign Up
          </Button>
        </nav>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 mb-6">
            <span className="text-yellow-400">🔍</span>
            <span className="text-yellow-400 text-sm font-medium">
              Real-World Application
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-yellow-400">Dictionaries</span> Find Words
            Instantly
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ever wondered how your phone's dictionary searches through 100,000+
            words in milliseconds? It uses{" "}
            <span className="text-yellow-400 font-semibold">Binary Search</span>
            !
          </p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span className="text-2xl">🤔</span> The Problem
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">
                Linear Search (Naive Approach)
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Check every word from A to Z until you find it.
              </p>
              <div className="text-gray-400 text-sm">
                <p>📚 Oxford Dictionary: ~170,000 words</p>
                <p>⏱️ Worst case: Check all 170,000 words</p>
                <p className="text-red-400">😫 That's SLOW!</p>
              </div>
            </div>
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-green-400 mb-2">
                Binary Search (Smart Approach)
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                Open to the middle, eliminate half each time.
              </p>
              <div className="text-gray-400 text-sm">
                <p>📚 Oxford Dictionary: ~170,000 words</p>
                <p>⏱️ Worst case: Only ~17 checks!</p>
                <p className="text-green-400">🚀 log₂(170,000) ≈ 17</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-800/30 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center text-2xl">
              📖
            </div>
            <div>
              <h2 className="text-2xl font-bold">Tech Dictionary</h2>
              <p className="text-gray-400">
                Search for a programming term and watch binary search in action
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Try: javascript, stack, hash, recursion..."
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 transition-colors"
                disabled={isSearching}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                {dictionary.length} words
              </span>
            </div>
            <button
              onClick={handleSearch}
              disabled={isSearching || !searchTerm.trim()}
              className="bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-700 disabled:cursor-not-allowed text-black font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {isSearching ? "Searching..." : "Search 🔍"}
            </button>
            <button
              onClick={resetDemo}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Reset
            </button>
          </div>

          <div className="bg-gray-950/50 rounded-lg p-4 border border-gray-800 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">
                Dictionary (Sorted A-Z)
              </span>
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-yellow-500/50 rounded"></span>{" "}
                  Checking
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-cyan-500/30 rounded"></span>{" "}
                  Search Range
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-gray-800 opacity-30 rounded"></span>{" "}
                  Eliminated
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2">
              {dictionary.map((entry, index) => (
                <div
                  key={entry.word}
                  className={`px-2 py-2 rounded border text-center transition-all duration-300 ${getWordStyle(
                    index
                  )}`}
                >
                  <span className="text-xs font-medium truncate block">
                    {entry.word}
                  </span>
                  <span className="text-[10px] text-gray-500">[{index}]</span>
                </div>
              ))}
            </div>
          </div>

          {searchSteps.length > 0 && (
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700 mb-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
                <span>📝</span> Search Steps (How a dictionary works!)
              </h3>
              <div className="space-y-2">
                {searchSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm bg-gray-800/50 rounded-lg px-4 py-3 animate-fade-in"
                  >
                    <span className="text-yellow-400 font-mono font-bold whitespace-nowrap">
                      Step {index + 1}
                    </span>
                    <span className="text-gray-400">
                      Open to page{" "}
                      <span className="text-cyan-400 font-semibold">
                        {step.mid}
                      </span>{" "}
                      → Found "
                      <span className="text-white font-semibold">
                        {step.midWord}
                      </span>
                      "
                    </span>
                    <span className="text-gray-500">|</span>
                    <span
                      className={
                        step.action.includes("Found")
                          ? "text-green-400"
                          : "text-orange-400"
                      }
                    >
                      {step.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {result && (
            <div
              className={`rounded-lg p-6 border ${
                result.found
                  ? "bg-green-500/10 border-green-500/30"
                  : "bg-red-500/10 border-red-500/30"
              }`}
            >
              {result.found ? (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">✅</span>
                    <span className="text-xl font-bold text-green-400">
                      Found in {result.steps} step(s)!
                    </span>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <h4 className="text-2xl font-bold text-white mb-2 capitalize">
                      {result.word}
                    </h4>
                    <p className="text-gray-300">{result.definition}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">❌</span>
                  <span className="text-xl font-bold text-red-400">
                    Word not found (checked {result.steps} positions)
                  </span>
                </div>
              )}
            </div>
          )}

          {showLinearComparison && result?.found && (
            <div className="mt-6 bg-gray-900/50 rounded-lg p-4 border border-gray-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span>⚡</span> Why Binary Search Wins
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-center">
                  <p className="text-red-400 text-sm mb-1">Linear Search</p>
                  <p className="text-4xl font-bold text-white">{linearSteps}</p>
                  <p className="text-gray-400 text-sm">comparisons needed</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                  <p className="text-green-400 text-sm mb-1">Binary Search</p>
                  <p className="text-4xl font-bold text-white">
                    {result.steps}
                  </p>
                  <p className="text-gray-400 text-sm">comparisons needed</p>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4">
                Binary search was{" "}
                <span className="text-green-400 font-bold">
                  {Math.round(linearSteps / (result.steps || 1))}x faster
                </span>{" "}
                for this search!
              </p>
            </div>
          )}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span>🌍</span> Where You Use Binary Search Every Day
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-yellow-400 mb-2">Phone Contacts</h3>
              <p className="text-sm text-gray-400">
                When you search for "John", your phone doesn't check every
                contact. It jumps to "J" section instantly using binary search!
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="font-bold text-yellow-400 mb-2">
                Spotify / Music Apps
              </h3>
              <p className="text-sm text-gray-400">
                Finding a song among millions? Binary search helps locate tracks
                in your sorted library almost instantly.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-3">🛒</div>
              <h3 className="font-bold text-yellow-400 mb-2">
                Amazon Price Filter
              </h3>
              <p className="text-sm text-gray-400">
                When you set a price range, binary search finds products within
                your budget from millions of items.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold text-yellow-400 mb-2">Git Bisect</h3>
              <p className="text-sm text-gray-400">
                Developers use binary search to find which commit introduced a
                bug among thousands of changes.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-3">🗃️</div>
              <h3 className="font-bold text-yellow-400 mb-2">
                Database Queries
              </h3>
              <p className="text-sm text-gray-400">
                When you search for a user by ID, databases use B-trees (based
                on binary search) for O(log n) lookups.
              </p>
            </div>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-500/50 transition-colors">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="font-bold text-yellow-400 mb-2">
                Game Leaderboards
              </h3>
              <p className="text-sm text-gray-400">
                Finding your rank among millions of players? Binary search
                locates your position in the sorted scoreboard.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>💡</span> The Key Insight
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">📖</div>
              <h3 className="font-semibold text-yellow-400 mb-2">
                Requirement
              </h3>
              <p className="text-gray-300">
                Data must be <strong>sorted</strong>
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">✂️</div>
              <h3 className="font-semibold text-yellow-400 mb-2">Strategy</h3>
              <p className="text-gray-300">
                Eliminate <strong>half</strong> each step
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-semibold text-yellow-400 mb-2">Result</h3>
              <p className="text-gray-300">
                <strong>O(log n)</strong> time complexity
              </p>
            </div>
          </div>
          <div className="mt-6 bg-gray-900/50 rounded-lg p-4 text-center">
            <p className="text-gray-300">
              <span className="text-yellow-400 font-bold">
                1 billion items?
              </span>{" "}
              Binary search needs only{" "}
              <span className="text-green-400 font-bold">~30 comparisons</span>{" "}
              to find anything!
            </p>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
            <span>👨‍💻</span> Implementation
          </h2>
          <div className="bg-gray-950 rounded-lg p-6 border border-gray-700 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono">
              <code>{`function searchDictionary(dictionary, targetWord) {
  let left = 0;
  let right = dictionary.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentWord = dictionary[mid].word;

    if (currentWord === targetWord) {
      return dictionary[mid]; // Found! Return the entry
    }

    if (currentWord < targetWord) {
      left = mid + 1;  // Word comes after, search right
    } else {
      right = mid - 1; // Word comes before, search left
    }
  }

  return null; // Word not in dictionary
}

// Time: O(log n) - Halves search space each iteration
// Space: O(1) - Only uses a few variables`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
