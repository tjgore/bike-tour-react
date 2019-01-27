import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = (props) =>{

  const navi = function() {
   document.getElementById("navbarSupportedContent").classList.remove("show");
  }

  return(
    <section>
      <nav className="navbar navbar-expand-lg navbar-transparent navbar-love nav-light">
        <div className="container">
          <NavLink to="/" className="navbar-brand font-weight-bold open-sans txt-30">Bike Tour </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse mobile-collapse" id="navbarSupportedContent">
            <div className="mobile-menu-container text-center">
              <a data-toggle="collapse" data-target="#navbarSupportedContent" className="menu-closebtn pointer text-white pt-2 pr-4 txt-40">
              &times;
            </a>
              <ul className="navbar-nav mobile-nav ml-0 m-auto m-lg-0 ml-lg-auto w-50 open-sans txt-16">
                <li className="nav-item">
               
                  <NavLink to="/" onClick={navi} exact className="nav-link" activeClassName={"text-love"}>HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/photos" exact className="nav-link" onClick={navi} activeClassName={"text-love"}>PHOTOS</NavLink>
                </li>
                <li className="nav-item">
                 <HashLink to="/#map" className="nav-link" onClick={navi}>MAP</HashLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/riders" exact className="nav-link" onClick={navi} activeClassName={"text-love"}>RIDERS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contest" exact className="nav-link" onClick={navi} activeClassName={"text-love"}>CONTEST</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );

}

export default Header;