import { testimonialData } from "../Data"

export default function Testimony() {
    return(
        <section>
            <h1 className="header">Testimonials</h1>
            {testimonialData.map(data => 
                <div className="testimonial-container">
                    <div className="testimonial-avatar-container"></div>
                    <h4>{data.name}</h4>
                    <p className="testimony">{data.message}</p>
                    <p>{data.profession}</p>
                </div>    
            )}
        </section>
    )
}