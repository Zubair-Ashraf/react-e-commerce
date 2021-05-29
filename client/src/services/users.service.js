import { axios } from './http.config.js';

class Users {
  login = (payload) => axios.post(`/api/auth/login`, { ...payload });
  register = (payload) => axios.post(`/api/auth/register`, { ...payload });
}

const UserService = new Users();
export { UserService };
