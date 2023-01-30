import axios from 'axios';

const port = process.env.LOCAL_PORT || 5000;

export const testApi = axios.create({
  headers: {
    Authorization: 'Bearer',
  },
  baseURL: `http://localhost:${port}`,
});
