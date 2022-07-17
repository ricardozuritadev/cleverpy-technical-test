import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetter } from './context';

const App = () => {
  const { setUsers, setPosts } = useGetter();

  useEffect(() => {
    setUsers();
    setPosts();
  }, []);

  return <Outlet />;
};

export default App;
