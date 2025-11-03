import Navbar from './components/Navbar';
import MockupHero from './components/MockupHero';
import TrustedBy from './components/TrustedBy';
import MetricsSection from './components/MetricsSection';
import DesignerCarousel from './components/DesignerCarousel';
import EnhancedHowItWorks from './components/EnhancedHowItWorks';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import BackgroundMotion from './components/BackgroundMotion';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <BackgroundMotion />
      <Navbar />
      <MockupHero />
      <TrustedBy />
      <MetricsSection />
      <DesignerCarousel />
      <EnhancedHowItWorks />
      <AboutSection />
      <Testimonials />
      <FooterCTA />
    </div>
  );
}

export default App;
