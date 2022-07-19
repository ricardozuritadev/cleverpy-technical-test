import './styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Context, { useGetter } from './context';
import { useUsers, usePosts } from './hooks';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import AdminProfile from './pages/admin-profile';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Users from './pages/all-users';
import NotFound from './pages/not-found';

const Guard = ({ component: Component }: any) => {
  const { admin } = useGetter();
  return admin ? Component : <Navigate to="/login" replace />;
};

const Container = () => {
  const [users, setUsers] = useUsers();
  const [posts, setPosts] = usePosts();
  const [admin, setAdmin] = useState(null);
  const [search, setSearch] = useState<string>('');

  return (
    <Context.Provider
      value={{
        admin,
        setAdmin,
        users,
        setUsers,
        posts,
        setPosts,
        search,
        setSearch,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Guard component={<App />} />}>
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="manage" element={<Manage />}>
                <Route path=":idUser" element={<Manage />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="profile" element={<AdminProfile />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
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
