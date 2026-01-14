import './App.css';
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";


function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
    </Background>
  );
}

export default App;
