import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
// import Carousel from '../utility/Carousel';

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
    // console.log(this.state.plans);
    // {this.state.plans.map(plan => {
    return (
      <div className="container">
        <div className="row" id="plansindex">
          {/* <h1>Search For Routes</h1> */}
          <div className="page-banner col-md-12">
            {Auth.isAuthenticated() && <Link to="/plans/new" className="main-button">
              <i className="fa fa-plus" aria-hidden="true"></i>Create a walking or running route
            </Link>}
          </div>
          {/* {this.state.plans && <Carousel images={this.state.plans} />} */}

          {this.state.plans.map(plan => {
            return(
              <div key={plan.id} className="img col-md-4 col-sm-6 col-xs-12">
                <div className="hovereffect">
                  <img src={plan.image} className="img-responsive" />
                  <div className="overlay">
                    <h2>{plan.title}</h2>
                    <h2>Difficulty: {plan.difficulty}</h2>
                    <Link className="info" to={`/plans/${plan.id}`}>
                  SHOW
                    </Link>
                  </div>
                </div>

                <div className="img-inner">
                  <h1><strong>Location: {plan.location}</strong></h1>
                  <p>Posted By: {plan.createdBy.username}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlansIndex;
