import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useGetter } from './context';

const App = () => {
  const { setUsers, setPosts } = useGetter();

  // Traigo los usuarios y los posts cuando se renderiza el componente App
  // utilizando el hook useGetter()
  useEffect(() => {
    setUsers();
    setPosts();
  }, []);

  return <Outlet />;
};

export default App;
