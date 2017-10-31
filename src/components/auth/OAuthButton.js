import React from 'react';
import OAuth from '../../lib/OAuth';
import queryString from 'query-string';
import Axios from 'axios'; // terminal: yarn add axios
import Auth from '../../lib/Auth';
import { withRouter } from 'react-router-dom';

class OAuthButton extends React.Component {
  componentWillMount() {
    console.log('will mount');
    this.provider = OAuth.getProvider(this.props.provider);
    if(!this.props.location.search.match(/code/) || localStorage.getItem('provider') !== this.props.provider) return false;

    const data = queryString.parse(this.props.location.search);
    data.redirectUri = 'http://localhost:8000/';
    console.log(data);

    Axios.post(this.provider.url, data)
      .then(res => {
        console.log(res);
        Auth.setToken(res.data.token, res.data.refreshToken, res.data.user.spotifyId);
      })
      .then(() => localStorage.removeItem('provider'))
      .then(() =>
        this.props.history.replace(this.props.location.pathname))
      .then(() => this.props.history.push('/'));
  }

  setProvider = () => {
    localStorage.setItem('provider', this.props.provider);
  }

  render() {

    console.log('rendering');
    console.log(window.location.origin + '/');
    // console.log(this.props.provider, provider);

    if (Auth.isAuthenticated()) {
      return (
        <a onClick={() => {
          Auth.logout();
          this.props.history.push('/');
        }}>
          Logout
        </a>
      );
    } else {
      return (
        <ul className="navbar-nav">
          <a className="login-button"
            href={this.provider.authLink}
            onClick={this.setProvider}
          >
            Login with Spotify
          </a>
        </ul>
      );
    }

  }
}

export default withRouter(OAuthButton);
