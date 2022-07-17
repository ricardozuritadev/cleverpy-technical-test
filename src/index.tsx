import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './context';
import { useUsers, usePosts } from './hooks';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Users from './pages/all-users';
import Posts from './pages/all-posts';
import UserPosts from './pages/_user-posts';

const Container = () => {
  const [users, setUsers] = useUsers();
  const [posts, setPosts] = usePosts();

  return (
    <Context.Provider value={{ users, setUsers, posts, setPosts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="manage" element={<Manage />}>
                <Route path=":idUser" element={<UserPosts />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="posts" element={<Posts />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
