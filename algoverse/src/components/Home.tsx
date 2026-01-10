import { useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { StarField } from "./StarField";

export const Hero = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/topics");
  };

  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 to-gray-900">
      <StarField />

      <div className="px-8 text-center z-10 max-w-xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          Algo<span className="text-cyan-400">Verse</span>
        </h1>

        <p className="text-lg text-gray-300 mb-3 animate-fade-in-delay-1">
          Master Data Structures & Algorithms
        </p>

        <p className="text-sm text-gray-400 mb-6 animate-fade-in-delay-2">
          Interactive visualizations to help you learn by doing
        </p>

        <div className="flex flex-col gap-3 animate-fade-in-delay-3">
          <Button
            variant="primary"
            size="md"
            className="w-full"
            onClick={handleContinue}
          >
            Log In / Sign Up
          </Button>
          <Button
            variant="secondary"
            size="md"
            className="w-full"
            onClick={handleContinue}
          >
            Continue as Guest
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-4 animate-fade-in-delay-4">
          Save progress and track streaks with an account
        </p>
      </div>
    </section>
  );
};
