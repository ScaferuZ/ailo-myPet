import React from "react";

import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Finder from "./components/Finder";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Finder />
    </>
  );
};

export default App;
