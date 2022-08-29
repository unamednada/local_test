import axios from 'axios';

const { REACT_APP_HOSTNAME } = process.env;

const baseURL = `${REACT_APP_HOSTNAME}`;

const api = axios.create({ baseURL, headers: { 'Access-Control-Allow-Origin': '*' } });

export const getData = async (endpoint) => api.get(endpoint);

export default api;
