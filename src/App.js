import React, { Suspense } from "react";
import Loader from "./components/Loader";
const Creations = React.lazy(() => import("./components/Creations"));
const Features = React.lazy(() => import("./components/Features"));
const Footer = React.lazy(() => import("./components/Footer"));
const Navigation = React.lazy(() => import("./components/Navigation"));
// import Creations from ;
// import Features from ;
// import Footer from ";
// import Navigation from ;

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Navigation />
      <Features />
      <Creations />
      <Footer />
    </Suspense>
  );
};

export default App;
