import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter, Link } from 'react-router-dom';
import OAuthButton from '../auth/OAuthButton';

const Navbar = () => {
  const userId = Auth.getPayload()? Auth.getPayload().userId : null;

  return(
    <nav className="navWrap">
      <div className="navLeft">
        <Link to="/" className="navLink navHome">Home</Link>
      </div>

      <div className="navRight">
        <OAuthButton provider="spotify" className="navLink" />
        <Link to={'/users/' + userId} className="navLink">Your Profile</Link>
      </div>
    </nav>

  );
};

export default withRouter(Navbar);
