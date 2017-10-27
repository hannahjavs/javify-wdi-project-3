import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import PlansForm from './PlansForm';

class PlansEdit extends React.Component {
  state = {
    plan: {
      title: '',
      location: '',
      start: Number,
      end: Number,
      date: '',
      playlist: '',
      genre: '',
      difficulty: '',
      image: ''
    },
    errors: {}
  };

  componentDidMount() {
    Axios
      .get(`/api/plans/${this.props.match.params.id}`)
      .then(res => this.setState({ plan: res.data }))
      .catch(err => console.log(err));
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
    return (
      <PlansForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        plan={this.state.plan}
        errors={this.state.errors}
      />
    );
  }
}

export default PlansEdit;
