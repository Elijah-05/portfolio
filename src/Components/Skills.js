import { SkillsData } from "../Data";

function Skills() {
    return (
        <section>
            <h1 className="header">Skills</h1>
            <div className="skills-bar-container">
                {SkillsData.map(data => 
                    <div className="bar">
                        <div className="slider" style={{width: `${data.value}%`}}><span className="">{data.skill}</span></div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Skills;