import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import OAuthButton from './components/auth/OAuthButton';
import PlansIndex from './components/plans/PlansIndex';
// import PiesNew from './components/pies/PiesNew';
// import PiesShow from './components/pies/PiesShow';
// import PiesEdit from './components/pies/PiesEdit';

// import 'bootstrap-css-only';
// import 'font-awesome/css/font-awesome.css';
// import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>

        <header>
          <OAuthButton provider="spotify">Login with Spotify</OAuthButton>

          <div className="container">
            <Switch>
              <Route exact path="/plans" component={PlansIndex} />
              {/* <Route path="/plans/new" component={PlansNew} />
              <Route path="/plans/:id/edit" component={PlansEdit} />
              <Route path="/plans/:id" component={PlansShow} /> */}
            </Switch>
          </div>
        </header>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// import Navbar from './components/utility/Navbar';
// import PiesIndex from './components/pies/PiesIndex';
// import PiesNew from './components/pies/PiesNew';
// import PiesShow from './components/pies/PiesShow';
// import PiesEdit from './components/pies/PiesEdit';

// class App extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <header>
//           <Navbar />
//           <div className="container">
//             <Switch>
//               <Route exact path="/" component={PiesIndex} />
//               <Route path="/pies/new" component={PiesNew} />
//               <Route path="/pies/:id/edit" component={PiesEdit} />
//               <Route path="/pies/:id" component={PiesShow} />
//             </Switch>
//
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//
//           </div>
//         </header>
//       </BrowserRouter>
//     );
//   }
// }
//
// // export default App;
// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );
