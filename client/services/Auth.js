'use strict';

import http from '../utils/http';
import config from '../config';

export default class AuthService {
  static signUp(payload) {
    return http.post(`${config.API_ENDPOINT}/auth/sign-up`, payload).then(response => response.data);
  }

  static login(payload) {
    return http.post(`${config.API_ENDPOINT}/auth/login`, payload).then(response => response.data);
  }

  static currentUser() {
    return http.get(`${config.API_ENDPOINT}/auth/current-user`).then(response => response.data);
  }

  static logout() {
    return http.post(`${config.API_ENDPOINT}/auth/logout`).then(response => response.data);
  }
}
