import { Link } from 'react-router-dom'

function Misc() {
  return (
    <div id="content" className="content">
      <h2>Misc</h2>
      <ul>
        <li><a href="./public/resume.pdf" download="Adam-Amin-Resume.pdf">Resume</a></li>
        <li><Link to="/misc/gpg">My GPG Key</Link></li>
      </ul>
    </div>
  )
}

export default Misc
