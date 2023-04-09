import netlify from '../images/netlify.svg'

export default function Footer() {

    return(
        <footer>
            <div className="footer-container">
                <div className="social-icon-container">
                    <a href='https://github.com/Elijah-05' target=''><i class="fa-brands fa-github fa-beat"></i></a>
                    <a href='https://www.linkedin.com/in/elyas-abebe/' target=''><i class="fa-brands fa-linkedin fa-beat"></i></a>
                    <a href='https://www.behance.net/Elyas_Abebe' target=''><i class="fa-brands fa-square-behance fa-beat"></i></a>
                    <a href='' target=''><img className='netlify fa-beat' src={netlify} alt='netlify'></img></a>
                </div>
                <p>Developed by <strong id="developer">Elijah Abebe</strong></p>
            </div>
        </footer>
    )
}