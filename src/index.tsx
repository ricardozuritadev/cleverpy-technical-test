import './styles/main.scss';

import React, { useState } from 'react';
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

const Container = () => {
  const [users, setUsers] = useUsers();
  const [posts, setPosts] = usePosts();
  const [search, setSearch] = useState<string>('');

  return (
    <Context.Provider
      value={{ users, setUsers, posts, setPosts, search, setSearch }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="manage" element={<Manage />}>
                <Route path=":idUser" element={<Manage />} />
              </Route>
              <Route path="users" element={<Users />} />
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
