

export default function Contact() {
    
    return(
        <section id="contact">
            <h1 className="header">Contact me</h1>
            <div className="contact-container">
                <div className="phone-container">
                    <div className="phones">
                        <i class="fa-solid fa-square-phone"></i>
                        <h4>(+251)-932-94-5417</h4>
                    </div>
                    <div className="phones">
                        <h4 id="phone-2">(+251)-930-81-9898</h4>
                    </div>
                    <div className="phones">
                        <i class="fa-solid fa-square-envelope"></i>
                        <h4>ellayab804@gmail.com</h4>
                    </div>
                    <div className="map" style={{}}><div id="embed-map-canvas" style={{height:'100%', width: '100%', maxWidth: '100%'}}><iframe style={{height: '100%', width: '100%', border:0}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Meskel+Flower,+Addis+Ababa,+Ethiopia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" title="map"></iframe></div>
                    </div>
                </div>
                <div id="email-me">
                    <h2>Email Me</h2>
                    <form action="">
                        <input className="inputs txt" type="text" placeholder="Name" />
                        <input className="inputs txt" type="email" placeholder="Email" />
                        <textarea className="inputs txt" type="text" placeholder="Your message" />
                        <input className="inputs submit" type="submit" placeholder="Submit" />
                    </form>
                </div>
            </div>
        </section>
    )
}