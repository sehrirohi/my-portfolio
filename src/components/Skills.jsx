



function Skills() {
  const skills = [
    {
      name: "React",
      level: "Frontend Library",
      logo: "devicon-react-original",
    },
    {
      name: "JavaScript",
      level: "Programming Language",
      logo: "devicon-javascript-plain",
    },
    {
      name: "HTML5",
      level: "Web Structure",
      logo: "devicon-html5-plain",
    },
    {
      name: "CSS3",
      level: "Web Styling",
      logo: "devicon-css3-plain",
    },
    {
      name: "Firebase",
      level: "Backend & Database",
      logo: "devicon-firebase-plain",
    },
    {
      name: "GitHub",
      level: "Version Control",
      logo: "devicon-github-original",
    },
    {
      name: "VS Code",
      level: "Code Editor",
      logo: "devicon-vscode-plain",
    },
    {
      name: "Git",
      level: "Version Control",
      logo: "devicon-git-plain",
    },
  ];

  return (
    <section className="skills-section section" id="skills">
      <div className="skills-intro">
        <div>
          <p className="section-label">MY SKILLS</p>

          {/* <h2>
            Tools I
            <span> Work With</span>
          </h2> */}
        </div>

        <p>
          Technologies and tools I use to build modern,
          responsive and interactive web applications.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-logo">
              <i className={skill.logo}></i>
            </div>

            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>

            {/* <span className="skill-arrow">↗</span> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;