import { FeatureCard } from "./FeatureCard";
import { ArrayVisualizer } from "./home-feature-cards/ArrayVisualizer";
import { StackQueueVisualizer } from "./home-feature-cards/StackQueueVisualizer";
import { TreeVisualizer } from "./home-feature-cards/TreeVisualizer";
import { CodeEditor } from "./home-feature-cards/CodeEditor";

export const Features = () => {
  return (
    <section className="h-full overflow-y-auto bg-gray-900/30 p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Explore Features</h2>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 auto-rows-min">
        <FeatureCard
          title="Array"
          description="Insertion, deletion & traversal"
        >
          <ArrayVisualizer />
        </FeatureCard>

        <FeatureCard title="Stack & Queue" description="LIFO & FIFO operations">
          <StackQueueVisualizer />
        </FeatureCard>

        <FeatureCard
          title="Trees & Graphs"
          description="Linked lists, trees & more"
        >
          <TreeVisualizer />
        </FeatureCard>

        <FeatureCard title="Code Editor" description="Write code with AI help">
          <CodeEditor />
        </FeatureCard>
      </div>
    </section>
  );
};
