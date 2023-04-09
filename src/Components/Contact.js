

export default function Contact() {
    
    return(
        <section>
            <h1 className="header">Contact Me</h1>
            <div className="phone-container">
                <div className="phones">
                    <div className="icon"></div>
                    <h4>(+251)-930-81-9898</h4>
                </div>
                <div className="phones">
                    <h4 id="phone-2">(+251)-930-81-9898</h4>
                </div>
                <div className="phones">
                    <div className="icon"></div>
                    <h4>ellayab804@gmail.com</h4>
                </div>
            </div>
            <div className="map">Map Location</div>
            <h3 className="header">Email Me</h3>
            <form >
                <input className="inputs txt" type="text" placeholder="Name" />
                <input className="inputs txt" type="email" placeholder="Email" />
                <textarea className="inputs txt" type="text" placeholder="Your message" />
                <input className="inputs submit" type="submit" placeholder="Submit" />
            </form>
        </section>
    )
}