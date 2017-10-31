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
    console.log(this.state.plans);
    return (
      <div className="row">
        <div className="page-banner col-md-12">
          {Auth.isAuthenticated() && <Link to="/plans/new" className="main-button">
            <i className="fa fa-plus" aria-hidden="true"></i>EASY
          </Link>}
        </div>

        {/* {this.state.plans && <Carousel images={this.state.plans} />} */}

        {this.state.plans.map(plan => {
          return(
            <div key={plan.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <Link to={`/plans/${plan.id}`}>
                <img src={plan.image} className="img-responsive" />
              </Link>
              <p>Title: {plan.title}</p>
              <p>Location: {plan.location}</p>
              <p>Difficulty: {plan.difficulty}</p>
              <p>Posted By: {plan.createdBy.username}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default PlansIndex;
