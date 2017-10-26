import React from 'react';
import OAuth from '../../lib/OAuth';
import queryString from 'query-string';
import Axios from 'axios'; // terminal: yarn add axios
import Auth from '../../lib/Auth';
import { withRouter } from 'react-router-dom';

class OAuthButton extends React.Component {
  componentWillMount() {
    this.provider = OAuth.getProvider(this.props.provider);
    if(!this.props.location.search.match(/code/) || localStorage.getItem('provider') !== this.props.provider) return false;

    const data = queryString.parse(this.props.location.search);
    data.redirectUri = 'http://localhost:8000/';
    console.log(data);

    Axios.post(this.provider.url, data)
      .then(res => Auth.setToken(res.data.token, res.data.refreshToken))
      .then(() => localStorage.removeItem('provider'))
      .then(() =>
        this.props.history.replace(this.props.location.pathname))
      .then(() => this.props.history.push('/plans'));
  }

  setProvider = () => {
    localStorage.setItem('provider', this.props.provider);
  }

  render() {
    console.log(window.location.origin + '/');
    // console.log(this.props.provider, provider);
    if (Auth.isAuthenticated()) {
      return (
        <button onClick={() => {
          Auth.logout();
          this.props.history.push('/');
        }}>
          Logout
        </button>
      );
    } else {
      return (
        <a className="btn btn-primary"
          href={this.provider.authLink}
          onClick={this.setProvider}
        >
          Login with Spotify
        </a>
      );
    }
  }
}

export default withRouter(OAuthButton);
