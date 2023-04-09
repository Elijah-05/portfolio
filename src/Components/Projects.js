import { projectData } from "../Data"

export default function Projects() {
    
    return(
        <section id="projects">
            <h1 className="header">Projects</h1>
            <div className="project-grid">
                {projectData.map(data => 
                    <div className="project-container">
                        <div className="desc-container">
                            <h3>{data.name}</h3>
                            <p>{data.desc}</p>
                            <div className="technologies">
                                <div>React</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}