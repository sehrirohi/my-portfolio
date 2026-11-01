import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo" onClick={closeMenu}>
        SEHRISH TALIA<span></span>
      </a>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a href="#contact" className="navbar-button">
        Let's Talk
        <span>↗</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
}

export default Navbar;