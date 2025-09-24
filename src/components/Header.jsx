import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('theme-image');
    try { localStorage.setItem('theme-image', '1'); } catch {}
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < 100); // Show header when within 100px of top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className={`header ${isVisible ? 'header-visible' : 'header-hidden'}`}>
      <nav className="navbar">
        <Link to="/" className="logo">mooofin</Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/#about">About</Link></li>
          <li><a href="#contact" onClick={scrollToContact}>Contact</a></li>
          <li><Link to="/blog">Blog</Link></li>
          <li>
            <a href="https://open.spotify.com/user/314ikabu7m4lwg6rljojtmhf74uq" target="_blank" rel="noopener noreferrer" className="theme-toggle" aria-label="Spotify">
              ♫
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
