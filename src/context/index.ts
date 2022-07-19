import { createContext, useContext } from 'react';
import { ContextTypes } from './types';

// Creo un contexto que inicia en null
const Context: any = createContext(null);

// Custom hook que me servirá para traerme la información donde la necesite
export const useGetter = () => {
  const {
    users,
    setUsers,
    posts,
    setPosts,
    search,
    setSearch,
    admin,
    setAdmin,
  } = useContext(Context);

  return {
    users,
    setUsers,
    posts,
    setPosts,
    search,
    setSearch,
    admin,
    setAdmin,
  };
};

export default Context;
