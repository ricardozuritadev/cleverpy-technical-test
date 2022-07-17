import { createContext, useContext } from 'react';

type AppContextInterface = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Context: any = createContext<AppContextInterface | null>(null);

export const useGetter = () => {
  const { posts, setPosts } = useContext(Context);

  return { posts, setPosts };
};

export default Context;
