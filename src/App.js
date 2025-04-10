import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Components/home';

import { Armani } from './Components/armani';
import { Sisburma } from './Components/sisburma';
import { Floweruae } from './Components/floweruae';
import { Gucci } from './Components/gucci';
import { Petshop } from './Components/petshop';
import { Zaycho } from './Components/zaycho';
import { Flowerbx } from './Components/flowerBX';
import { Art } from './Components/art';

function App() {
  const [scrolled, setScrolled] = useState(false); // Track scroll state
  const [gearPosition, setGearPosition] = useState(0);
  const [gearRotation, setGearRotation] = useState(0);
  const navRefs = useRef([]);
  const location = useLocation();

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100 to any height you prefer
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Nav Click (Move & Rotate Gear)
  const handleNavClick = (index) => {
    const selectedNav = navRefs.current[index];
    if (selectedNav) {
      setGearPosition(selectedNav.offsetLeft);
      setGearRotation((prevRotation) => prevRotation + 360);
    }
  };

  return (
    <div className="App">
      <header className={`App-Header ${scrolled ? "scrolled" : ""}`}>
        <h6>Sitt Aung</h6>
        <nav>
          <Link to="/">Home</Link>
          {location.pathname === "/" &&
            ["About", "Projects", "Skills", "Resume", "ContactMe"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                ref={(el) => (navRefs.current[index] = el)}
                onClick={() => handleNavClick(index)}
              >
                {item}
              </a>
            ))}
          {/* Gear Image */}
          {location.pathname === "/" && (
            <img
              className="nav-gear"
              src="/images/nav-gear.svg"
              alt="Gear Icon"
              style={{
                transform: `translateX(${gearPosition}px) rotate(${gearRotation}deg)`,
              }}
            />
          )}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Armani" element={<Armani />} />
        <Route path="Sisburma" element={<Sisburma />} />
        <Route path="Floweruae" element={<Floweruae />} />
        <Route path="Gucci" element={<Gucci />} />
        <Route path="Petshop" element={<Petshop />} />
        <Route path="Zaycho" element={<Zaycho />} />
        <Route path="Flowerbx" element={<Flowerbx />} />
        <Route path="Art" element={<Art />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
