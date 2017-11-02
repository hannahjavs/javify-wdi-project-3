import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import PlansForm from './PlansForm';

class PlansNew extends React.Component {
  state = {
    plan: {
      title: '',
      location: '',
      date: '',
      playlist: '',
      genre: '',
      difficulty: '',
      image: '',
      route: {},
      markers: {}
    },
    errors: {},
    playlists: []
  };

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    Axios.get(`/api/spotify/playlists?token=${Auth.getRefreshToken()}`)
      .then(res =>  this.setState({ playlists: res.data.items }))
      .catch(err => console.log(err));
  }

  getPlaylist = (playlistId) => {
    Axios.get(`/api/spotify/playlists/${playlistId}?token=${Auth.getRefreshToken()}&spotifyId=${Auth.getSpotifyId()}`)
      .then(res => {
        this.setState(prevState => {
          const idx = prevState.playlists.findIndex(playlist => playlist.id === playlistId);
          prevState.playlists[idx] = res.data;
          return { playlists: prevState.playlists };
        }, () => console.log(this.state.playlists));
      });
  }

  handleChange = ({ target: { name, value } }) => {
    const plan = Object.assign({}, this.state.plan, { [name]: value });
    console.log(plan);
    this.setState({ plan });
  }

  updateRoute = (route) => {
    this.setState(prevState => {
      const plan = { ...prevState.plan, route };

      return { plan };
    });
  }

  updateMarkers = (markers) => {
    this.setState(prevState => {
      const plan = { ...prevState.plan, markers };

      return { plan };
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .post('/api/plans', this.state.plan, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <div className="container">
        <PlansForm
          history={this.props.history}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          plan={this.state.plan}
          playlists={this.state.playlists}
          getPlaylist={this.getPlaylist}
          errors={this.state.errors}
          updateRoute={this.updateRoute}
          updateMarkers={this.updateMarkers}
        />

        {/* Use geolocation to center the map where the user is so they can plot a route that they have recently done to where they are */}
        {/* <GoogleMap updateRoute={this.updateRoute} updateMarkers={this.updateMarkers} geolocate={true} /> */}
      </div>
    );
  }
}

export default PlansNew;
