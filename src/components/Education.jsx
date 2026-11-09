function Education() {
  return (
    <section className="education-section section">
      <div className="education-left">
        <p className="section-label">EDUCATION</p>

        <h3>
          My
          <span> Background</span>
        </h3>

        <p>
          My academic background has helped me develop strong
          analytical thinking and problem-solving skills.
        </p>
      </div>

      <div className="education-card">
        <div className="education-icon">✦</div>

        <div className="education-content">
          <span>2021 — 2025</span>

          <h3>BS Mathematics</h3>

          <p>
            Bachelor's Degree in Mathematics
          </p>
           <p className="education-cgpa">
            <strong>CGPA:</strong> 3.72 / 4.00
          </p>

          <p className="education-description">
            A strong foundation in logical thinking, analytical
            reasoning and problem solving that I bring into
            software development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;