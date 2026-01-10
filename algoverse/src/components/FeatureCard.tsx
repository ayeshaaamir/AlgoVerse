import type { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const FeatureCard = ({
  title,
  description,
  children,
}: FeatureCardProps) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 hover:border-cyan-500/50 transition-all duration-300">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-3">{description}</p>
      <div className="bg-gray-950/50 rounded-lg p-3 border border-gray-800">
        {children}
      </div>
    </div>
  );
};
