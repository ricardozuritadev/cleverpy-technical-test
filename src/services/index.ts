import axios, { AxiosInstance } from 'axios';
import sampleData from './sampleData';

// Creo una instancia de la URL base de la API jsonplaceholder
const JSONplaceholderApi: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Aquí se pueden crear más instancias para llamar a diferentes APIs
// por ejemplo la API de autenticación de usuarios

const services = {
  sampleData: sampleData(JSONplaceholderApi),
};

export default services;
