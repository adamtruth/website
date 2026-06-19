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
        Computer Engineering. If you are curious why "truth" in my pseudoname:
        my last name "Amin" in Arabic means honest or trustworthy. Truth is close enough.
      </p>
      <p>
        Previously, I worked as a Software Developer at
        <Hyperlink link="https://planetinnovation.com" text="Planet Innovation" />
        in Melbourne, Australia.
      </p>
      <p>
        Currently searching for my next job experience. My goals are to continue to learn and grow
        as an Embedded Software Engineer, but I am also curious by nature and am open to whatever
        challenges that come my way.
      </p>
      <p>
        Some hobbies of mine outside of engineering include: gaming, jazz music, and studying japanese.
        I hope to soon be starting to create a game in a shiny/new low-level language like Zig.
        Hopefully that will be on the Projects page soon so keep a look out for it!
      </p>
      <p>
        If you need to reach me, feel free to email me at the bottom of the page.
      </p>
    </div>
  )
}

function Hyperlink({link, text}) {
    return (
        <a href={link} className="hyperlink"
        target="_blank" rel="noreferrer">{text}</a>
    );
}

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
