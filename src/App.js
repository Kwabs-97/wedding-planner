/** @format */

import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonial";
import Article from "./Components/Article";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonial />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
