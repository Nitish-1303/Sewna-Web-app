import { Home, Users, Compass, Info, Sparkles } from 'lucide-react';
import { TubelightNavBar } from './ui/tubelight-navbar';

export default function TubelightNav() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'Designers', url: '#discover', icon: Users },
    { name: 'How It Works', url: '#how', icon: Compass },
    { name: 'About', url: '#about', icon: Info },
    { name: 'Style Quiz', url: '#quiz', icon: Sparkles },
  ];

  return <TubelightNavBar items={navItems} />;
}
