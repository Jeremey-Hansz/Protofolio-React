import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { Home } from './pages/home';
import { useScrollToSection } from './hooks/useScrollToSection';
import './assets/app.css';

export default function App() {
  const { scrollToSection } = useScrollToSection();

  return (
    <div className="app">
      <Navbar scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
}
