function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="contact-intro">
        <p className="section-label">GET IN TOUCH</p>

        <h2>
          Let's Work
          <span> Together.</span>
        </h2>

        <p>
          Have a project in mind or want to talk about web
          development? Feel free to reach out.
        </p>

        <div className="contact-details">
          <a href="mailto:your-email@example.com">
            <span className="contact-icon">@</span>

            <div>
              <small>Email</small>
              <strong>sehrirohi@gmail.com</strong>
            </div>
          </a>

          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">GH</span>

            <div>
              <small>GitHub</small>
              <strong>GitHub Profile</strong>
            </div>
          </a> */}

          {/* <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">in</span>

            <div>
              <small>LinkedIn</small>
              <strong>LinkedIn Profile</strong>
            </div>
          </a> */}
          {/* WhatsApp Contact */}
<div className="whatsapp-contact">
  <span>WhatsApp</span>
  <a
    href="https://wa.me/923001234567"
    target="_blank"
    rel="noreferrer"
  >
    <i className="devicon-whatsapp-plain"></i>
    Message Me on WhatsApp ↗
  </a>
</div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
        </div>

        <label>
          Message
          <textarea
            name="message"
            rows="7"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </label>

        <button type="submit" className="form-button">
          Send Message
          <span>→</span>
        </button>
      </form>
    </section>
  );
}

export default Contact;