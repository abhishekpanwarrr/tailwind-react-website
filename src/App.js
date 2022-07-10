import React from "react";
import Creations from "./components/Creations";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <main>
      <Navigation />
      <Features />
      <Creations />
      <Footer />
    </main>
  );
};

export default App;
