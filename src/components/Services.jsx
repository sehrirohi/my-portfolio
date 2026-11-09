function Services() {
  const services = [
    {
      number: "01",
      title: "React Development",
      description:
        "Building interactive and responsive web applications with React.",
      symbol: "◈",
    },
    {
      number: "02",
      title: "UI Development",
      description:
        "Creating clean interfaces with modern layouts and thoughtful details.",
      symbol: "◇",
    },
    {
      number: "03",
      title: "Responsive Design",
      description:
        "Making websites work beautifully on phones, tablets and desktops.",
      symbol: "□",
    },
    {
      number: "04",
      title: "Firebase Integration",
      description:
        "Connecting applications with authentication and cloud databases.",
      symbol: "◆",
    },
  ];

  return (
    <section className="services-section section">
      <div className="services-heading">
        <p className="section-label">WHAT I DO</p>

        <h2>
          Building With
          <span> Purpose</span>
        </h2>

        <p>
          I combine development and design to create websites that
          are functional, responsive and enjoyable to use.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-top">
              <span className="service-number">
                {service.number}
              </span>

              <span className="service-symbol">
                {service.symbol}
              </span>
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <span className="service-arrow"></span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;