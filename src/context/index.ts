import { createContext, useContext } from 'react';
import { ContextTypes } from './types';

const Context: any = createContext(null);

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
