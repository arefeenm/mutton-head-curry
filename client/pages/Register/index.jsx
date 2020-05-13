'use strict';

import React from 'react';
import UserService from '../../services/User';
import AuthService from '../../services/Auth';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    AuthService.currentUser()
      .then(user => {
        if (!user) { return window.location.href = '/'; }
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  render() {
    return (
      <div className="home">
        <h1>grabfunding</h1>
      </div>
    );
  }
}

export default Register;
