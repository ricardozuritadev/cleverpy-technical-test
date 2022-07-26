import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { loadingPosts, setPosts } from './store/slices/posts';
import { loadingUsers, setUsers } from './store/slices/users';
import services from './services';

const App = () => {
  const dispatch = useAppDispatch();

  // Llamo a mis servicios para traerme posts y users
  const getSampleData = async () => {
    const postsData = await services.sampleData.getPosts();
    const usersData = await services.sampleData.getUsers();
    dispatch(loadingPosts());
    dispatch(setPosts(postsData));
    dispatch(loadingUsers());
    dispatch(setUsers(usersData));
  };

  // Traigo los usuarios y los posts cuando se renderiza el componente App
  useEffect(() => {
    getSampleData();
  }, []);

  return <Outlet />;
};

export default App;
