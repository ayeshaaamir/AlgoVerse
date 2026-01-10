import { Logo } from "./Logo";
import { Button } from "./ui/Button";

interface HeaderProps {
  onAuthClick?: () => void;
}

export const Header = ({ onAuthClick }: HeaderProps) => {
  return (
    <header className="bg-gray-950/95 backdrop-blur-sm border-b border-gray-800/50 px-6 py-3 flex items-center justify-between flex-shrink-0">
      <Logo />
      <nav className="flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={onAuthClick}>
          Log In
        </Button>
        <Button variant="primary" size="sm" onClick={onAuthClick}>
          Sign Up
        </Button>
      </nav>
    </header>
  );
};
