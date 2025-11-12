import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BloomEra from "./pages/BloomEra";
import GlowEra from "./pages/GlowEra";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bloom-era" element={<BloomEra />} />
        <Route path="/glow-era" element={<GlowEra />} />
        <Route path="/resources" element={<Resources />} />
        {/* removed <Dashboard /> route */}
      </Routes>
    </Router>
  );
}
