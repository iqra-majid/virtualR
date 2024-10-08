import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";
import Testimonials from "./Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
