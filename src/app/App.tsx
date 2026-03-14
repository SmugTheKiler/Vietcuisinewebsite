import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Locations } from './components/Locations';
import { CustomerExperience } from './components/CustomerExperience';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedDishes />
      <About />
      <Menu />
      <CustomerExperience />
      <Locations />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}
