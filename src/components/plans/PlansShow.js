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
        console.log(err);
        if(err.response.status === 404) this.props.history.replace('/404');
      });
  }

  deletePlan = () => {
    Axios
      .delete(`/api/plans/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/plans'))
      .catch(err => console.log(err));
  }

  render() {
    const {title, location, image, difficulty, route, markers, id} = this.state.plan;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 leftColShow">

            {/* ROUTE IMAGE */}
            <img src={image} className="img-responsive" />
            <h3>{title}</h3>
            <h3>Location: {location}</h3>
            <p>Difficulty: {difficulty}</p>

            {/* BACK BUTTON */}
            <BackButton history={this.props.history} />

            {/* EDIT BUTTON */}
            <Link to={`/plans/${id}/edit`} className="standard-button">
              <i className="fa fa-pencil" aria-hidden="true"></i><p>Edit Plan</p>
            </Link>

            {/* DELETE BUTTON */}
            {Auth.isAuthenticated() && <button className="main-button" onClick={this.deletePlan}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button>}
          </div>

          {route && <GoogleMap route={route} markers={markers} />}

        </div>
      </div>
    );
  }
}

export default PlansShow;
