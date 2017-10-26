import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class PlansIndex extends React.Component {
  state = {
    plans: []
  }

  componentWillMount() {
    Axios
      .get('/api/plans')
      .then(res => this.setState({ plans: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (


      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            <Link to="/plans/new" className="main-button">
            Create An Audio Plan
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PlansIndex;
