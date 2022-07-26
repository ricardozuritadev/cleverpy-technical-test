import './styles/main.scss';
import 'flag-icons';
import './utils/translator';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppSelector } from './store/hooks';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import AdminProfile from './pages/admin-profile';
import Dashboard from './pages/dashboard';
import Manage from './pages/manage';
import Users from './pages/all-users';
import NotFound from './pages/not-found';

// Guarda para ptoteger las rutas que están dentro de '/'
// para que sólo puedan entrar los usuarios logeados
const Guard = ({ component: Component }: any) => {
  const admin = useAppSelector(state => state.admin);
  return admin ? Component : <Navigate to="/login" replace />;
};

const Container = () => {
  return (
    <Provider store={store}>
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
    </Provider>
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
