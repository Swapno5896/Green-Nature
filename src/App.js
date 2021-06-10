import React from "react";
import AboutUs from "./components/AboutUs/AboutUs";
import Headser from "./components/Header/Headser";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Headser></Headser>
      <Services></Services>
      <AboutUs></AboutUs>
    </div>
  );
};

export default App;
