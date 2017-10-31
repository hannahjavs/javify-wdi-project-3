import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter } from 'react-router-dom';
import OAuthButton from '../auth/OAuthButton';

const Navbar = ({ history }) => {
  function logout (e) {
    e.preventDefault();

    Auth.logout();
    history.push('/plans');
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">

          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>

          <li className="nav-item active">
            <OAuthButton provider="spotify" />
          </li>




          <li className="nav-item">
            <a className="nav-link" href="#">User Page</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Easy</a>
              <a className="dropdown-item" href="#">Medium</a>
              <a className="dropdown-item" href="#">Hard</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
