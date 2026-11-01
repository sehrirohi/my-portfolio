function About() {
  return (
    <section className="about-section section" id="about">
      <div className="section-heading">
        <p className="section-label">ABOUT ME</p>
        <h2>
          Turning Ideas Into
          <span> Beautiful Websites</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-intro">
          <div className="about-number">01</div>

          <h3>
            I create digital experiences that are
            <span> simple, modern and useful.</span>
          </h3>

          <p>
            I'm Sehrish, a React Developer passionate about creating
            clean and responsive websites. I enjoy taking an idea and
            transforming it into a polished user experience.
          </p>
        </div>

        <div className="about-content">
          <p>
            My development journey started with HTML and CSS and grew
            into JavaScript, React and Firebase. I focus on writing
            understandable code while creating interfaces that look
            professional across desktop, tablet and mobile devices.
          </p>

          <p>
            I enjoy learning new technologies, solving problems and
            continuously improving the websites I build.
          </p>

          <a href="#contact" className="text-button">
            More About Me <span>→</span>
          </a>
        </div>
      </div>

      <div className="stats-row">
        <div className="stat-item">
          <strong>05+</strong>
          <span>Projects Built</span>
        </div>

        <div className="stat-item">
          <strong>06+</strong>
          <span>Technologies</span>
        </div>

        <div className="stat-item">
          <strong>100%</strong>
          <span>Passion</span>
        </div>

        <div className="stat-item">
          <strong>01</strong>
          <span>Developer</span>
        </div>
      </div>
    </section>
  );
}

export default About;