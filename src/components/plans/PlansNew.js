import React from 'react';
import Axios from 'axios';
import Auth from '../../lib/Auth';

import PlansForm from './PlansForm';

class PlansNew extends React.Component {
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
      image: '',
      postedBy: ''
    },
    errors: {}
  };

  componentWillMount() {
    console.log('Component will mount');
  }

  componentDidMount() {
    console.log('Component did mount');
  }

  handleChange = ({ target: { name, value } }) => {
    const plan = Object.assign({}, this.state.plan, { [name]: value });
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
        // errors={this.state.errors}
      />
    );
  }
}

export default PlansNew;
