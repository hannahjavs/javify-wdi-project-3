import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import PlansForm from './PlansForm';

class PlansEdit extends React.Component {
  state = {
    plan: {
      title: '',
      location: '',
      date: '',
      playlist: '',
      genre: '',
      difficulty: '',
      image: '',
      route: {}
    },
    errors: {},
    playlists: []
  };

  componentDidMount() {
    Axios
      .get(`/api/plans/${this.props.match.params.id}`)
      .then(res => this.setState({ plan: res.data }))
      .catch(err => console.log(err));

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
    this.setState({ plan });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    Axios
      .put(`/api/plans/${this.props.match.params.id}`, this.state.plan, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(res => this.props.history.push(`/plans/${res.data.id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    console.log(this.state);
    return (
      <PlansForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        plan={this.state.plan}
        errors={this.state.errors}
        playlists={this.state.playlists}
        getPlaylist={this.getPlaylist}
      />
    );
  }
}

export default PlansEdit;
