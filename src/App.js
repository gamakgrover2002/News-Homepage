import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <div className="extra"></div>
    </div>
  );
}

export default App;
