import { useState, useEffect } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import Projects from './pages/Projects.jsx'
import Writing from './pages/Writing.jsx'
import Misc from './pages/Misc.jsx'
import GPG from './pages/misc/GPG.jsx'
import Resume from './pages/misc/Resume.jsx'

import './style/App.css'
import profile from './assets/profile.png'

// About content is shown at the root/home path
function About() {
  return (
    <div id="content" className="content">
      <h2>About</h2>
      <p>
        My name is Adam Amin. I am a Software Developer with a degree in
        Computer Engineering from the University of California, Riverside.
      </p>
      <p>
        Currently, I am working at
        <Hyperlink link="https://quantumemotion.com" text="Quantum eMotion"/>,
        a cybersecurity company focused on protection against quantum computing attacks.
        Our work involves usage of pre/post-quantum cryptography, hardened
        containers, and a VPN Gateway for secure communications.
      </p>
      <p>
        Previously, I worked as a Software Developer at
        <Hyperlink link="https://planetinnovation.com" text="Planet Innovation" />
        in Melbourne, Australia. Here I learned the fundamentals of ideal Agile software
        development practices.
      </p>
      <p>
        Some hobbies of mine outside of engineering include: gaming, Jazz guitar, and studying Japanese.
      </p>
      <p>
        Thanks for reading! If you need to reach me, feel free to email me via the mail button at the bottom of the page.
      </p>
    </div>
  )
}

/* Helper functions */

// Location component displays the city, state, and country
function Location({city, state, country}) {
    return <h3>{city}, {state}, {country}</h3>
}
// LocalTime component displays the current time in the user's local timezone
function LocalTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatted = time.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });

    return <h3 id="local-time">{formatted} PST</h3>;
}

// For external links/hyperlinks
function Hyperlink({link, text}) {
    return (
        <a href={link} className="hyperlink"
        target="_blank" rel="noreferrer">{text}</a>
    );
}
// Copyright component in the footer
function Copyright() {
  const year = new Date().getFullYear();
  return <p>© {year} Adam Amin.</p>;
}

// Linked SVG reference from public/icons.svg
function Icon({link, svg}){
    return(
        <a href={`${link}`} target="_blank">
            <svg className="icon">
            <use href={`/icons.svg#${svg}`}></use>
            </svg>
        </a>
    );
}

// HTML and routing from the index page
function App() {
  return (
    <div id="app">
      <div id="left-col">
        <div id="profile-section">
          <img id="profile" src={profile} alt="Adam Amin" />
          <h1>Adam Amin</h1>
          <h2>@adamtruth</h2>
          <Location city="Irvine" state="CA" country="USA"/>
          <LocalTime />
        </div>

        <nav id="sidebar">
          <ul>
            <NavLink to="/" end>About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/misc">Misc</NavLink>
          </ul>
        </nav>
      </div>

      {/* Routes inspects the current URL and renders the matching page component. */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/misc" element={<Misc />} />
        <Route path="/misc/gpg" element={<GPG />} />
        <Route path="/misc/resume" element={<Resume />} />
      </Routes>

      <footer id="footer">
        <div id="copyright">
          <Copyright />
        </div>
        <div id="social-icons">
          <Icon link="https://github.com/adamtruth" svg="github-icon" />
          <Icon link="https://www.linkedin.com/in/adam-amin-56a13026a/" svg="linkedin-icon" />
          <Icon link="https://youtube.com/@AdamTruth" svg="youtube-icon" />
          <Icon link="mailto:adamamin54@gmail.com" svg="mail-icon" />
        </div>
      </footer>
    </div>
  )
}

export default App
