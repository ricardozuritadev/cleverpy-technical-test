import { AxiosInstance } from 'axios';
import { catchAsync } from './utils';

// Utilizo una función currificada para traerme los posts de la API
const getPosts = (client: AxiosInstance) => async () => {
  return catchAsync(client.get)('/posts');
};

// Utilizo una función currificada para traerme los usuarios de la API
const getUsers = (client: AxiosInstance) => async () => {
  return catchAsync(client.get)('/users');
};

// Exporto la función sampleData para ejecutarla donde la necesite
const sampleData = (client: AxiosInstance) => ({
  getPosts: getPosts(client),
  getUsers: getUsers(client),
});

export default sampleData;
