import { Link } from 'react-router-dom'

function Misc() {
  return (
    <div id="content" className="content">
      <h2>Misc</h2>
      <ul>
        <li><Link to="/misc/resume">Resume</Link></li>
        <li><Link to="/misc/gpg">My GPG Key</Link></li>
      </ul>
    </div>
  )
}

export default Misc
