import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Home";
import { Features } from "./components/Features";
import { DSATopics } from "./components/DSATopics";
import { BinarySearchFeature } from "./components/features/BinarySearchFeature";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-gray-950 text-white flex flex-col">
      <Header onAuthClick={() => navigate("/topics")} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-2">
          <Hero />
          <Features />
        </div>
      </main>
    </div>
  );
}

function TopicsPage() {
  const navigate = useNavigate();

  const handleDSAClick = (dsaId: string) => {
    navigate(`/dsa/${dsaId}`);
  };

  return <DSATopics onDSAClick={handleDSAClick} />;
}

function DetailPage() {
  const { dsaType } = useParams<{ dsaType: string }>();

  switch (dsaType) {
    case "binary-search":
      return <BinarySearchFeature />;
    default:
      return (
        <div>error</div>
      );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/topics" element={<TopicsPage />} />
        <Route path="/dsa/:dsaType" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
