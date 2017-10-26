import React from 'react';
import OAuth from '../../lib/OAuth';
import queryString from 'query-string';
import Axios from 'axios'; // terminal: yarn add axios
import Auth from '../../lib/Auth';
import { withRouter } from 'react-router-dom'; // this is used at the bottom of the page

class OAuthButton extends React.Component {
  componentWillMount() {
    // const provider = OAuth.getProvider(this.props.provider);
    this.provider = OAuth.getProvider(this.props.provider);

    // If theres no code in the address bar, stop here...

    // if locations search doesnt match code then return false
    // AND the provider in localStorage doesnt match this button
    // stop here...
    if(!this.props.location.search.match(/code/) || localStorage.getItem('provider') !== this.props.provider) return false;
    // get the querystring ouf ot he addrrss bar, as an object
    // And it should return something like:
    // {code:'3d845e51b36803346543'}
    const data = queryString.parse(this.props.location.search);

    // solve the problem with Facebook needing a redirect Uri
    data.redirectUri = window.location.origin + window.location.pathname;
    // console.log(data);
    // send the code to the API
    Axios.post(this.provider.url, data)
      .then(res => Auth.setToken(res.data.token))
      .then(() => localStorage.removeItem('provider'))
      .then(() =>
        this.props.history.replace(this.props.location.pathname))
      .then(() => this.props.history.push('/'));
  }

  setProvider = () => {
    localStorage.setItem('provider', this.props.provider);
  }

  render() {
    // console.log(this.props.provider, provider);
    return (
      <a className="btn btn-primary"
        href={this.provider.authLink}
        onClick={this.setProvider}
      >
        {/* if the user clicks on the github button we will store that they have in local storage and vice versa for facebook */}
        {this.props.children}
      </a>
    );
  }
}

export default withRouter(OAuthButton);
// export default OAuthButton;
