import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';

import OAuthButton from './components/auth/OAuthButton';

class App extends React.Component {

  render() {
    return (
      <Router>

        <OAuthButton provider="spotify">Login with Spotify</OAuthButton>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
