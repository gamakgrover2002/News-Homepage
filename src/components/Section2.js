import React from "react";
import RetroImage from "../assets/images/image-retro-pcs.jpg";
import Keyboard from "../assets/images/image-top-laptops.jpg";
import Game from "../assets/images/image-gaming-growth.jpg";
function Section2() {
  return (
    <div id="section2">
      <div className="child">
        <img alt="img1" src={RetroImage}></img>
        <p>
          <h2>01</h2>

          <h3>Reviving Retro PCs </h3>

          <p>What happens when old PCs are given modern upgrades?</p>
        </p>
      </div>
      <div className="child">
        <img alt="img2" src={Keyboard}></img>
        <p>
          <h2>02</h2>
          <h3>Top 10 Laptops of 2022</h3>
          <p>Our best picks for various needs and budgets.</p>
        </p>
      </div>
      <div className="child">
        <img alt="img3" src={Game}></img>
        <p>
          <h2>03</h2>

          <h3>The Growth of Gaming</h3>

          <p>How the pandemic has sparked fresh opportunities.</p>
        </p>
      </div>
    </div>
  );
}

export default Section2;
