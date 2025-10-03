import Hero from "../component/Hero";
import Navbar from "../component/Navbar";
import Features from "../component/Features";
import Testimonials from "../component/Testimonials";
import Footer from "../component/Footer";
import ContactPage from "../component/ContactPage";
// import { Features } from "tailwindcss";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <ContactPage/>
      <Footer />
    </>
  );
};

export default Home;
