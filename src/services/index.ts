import axios, { AxiosInstance } from 'axios';
import sampleData from './sampleData';

// Creo una instancia de la URL base de la API jsonplaceholder
const JSONplaceholderApi: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// const authApi: AxiosInstance = axios.create({
//   baseURL: 'https://localhost:5000',
//   withCredentials: true,
// });

const services = {
  sampleData: sampleData(JSONplaceholderApi),
};

export default services;
