import React from 'react';
// import { Link } from 'react-router-dom';
import Axios from 'axios';
import Auth from '../../lib/Auth';
// import BackButton from '../utility/BackButton';

class UserProfile extends React.Component {
  state = {
    user: {},
    playlists: []
  }

  componentWillMount() {
    Axios
      .get('/api/users/profile', {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.setState({ user: res.data }))
      // .then(res => console.log(res.data))
      .catch(err => {
        if(err.response.status === 404) this.props.history.replace('/404');
        console.log(err);
      });

  }

  componentDidMount() {
    Axios.get(`/api/spotify/playlists?token=${Auth.getRefreshToken()}`)
      .then(res =>  this.setState({ playlists: res.data.items }, () => console.log(res.data)))
      .catch(err => console.log(err));
  }

  getPlaylist(playlist) {
    // playlist is an object with all the data we need about a single playlist (including owner info)
    Axios
      .get(`/api/spotify/users/${playlist.owner.id}/playlists/${playlist.id}`)
      // res.data.items is an array of tracks from the spotify API
      // .then(res => this.setState({ tracks: res.data.items }))
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.user);
    return (
      <div className="container">
        <div className="profile-main">
          <h1><strong>{this.state.user.username}</strong> Profile Page</h1>
          <h2>Current Spotify Image:</h2> <img src={this.state.user.image} className="spotify-profile-img" />
          <h3>Spotify Followers: {this.state.user.followers}</h3>
          <p>Spotify ID: {this.state.user.spotifyId}</p>

          {/* <p>Users playlists from spotify: {this.state.user.playlist.name}</p> */}
          <div>
            {this.state.playlists && this.state.playlists.map(playlist => (
              <div className="col-md-4" key={playlist.id}>
                <p>{playlist.name}</p>
                <div className="image-tile">
                  <img src={playlist.images[0].url}
                    className="img-responsive"
                    onClick={() => this.getPlaylist(playlist)}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
