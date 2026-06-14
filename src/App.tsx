import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Conditions from './components/Conditions';
import HomeVisitProcess from './components/HomeVisitProcess';
import About from './components/About';
import PatientBenefits from './components/PatientBenefits';
import ServiceAreas from './components/ServiceAreas';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative min-h-screen">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Conditions />
        <HomeVisitProcess />
        <About />
        <PatientBenefits />
        <ServiceAreas />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
