import React from "react";

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
    </>
  );
};

export default App;
