import { createContext, useContext } from 'react';
import { ContextTypes } from './types';

const Context: any = createContext<ContextTypes | null>(null);

export const useGetter = () => {
  const { users, setUsers, posts, setPosts } = useContext(Context);

  return { users, setUsers, posts, setPosts };
};

export default Context;
