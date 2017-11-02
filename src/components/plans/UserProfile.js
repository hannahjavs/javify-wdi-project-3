import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="row">
          <div className="col-sm-4">
            <hr />
            <h1 className="profileName"><strong>{this.state.user.username}</strong></h1>
            <img src={this.state.user.image} className="spotify-profile-img" />
            <h3 className="profileText">Spotify Followers: {this.state.user.followers}</h3>
            <p className="profileText">Spotify ID: {this.state.user.spotifyId}</p>
          </div>

          <div className="col-sm-8">
            <hr />
            <p><strong>Plans you have posted:</strong></p>
            {this.state.user.plans && this.state.user.plans.map(plan => (
              <Link key={plan.id} className="info" to={`/plans/${plan.id}`}><div>{plan.title}</div></Link>
            )
            )}
          </div>

          <hr />
          <div className="row">
            <hr />
            <h4 className="listenTo">You generally listen to the following artists and albums on spotify</h4>
            {this.state.playlists && this.state.playlists.map(playlist => (
              <div key={playlist.id} className="col-md-4 albumsWrap">
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
