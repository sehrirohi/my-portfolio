function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-decoration hero-decoration-one"></div>
      <div className="hero-decoration hero-decoration-two"></div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="eyebrow">
            <span className="eyebrow-line"></span>
            HELLO, I'M
          </p>

          <h1 className="hero-title">
            Sehrish
            <span>Rohi</span>
          </h1>

          <h2 className="hero-role">
            REACT <span>DEVELOPER</span>
          </h2>

          <p className="hero-description">
            I build modern, responsive and user-focused web experiences
            with React, JavaScript, HTML, CSS and Firebase.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
              <span>→</span>
            </a>

            <a href="#contact" className="outline-button">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            {/* <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a href="#contact" aria-label="Email">
              @
            </a> */}
          </div>
        </div>

        <div className="hero-right">
          <div className="portrait-ring">
            <div className="portrait-inner">
              <div className="portrait-placeholder">
                 <img src="/profile.jpg" alt="Sehrish Rohi" />
                <small>React Developer</small>
              </div>
            </div>
          </div>

          <div className="hero-side-text">
            <span>CODE</span>
            <span>CREATE</span>
            <span>GROW</span>
          </div>

          <div className="react-badge">
            <div className="react-symbol">⚛</div>

            <div>
              <strong>React</strong>
              <small>Building better web</small>
            </div>
          </div>

          <div className="small-star">✦</div>
          <div className="small-circle"></div>
        </div>
      </div>

      <div className="scroll-down">
        <span className="scroll-line"></span>
        Scroll to explore
      </div>
    </section>
  );
}

export default Hero;