import React from "react"
import { Link } from "gatsby"
import myLogo from "./logo.png"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>What are NFTs</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>How to buy NFTs</Link>
              </li>
              {/* <li className="nav-elements" role="menuitem">
                <Link to={`/elements`}>Contact</Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <div className="site-head-logo">
              <img src={myLogo} width="1500" height="1500" />
            </div>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.twitter.com/heartnfts"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://opensea.io/collection/heartnfts"
                title="OpenSea"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenSea
              </a>
              <a
                href="https://theheartproject.medium.com"
                title="Medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
          <h2>This is a test</h2>
        </div>
      </main>

      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Made with love
      </footer>
    </div>
  )
}

export default Layout
