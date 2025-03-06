import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-pulse text-primary">Loading...</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <About />
          <Solutions />
          <Team />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;