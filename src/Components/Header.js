import React from "react";
import avatar from '../images/avatar.jpg'
import logo from '../images/logo white.png'

function App() {
  return (

    <header>
      <nav>
        <div id="logo-container"><img src={logo} alt="logo"></img></div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projets">Projects</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <i class="fa-solid fa-bars"></i>
      </nav>
      <div className="banner-container">
        <div className="heading-container">
          <h1><span id="hi">Hi</span> I'm Elijah Abebe</h1>
          <p id="heading-desc">Frontend Developer & Graphic Designer</p>
        </div>
        <div className="img-container">
          <img src={avatar} alt="Elijah profile"></img>
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