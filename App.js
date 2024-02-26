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
      <div className="extra">
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by Gamak Grover
          <a href="https://github.com/gamakgrover2002">Gamak Grover</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
