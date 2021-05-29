import { axios } from './http.config.js';

class Users {
  login = (payload) => axios.post(`/api/auth/login`, { ...payload });
  register = (payload) => axios.post(`/api/auth/register`, { ...payload });
  getProfile = () => axios.get(`/api/auth/profile`);
  updateProfile = (payload) => axios.put(`/api/auth/profile`, { ...payload });
  changePassword = (payload) =>
    axios.post(`/api/auth/change-password`, { ...payload });
}

const UserService = new Users();
export { UserService };
