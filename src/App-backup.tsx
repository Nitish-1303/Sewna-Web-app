import { useState } from 'react';
import Navbar from './components/Navbar';
import MockupHero from './components/MockupHero';
import TrustedBy from './components/TrustedBy';
import MetricsSection from './components/MetricsSection';
import DesignerCarousel from './components/DesignerCarousel';
import EnhancedHowItWorks from './components/EnhancedHowItWorks';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import FooterCTA from './components/FooterCTA';
import ScrollIndicator from './components/ScrollIndicator';
import StyleQuiz from './components/StyleQuiz';
import InspireMe from './components/InspireMe';
import BackgroundMotion from './components/BackgroundMotion';
import SignInDemo from './components/SignInDemo';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'signin'>('home');

  // Make navigation function available globally
  (window as any).navigateTo = setCurrentPage;

  // Test render
  console.log('App rendering, currentPage:', currentPage);

  if (currentPage === 'signin') {
    return (
      <div className="min-h-screen">
        <SignInDemo />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <BackgroundMotion />
      <Navbar />
      <InspireMe />
      <MockupHero />
      <ScrollIndicator />
      <TrustedBy />
      <MetricsSection />
      <DesignerCarousel />
      <EnhancedHowItWorks />
      <AboutSection />
      <Testimonials />
      <FooterCTA />
      <StyleQuiz />
    </div>
  );
}

export default App;
