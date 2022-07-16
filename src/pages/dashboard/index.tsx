import { Outlet } from 'react-router-dom';

import AsideMenu from '../../components/aside-menu';
import Header from '../../components/header/indext';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <section className="dashboard__aside">
        <AsideMenu />
      </section>
      <section className="dashboard__main">
        <Header />
        <Outlet />
      </section>
    </section>
  );
};

export default Dashboard;
