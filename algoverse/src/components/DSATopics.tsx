import { DSACard } from "./DSACard";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

interface DSATopicsProps {
  onDSAClick: (dsaId: string) => void;
}

export const DSATopics = ({ onDSAClick }: DSATopicsProps) => {
  const topics = [
    {
      id: "binary-search",
      title: "Binary Search",
      icon: "🔍",
      subtitle: "Search Algorithms • Optimization",
      builds: [
        "Fast Search Implementation",
        "Dictionary Lookup",
        "Database Queries",
      ],
      concepts: ["Divide & Conquer", "O(log n) Complexity"],
      color: "yellow",
    },
    {
      id: "stack",
      title: "Stack",
      icon: "📚",
      subtitle: "Undo/Redo • Browser History • Call Stack",
      builds: [
        "Undo/Redo System",
        "Modal Navigation",
        "Function Call Simulation",
      ],
      concepts: ["Push & Pop", "LIFO Behavior"],
      color: "cyan",
    },
    {
      id: "queue",
      title: "Queue",
      icon: "📋",
      subtitle: "Notification Queue • Job Processing",
      builds: [
        "Notification System",
        "Background Worker Queue",
        "JS Implementation",
      ],
      concepts: ["Enqueue & Dequeue", "Time & Space Complexity"],
      color: "cyan",
    },
    {
      id: "array",
      title: "Array",
      icon: "📊",
      subtitle: "Feeds & Carousels • Notifications List",
      builds: [
        "Dynamic Feed Renderer",
        "Pagination System",
        "Photo Carousel Feature",
      ],
      concepts: ["Enqueue & Dequeue", "FIFO Behavior"],
      color: "cyan",
    },
    {
      id: "hashmap",
      title: "HashMap",
      icon: "🗂️",
      subtitle: "Caching • Session Storage • Feature Flags",
      builds: [
        "Dynamic Feed Renderer",
        "Pagination System",
        "Photo Carousel Feature",
      ],
      concepts: ["Index Access", "Time & Space Complexity"],
      color: "purple",
    },
    {
      id: "tree",
      title: "Tree",
      icon: "🌲",
      subtitle: "File System • Comments • Nested Data",
      builds: [
        "File Explorer UI",
        "Nested Comment Thread",
        "Hierarchical Data Display",
      ],
      concepts: ["Key Value Storage", "Time & Space Complexity"],
      color: "cyan",
    },
    {
      id: "graph",
      title: "Graph",
      icon: "🔗",
      subtitle: "Social Networks • Recommendations",
      builds: ["Social Connection Finder", "Recommendation Engine"],
      concepts: ["Nodes & Edges", "BFS & DFS Traversal"],
      color: "cyan",
    },
    {
      id: "linked-list",
      title: "Linked List",
      icon: "🔗",
      subtitle: "Dynamic Data • Memory Management",
      builds: [
        "Music Playlist",
        "Browser Navigation",
        "Undo/Redo Implementation",
      ],
      concepts: ["Node Pointers", "Insert & Delete Operations"],
      color: "green",
    },
    {
      id: "sorting",
      title: "Sorting",
      icon: "⬆️",
      subtitle: "Merge Sort • Quick Sort • Bubble Sort",
      builds: [
        "Leaderboard System",
        "Product Filter & Sort",
        "Timeline Organizer",
      ],
      concepts: ["Comparison Based", "Time Complexity Trade-offs"],
      color: "orange",
    },
    {
      id: "heap",
      title: "Heap",
      icon: "⛰️",
      subtitle: "Priority Queue • Task Scheduling",
      builds: [
        "Task Priority Manager",
        "Event Scheduler",
        "Top K Elements Finder",
      ],
      concepts: ["Min/Max Heap", "Heap Operations"],
      color: "red",
    },
    {
      id: "trie",
      title: "Trie",
      icon: "📖",
      subtitle: "Autocomplete • Spell Checker",
      builds: [
        "Search Autocomplete",
        "Word Suggestion Engine",
        "Dictionary Implementation",
      ],
      concepts: ["Prefix Tree", "String Search"],
      color: "indigo",
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming",
      icon: "🎯",
      subtitle: "Optimization • Memoization",
      builds: [
        "Fibonacci Calculator",
        "Shortest Path Finder",
        "Knapsack Problem Solver",
      ],
      concepts: ["Overlapping Subproblems", "Optimal Substructure"],
      color: "pink",
    },
    {
      id: "backtracking",
      title: "Backtracking",
      icon: "🔄",
      subtitle: "Puzzles • Pathfinding • Combinations",
      builds: ["Sudoku Solver", "N-Queens Problem", "Maze Pathfinder"],
      concepts: ["DFS Based", "State Space Search"],
      color: "violet",
    },
    {
      id: "greedy",
      title: "Greedy Algorithms",
      icon: "💰",
      subtitle: "Optimization • Local Best Choice",
      builds: ["Activity Scheduler", "Coin Change System", "Huffman Encoding"],
      concepts: ["Local Optimization", "Choice Property"],
      color: "lime",
    },
    {
      id: "bst",
      title: "Binary Search Tree",
      icon: "🌳",
      subtitle: "Ordered Data • Fast Lookup",
      builds: [
        "Range Query System",
        "Auto-balancing Structure",
        "Database Index",
      ],
      concepts: ["In-order Traversal", "BST Properties"],
      color: "emerald",
    },
    {
      id: "segment-tree",
      title: "Segment Tree",
      icon: "📏",
      subtitle: "Range Queries • Updates",
      builds: [
        "Range Sum Calculator",
        "Array Range Updater",
        "Analytics Dashboard",
      ],
      concepts: ["Range Operations", "Lazy Propagation"],
      color: "teal",
    },
    {
      id: "union-find",
      title: "Union Find",
      icon: "🔗",
      subtitle: "Disjoint Sets • Connected Components",
      builds: [
        "Social Network Clusters",
        "Image Segmentation",
        "Network Connectivity",
      ],
      concepts: ["Path Compression", "Union by Rank"],
      color: "sky",
    },
    {
      id: "bit-manipulation",
      title: "Bit Manipulation",
      icon: "0️⃣",
      subtitle: "Binary Operations • Optimization",
      builds: ["Permission System", "Flag Manager", "Compression Algorithm"],
      concepts: ["Bitwise Operations", "Space Optimization"],
      color: "slate",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/20 to-gray-950 text-white overflow-y-auto">
      {/* Header */}
      <header className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800/50 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <Logo />
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

      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Explore Data Structures
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in-delay-1">
          through Real-World Systems
        </h2>
        <p className="text-lg text-gray-400 animate-fade-in-delay-2">
          Learn how software engineers use DSA to build real products
        </p>
      </div>

      {/* Topics Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <DSACard {...topic} onClick={() => onDSAClick(topic.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
