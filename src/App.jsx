
import "./App.css";

import About from "./sections/About";

import Skills from './sections/Skills';
import NavBar from "./sections/NavBar";

import Project from "./sections/Project";
function App() {
 

  return (
    <>
      <NavBar />
      <About />
      <Skills/>
      {/* <Experience /> */}
      <Project/>
    </>
  );
}

export default App;
