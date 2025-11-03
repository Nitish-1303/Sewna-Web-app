import MockupHero from '../components/MockupHero';
import TrustedBy from '../components/TrustedBy';
import MetricsSection from '../components/MetricsSection';
import DesignerCarousel from '../components/DesignerCarousel';
import EnhancedHowItWorks from '../components/EnhancedHowItWorks';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import FooterCTA from '../components/FooterCTA';

export default function Home() {
  return (
    <>
      <MockupHero />
      <TrustedBy />
      <MetricsSection />
      <DesignerCarousel />
      <EnhancedHowItWorks />
      <AboutSection />
      <Testimonials />
      <FooterCTA />
    </>
  );
}
