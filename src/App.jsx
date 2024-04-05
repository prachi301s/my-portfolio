import { useState } from "react";

import "./App.css";

import About from "./sections/About";
// import NavBar from './sections/Navbar'

import NavBar from "./sections/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <About />
    </>
  );
}

export default App;
