import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import BackButton from '../utility/BackButton';

class UserProfile extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    // Axios
    //   .get(`/api/plans/${this.props.match.params.id}`)
    //   .then(res => this.setState({ plan: res.data }))
    //   .catch(err => {
    //     if(err.response.status === 404) this.props.history.replace('/404');
    //     console.log(err);
    //   });
  }

  render() {
    return (
      <h1>User Profile</h1>
      // <div className="container" id="userprofile">
      //   <div className="row">
      //     <div className="col-4 leftColShow">
      //
      //       {/* ROUTE IMAGE */}
      //
      //       <img src={this.state.plan.image} className="img-responsive" />
      //
      //       <h3>Location: {this.state.plan.location}</h3>
      //       <p>Difficulty: {this.state.plan.difficulty}</p>
      //
      //       {/* BACK BUTTON */}
      //       <BackButton history={this.props.history} />
      //
      //       {/* SHOW PLAN */}
      //       <Link to={`/plans/${plan.id}`}><h3>Click to see: {this.state.plan.title}</h3></Link>
      //
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default UserProfile;
