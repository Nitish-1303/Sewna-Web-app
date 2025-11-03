import { HeroLanding } from './ui/hero-landing';
import type { HeroLandingProps } from './ui/hero-landing';

export default function AlternativeHero() {
  const heroProps: HeroLandingProps = {
    logo: {
      src: 'https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=teal&shade=500',
      alt: 'SEWNA Logo',
      companyName: 'SEWNA',
    },
    navigation: [
      { name: 'Discover Designers', href: '#discover' },
      { name: 'How It Works', href: '#how' },
      { name: 'About', href: '#about' },
    ],
    loginText: 'Sign In',
    loginHref: '#login',
    title: 'Fashion Designed Just for You',
    description:
      'Connect with independent designers and create custom outfits that tell your unique story. From sketch to wardrobe, experience fashion that's truly yours.',
    announcementBanner: {
      text: '✨ New Feature:',
      linkText: 'Discover Your Style DNA',
      linkHref: '#quiz',
    },
    callToActions: [
      { text: 'I Need a Designer', href: '#', variant: 'primary' },
      { text: "I'm a Designer", href: '#', variant: 'secondary' },
    ],
    titleSize: 'large',
    gradientColors: {
      from: 'oklch(0.7 0.15 160)', // Teal/Green
      to: 'oklch(0.6 0.2 200)', // Blue
    },
  };

  return <HeroLanding {...heroProps} />;
}
