import React from 'react';
import Auth from '../../lib/Auth';
import { withRouter, Link } from 'react-router-dom';
import OAuthButton from '../auth/OAuthButton';
import {Animated} from 'react-animated-css';

const Navbar = () => {
  const userId = Auth.getPayload()? Auth.getPayload().userId : null;

  return(
    <nav className="navWrap">
      <div className="navLeft">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
          <Link to="/" className="navLink navHome"><img src="http://www.iconarchive.com/download/i90365/icons8/windows-8/Computer-Hardware-Shutdown.ico" className="headphone-icon" />Home</Link>
        </Animated>
      </div>

      <div className="navCenter">
        <img src="http://www.freeiconspng.com/uploads/black-spotify-icon-23.jpg" className="spotify-icon" />
        <OAuthButton provider="spotify" className="navLink" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Volume_up_font_awesome.svg/512px-Volume_up_font_awesome.svg.png" className="sound-icon" />
      </div>

      <div className="navRight">
        <Link to={'/users/' + userId} className="navLink"><img src="http://diysolarpanelsv.com/images/person-wearing-headphones-clipart-44.jpg" className="profile-icon" />Profile</Link>
      </div>
    </nav>

  );
};

export default withRouter(Navbar);
