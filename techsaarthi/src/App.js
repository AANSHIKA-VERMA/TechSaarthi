import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {Background} from "./components/Background";
import Research from "./pages/opportunities/Research";
import Internship from "./pages/opportunities/Internship";
import Hackathon from "./pages/opportunities/Hackathon";
import Scholarship from "./pages/opportunities/Scholarship";
import CommunityProgram from "./pages/opportunities/CommunityProgram";
import CareerProgram from "./pages/opportunities/CareerProgram";
import Challenge from "./pages/opportunities/Challenge";

function App() {
  return (
    <BrowserRouter>
    <Background >
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/opportunities/research" element={<Research />} />
        <Route path="/opportunities/internships" element={<Internship />} />
        <Route path="/opportunities/hackathons" element={<Hackathon />} />
        <Route path="/opportunities/scholarships" element={<Scholarship />} />
        <Route path="/opportunities/community" element={<CommunityProgram />} />
        <Route path="/opportunities/challenge" element={<Challenge />} />
        <Route path="/opportunities/career" element={<CareerProgram />} />
      </Routes>
    </Background>
    </BrowserRouter>
  );
}

export default App;

