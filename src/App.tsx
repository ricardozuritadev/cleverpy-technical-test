import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetter } from './context';

const App = () => {
  const { setPosts } = useGetter();

  useEffect(() => {
    setPosts();
  }, []);

  return <Outlet />;
};

export default App;
