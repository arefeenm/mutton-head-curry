'use strict';

import React from 'react';
import UserService from '../../services/User';
// import './_index.scss'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    UserService.list().then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="home">
        <h1>grabfunding</h1>
      </div>
    );
  }
}

export default Home;
