import './App.css';
import { Background } from "./components/Background";
import  Navbar  from "./components/Navbar";
import { Hero } from "./components/Hero";
import Opportunities from './components/Opportunities';
import About from './components/About';
import Contribute from './components/Contribute';
import  Footer  from "./components/Footer";
import ScrollUp from './components/ScrollUp';


function App() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <Opportunities />
      <About />
      <Contribute />
      <Footer />
      <ScrollUp />
    </Background>
  );
}

export default App;
