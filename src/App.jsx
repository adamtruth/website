import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <section id="title">
        <h1>Adam Amin</h1>
      </section>

      <section id="sidebar">
      </section>


      <section id="spacer"></section>

      <section id="footer">
        <div id="social">
          <ul>
             <a>© 2026 Adam Amin.</a>
              <a href="https://github.com/adamtruth" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
              </a>
              <a href="https://linkedin.com/adamtruth" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
              </a>
              <a href="mailto://adamamin54@gmail.com" target="_blank">
                <svg className="button-icon">
                  <use href="/icons.svg#mail-icon"></use>
                </svg>
              </a>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
