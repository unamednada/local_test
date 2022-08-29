import axios from 'axios';

const { REACT_APP_HOSTNAME } = process.env;

const baseURL = `${REACT_APP_HOSTNAME}`;

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

const api = axios.create({ baseURL, headers });

export const getData = async (endpoint) => api.get(endpoint);

export default api;
