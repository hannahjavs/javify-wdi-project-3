import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import GoogleMap from '../google/GoogleMap';
import BackButton from '../utility/BackButton';

class PlansShow extends React.Component {
  state = {
    plan: {},
    playlist: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/plans/${this.props.match.params.id}`)
      .then(res => this.setState({ plan: res.data }, () => {
        this.getPlaylist(this.state.plan.playlist);
      }))
      .catch(err => {
        if(err.response.status === 404) this.props.history.replace('/404');
      });
  }

  deletePlan = () => {
    Axios
      .delete(`/api/plans/${this.props.match.params.id}`, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  getPlaylist = (playlistId) => {
    Axios.get(`/api/spotify/playlists/${playlistId}?token=${Auth.getRefreshToken()}&spotifyId=${Auth.getSpotifyId()}`)
      .then(res => {
        this.setState({ playlist: res.data });
      });
  }

  render() {
    console.log(this.state.playlist);
    const {title, location, image, difficulty, route, markers, id} = this.state.plan;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4 leftColShow">

            {/* ROUTE IMAGE */}
            <img src={image} className="img-responsive" />
            <h2>{title}</h2>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Difficulty:</strong> {difficulty}</p>
            <p><strong>Spotify Playlist Name:</strong> {this.state.playlist.name}</p>

            {/* BACK BUTTON */}
            <BackButton history={this.props.history} />

            {/* EDIT BUTTON */}
            <Link to={`/plans/${id}/edit`} className="edit-button">
              <i className="fa fa-pencil" aria-hidden="true">Edit</i></Link>

            {/* DELETE BUTTON */}
            {Auth.isAuthenticated() && <button className="delete-button" onClick={this.deletePlan}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button>}

          </div>

          {/* GOOGLE MAP WITH CURRENT ROUTE SHOWING */}
          <div className="col-4 offset-1 rightColShow">
            {route && <GoogleMap route={route} markers={markers} center={{ lat: markers[0].lat, lng: markers[1].lng }} geolocate={false}/>}
          </div>

          {
            this.state.playlist.name &&
              <div>
                <h3>{ this.state.playlist.name }</h3>
              </div>
          }

        </div>
      </div>
    );
  }
}

export default PlansShow;
