import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AIAssistant from './components/AIAssistant';
import Features from './components/Features';
import Interactive3D from './components/Interactive3D';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <AIAssistant />
      <Features />
      <Interactive3D />
      <Footer />
    </div>
  );
}

export default App;
