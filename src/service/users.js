import axios from "axios";

const API_URL = `https://api.github.com/users`;

const service = {
  getUsers: (username) => axios(API_URL + `/${username}`).then(({ data }) => data),
  getUserRepoDetails: (username) => axios(API_URL + `/${username}` + '/repos').then(({ data }) => data),
};

export default service;