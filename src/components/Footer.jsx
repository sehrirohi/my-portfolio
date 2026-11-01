function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        SEHRISH<span>.</span>
      </div>

      <p>
        © {new Date().getFullYear()} Sehrish. All rights reserved.
      </p>

      <p className="footer-right">
        Built with <span>♥</span> using React
      </p>
    </footer>
  );
}

export default Footer;