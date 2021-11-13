import axios from 'axios';

const backend = axios.create({
  baseURL: '/api/',
  timeout: 1000,
});

export const helloWorld = async () => {
  const result = await backend.get('helloworld/hi');
  return result.data;
};