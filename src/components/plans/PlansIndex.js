import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class PlansIndex extends React.Component {
  state = {
    plans: []
  }

  componentWillMount() {
    Axios
      .get('/api/plans')
      .then(res => this.setState({ plans: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <main>
        <div className="row">
          HOME PAGE
          <div className="page-banner col-md-12">

            <Link to="/plans/new" className="main-button">
            EASY Route
            </Link>
          </div>

          {/* MAPPING OVER INDEX OF EVERYONES PLANS */}
          {this.state.plans.map(plan => {
            return(
              <div key={plan.id} className="image-tile col-md-4 col-sm-6 col-xs-12">

                {/* SHOW SPECIFIC PIE LINK */}
                <Link to={`/plans/${plan.id}`}>
                  <img src={plan.image} className="img-responsive" />
                </Link>
                <h3>Title: {plan.title}</h3>
                <p>Location: {plan.location}</p>
                <p>Difficulty: {plan.difficulty}</p>
              </div>
            );
          })}

        </div>
      </main>
    );
  }
}

export default PlansIndex;






// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';
//
// class PiesIndex extends React.Component {
//   state = {
//     pies: []
//   }
//
//   componentWillMount() {
//     Axios
//       .get('/api/pies')
//       .then(res => this.setState({ pies: res.data }))
//       .catch(err => console.log(err));
//   }
//
//   render() {
//     return (
//       <div>
//
//         <div className="row">
//           <div className="page-banner col-md-12">
//
//             {/* UNAUTHENTICATED ADD NEW PIE BUTTON LINK*/}
//             {/* <Link to="/pies/new" className="main-button">
//               <i className="fa fa-plus" aria-hidden="true"></i> ADD A PIE
//             </Link> */}
//
//             {/* AUTHENTICATED ADD NEW PIE BUTTON LINK*/}
//             {Auth.isAuthenticated() && <Link to="/pies/new" className="main-button">
//               <i className="fa fa-plus" aria-hidden="true"></i>ADD PIE
//             </Link>}
//
//           </div>
//
//           {/* Mapping Over The Whole Index Of The Pies*/}
//           {this.state.pies.map(pie => {
//             return(
//               <div key={pie.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
//
//                 {/* SHOW SPECIFIC PIE LINK */}
//                 <Link to={`/pies/${pie.id}`}>
//                   <img src={pie.image} className="img-responsive" />
//                 </Link>
//                 <h3>{pie.title}</h3>
//                 <p>{pie.tastingNotes}</p>
//                 <p>{pie.category}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }
//
// export default PiesIndex;
