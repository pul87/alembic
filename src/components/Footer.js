import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo_proloco_clean.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Logo Proloco Erli"
            style={{ width: '16em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Chi siamo
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="http://armaveirana.it" target="__blank">
                        Arma Veirana
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Notizie
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/sentieri">
                        Sentieri
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="navbar-item" to="/contact">
                        Contatti
                      </Link>
                    </li> */}
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/prolocovaldinevaerli">
                <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com/prolocoerli">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
