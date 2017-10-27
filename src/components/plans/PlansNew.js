import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import Promise from 'bluebird';

import PlansForm from './PlansForm';

class PlansNew extends React.Component {
  state = {
    plan: {
      title: '',
      location: '',
      start: 0,
      end: 0,
      date: '',
      playlist: '',
      genre: '',
      difficulty: '',
      image: ''
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

  handleSubmit = (e) => {
    e.preventDefault();

    //   Axios
    //     .post('/api/plans', this.state.plan)
    //     .then(() => this.props.history.push('/'))
    //     .catch(err => this.setState({ errors: err.response.data.errors }));
    // }

    Axios
      .post('/api/plans', this.state.plan, {
        headers: { 'Authorization': 'Bearer ' + Auth.getToken() }
      })
      .then(() => this.props.history.push('/'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <PlansForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        plan={this.state.plan}
        playlists={this.state.playlists}
        getPlaylist={this.getPlaylist}
      />
    );
  }
}

export default PlansNew;
