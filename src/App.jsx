import "./App.css";
import Header from "../src/components/header/Header";
import Home from "../src/components//home/Home";
import About from "../src/components/about/About";
import Skills from "../src/components/skills/Skills";
import Experience from "../src/components/experience/Experience";
import Qualification from "../src/components/qualification/Qualification";
import Work from "../src/components/work/Work";
import Contact from "../src/components/contact/Contact";
import Footer from "../src/components/footer/Footer";
import ScrollUp from "../src/components/scrollup/ScrollUp";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("G-WEE56Q9YV4");
  }, []);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
