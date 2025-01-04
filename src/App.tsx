import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Mockup from './components/Mockup';
import Stats from './components/Stats';
import WaitlistCTA from './components/WaitlistCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Mockup />
      <WaitlistCTA />
      <Footer />
    </div>
  );
}

export default App;