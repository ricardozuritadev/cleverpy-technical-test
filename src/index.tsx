import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { usePosts } from './hooks';
import Context from './context';

import App from './App';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Users from './pages/users';
import Posts from './pages/posts';

const Container = () => {
  const [posts, setPosts] = usePosts();

  return (
    <Context.Provider value={{ posts, setPosts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<Manage />} />
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
