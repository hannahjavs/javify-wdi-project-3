import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap-css-only';
// import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
// import OAuthButton from './components/auth/OAuthButton';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/utility/Routes';
import Navbar from './components/utility/Navbar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Navbar />
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
