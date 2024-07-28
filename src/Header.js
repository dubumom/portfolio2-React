import React, { useEffect } from 'react';
import './App.css';

function Header() {
  useEffect(() => {
    const header = document.querySelector('header');
    const headerOst = header.offsetTop;

    const handleScroll = () => {
      let scrollAmt = window.scrollY;

      if (scrollAmt > 80) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const colors = ["deepskyblue", "orange", "firebrick", "gold", "magenta", "black", "darkblue"];
    const target = document.querySelector('.nav-target');
    const links = document.querySelectorAll('header > nav ul li a');

    const handleMouseEnter = (event) => {
      const link = event.target;
      const parent = link.parentElement;

      if (!parent.classList.contains('active')) {
        links.forEach(l => l.parentElement.classList.remove('active'));
        parent.classList.add('active');

        const width = link.offsetWidth;
        const height = link.offsetHeight;
        const rect = link.getBoundingClientRect();
        const color = colors[Math.floor(Math.random() * colors.length)];

        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        target.style.left = `${rect.left}px`;
        target.style.top = `${rect.top}px`;
        target.style.borderColor = color;
        target.style.transform = 'none';
      }
    };

    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  const handleContactClick = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.style.left = '0';
    }
  };

  return (
    <header>
      <h1 className="hidden">우예지의 포트폴리오 입니다.</h1>
      <nav className="container">
        <ul>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#project">project</a></li>
          <li><a href="#work">work</a></li>
          <li><a href="#notice">notice</a></li>
          <li><a href="#contact" onClick={handleContactClick}>contact us</a></li>
        </ul>
      </nav>
      <span className="nav-target"></span>
    </header>
  );
}

export default Header;