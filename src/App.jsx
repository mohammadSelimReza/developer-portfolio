import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import Skills from "./components/Skills";
import ProjectDetails from "./components/ProjectDetails";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className='bg-hero bg-cover bg-no-repeat bg-center '>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
