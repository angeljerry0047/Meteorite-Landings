import axios from 'axios';

const baseURL = 'https://data.nasa.gov';
const Service = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
export const getData = () => Service.get('/resource/y77d-th95.json');

export default Service;
