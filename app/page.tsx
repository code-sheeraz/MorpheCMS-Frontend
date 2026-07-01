import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoStrip from "./components/LogoStrip";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ContentTypes from "./components/ContentTypes";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <ContentTypes />
        <Pricing />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
