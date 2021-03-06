'use strict';

import axios from 'axios';
import _ from 'lodash';

const instance = axios.create({ baseURL: process.env.API_BASE_URL, withCredentials: true  });

// SessionExpirationInterceptor
instance.interceptors.response.use(null, (rejection) => {
  const errorMessage = _.get(rejection, 'response.statusText', null);
  if (errorMessage === 'Unauthorized') {
    window.location.replace(process.env.BASE_URL + '/login');
  }
  return Promise.reject(rejection.response);
});

export default instance;
