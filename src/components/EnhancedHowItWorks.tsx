import { FeatureSteps } from './ui/feature-section';

const features = [
  {
    step: 'Step 1',
    title: 'Create your profile',
    content: 'Tell us about your style and vision. Share your preferences and let us understand what makes you unique.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    step: 'Step 2',
    title: 'Connect with a designer',
    content: 'Browse our curated list of talented designers and choose your perfect match based on style and expertise.',
    image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    step: 'Step 3',
    title: 'Collaborate on ideas',
    content: 'Work together with your designer to bring your vision to life through sketches, fabrics, and iterations.',
    image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    step: 'Step 4',
    title: 'Approve your final design',
    content: 'Review every detail of your custom piece and approve the final design before production begins.',
    image: 'https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    step: 'Step 5',
    title: 'Wear your creation',
    content: 'Receive your unique, custom-made outfit and showcase your personal style with confidence.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
];

export default function EnhancedHowItWorks() {
  return (
    <section id="how" className="py-20 bg-gray-50">
      <FeatureSteps
        features={features}
        title="How It Works"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </section>
  );
}
