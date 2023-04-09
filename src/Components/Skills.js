import { SkillsData } from "../Data";

function Skills() {
    return (
        <section id="skills">
            <h1 className="header">Skills</h1>
            <div className="master-container">
                <div className="skills-bar-container-mob">
                    <div className="skill-icon-container">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <div className="skill-list">
                        {SkillsData[0].map(data => 
                            <div className="bar">
                                <div className="slider" style={{width: `${data.value}%`}}><span className="">{data.skill}</span></div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="skills-bar-container-mob">
                    <div className="skill-icon-container second-container">
                        <i class="fa-solid fa-pen-nib"></i>
                    </div>
                    <div className="skill-list">
                        {SkillsData[1].map(data => 
                            <div className="bar">
                                <div className="slider" style={{width: `${data.value}%`}}><span className="">{data.skill}</span></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;