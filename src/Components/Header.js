import React from "react";
import avatar from '../images/avatar.jpg';
import bannerImg from '../images/avatar-png.png';


function App() {
  return (

    <header id="home">
      <div className="banner-container">
        <div className="heading-container">
          <h1><span id="hi">Hi</span> I'm <span id="name">Elijah Abebe</span></h1>
          <p id="heading-desc">Frontend Developer & Graphic Designer</p>
        </div>
      </div>
      <div id="circle-image-container">
        <img src={avatar} alt="Elijah profile"></img>
        <p>
            <strong id="frontend">Frontend developer</strong> & <br/> <strong>Graphic Designer</strong>
        </p>
      </div>
    </header>

  );
}

export default App;