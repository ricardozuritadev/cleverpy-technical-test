import { useState } from 'react';
import services from '../services';

// Custom hook para setear los posts en el estado posts
export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const result = await services.sampleData.getPosts();
    result && setPosts(result);
  };

  return [posts, getPosts];
};

// Custom hook para setear los usuarios en el estado users
export const useUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const result = await services.sampleData.getUsers();
    result && setUsers(result);
  };

  return [users, getUsers];
};
