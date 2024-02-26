import React from "react";

function Section1() {
  return (
    <div id="section1">
      <div id="sub-section1">
        <div id="hero-img"></div>
        <div id="hero-content">
          <div id="sub-content1">The Bright Future of Web 3.0?</div>
          <div id="sub-content2">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
            <button>READ MORE</button>
          </div>
        </div>
      </div>

      <div id="sub-section2">
        <h1>New</h1>
        <ul>
          <li>
            <h3>Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </li>
          <hr />
          <li>
            <h3> The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </li>
          <hr />
          <li>
            <h3> Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Section1;
