import React from 'react';
import { Link } from 'gatsby';
import Menu from './Menu';
import Hamburger from './Hamburger';
import logo from '../images/davidspools.png';
import logoMobile from '../images/logo-mobile.svg';
import MenuMobile from './MenuMobile';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = (menuActive) => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <div id="fix">
                <h1 id="logo">Davids Pool's</h1>
                <div className="drop-container">
                  <div className="drop" />
                </div>
              </div>
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img alt="Figurit Homepage" src={logoMobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default Header;
