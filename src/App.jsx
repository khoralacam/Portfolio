import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/section/Navbar";
import HeroSection from "./components/section/HeroSection";
import Skills from "./components/section/Skills";
import Project from "./components/section/Project";
import About from "./components/section/About";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />

      <div id="home">
        <HeroSection />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </ThemeProvider>
  );
};

export default App;