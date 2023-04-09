
import logo from '../images/logo white.png'

export default function Nav() {

    return(
        <nav>
            <div id="logo-container"><a href='#'><img src={logo} alt="logo"></img></a></div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimony">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <i class="fa-solid fa-bars"></i>
        </nav>
    )
}