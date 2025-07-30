import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonial";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import PageBackground from '../components/PageBackground';

export default function HomePage() {
  return (
    <main className="relative">
      <PageBackground />
      <div className="relative z-10">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      </div>
      </main>
  );
}
