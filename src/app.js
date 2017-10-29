import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap-css-only';
// import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
import OAuthButton from './components/auth/OAuthButton';
// import PlansIndex from './components/plans/PlansIndex';
// import PlansNew from './components/plans/PlansNew';
// import PlansShow from './components/plans/PlansShow';
// import PlansEdit from './components/plans/PlansEdit';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './components/utility/Routes';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/">PLANS</Link></h1>
            <h2>For the <span>health</span> freaks & music lovers...</h2>
            {/* <Navbar /> */}
            <hr />
            <OAuthButton provider="spotify" />
            <div className="container">
              {/* <Switch>
                <Route exact path="/" component={PlansIndex} />
                <Route path="/plans/new" component={PlansNew} />
                <Route path="/plans/:id/edit" component={PlansEdit} />
                <Route path="/plans/:id" component={PlansShow} />
              </Switch> */}
              <main>
                <Routes />
              </main>
            </div>
          </header>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
