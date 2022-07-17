import { AxiosInstance } from 'axios';
import { catchAsync } from './utils';

// Utilizo una función currificada para traerme los posts de la API
const getPosts = (client: AxiosInstance) => async () => {
  return catchAsync(client.get)('/posts');
};

const sampleData = (client: AxiosInstance) => ({
  getPosts: getPosts(client),
});

export default sampleData;
