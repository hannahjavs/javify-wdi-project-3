
import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import GoogleMap from '../google/GoogleMap';
import BackButton from '../utility/BackButton';


class PlansShow extends React.Component {
  state = {
    plan: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/plans/${this.props.match.params.id}`)
      .then(res => this.setState({ plan: res.data }))
      .catch(err => {
        if(err.response.status === 404) this.props.history.replace('/404');
        console.log(err);
      });
  }

  // deletePlan = () => {
  //   Axios
  //     .delete(`/api/plans/${this.props.match.params.id}`)
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log(err));
  // }

  deletePlan = () => {
    Axios
      .delete(`/api/plans/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <h1>SHOW PAGE</h1>

        <BackButton history={this.props.history} />

        <hr />
        <div className="col-md-6">
          <div className="image-tile col-md-6">
            <img src={this.state.plan.image} className="img-responsive" />
          </div>

          <h3>Title: {this.state.plan.title}</h3>
          <h4>Location: {this.state.plan.location}</h4>
          <p>Difficulty: {this.state.plan.difficulty}</p>

          <GoogleMap center={{ lat: 51.515, lng: -0.072 }} />

          {/* EDIT BUTTON */}
          <Link to={`/plans/${this.state.plan.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i><h3>Edit Plan</h3>
          </Link>
          {' '}

          {Auth.isAuthenticated() && <button className="main-button" onClick={this.deletePlan}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>}

          {/* <button className="main-button" onClick={this.deletePlan}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button> */}
        </div>
      </div>
    );
  }
}

export default PlansShow;
