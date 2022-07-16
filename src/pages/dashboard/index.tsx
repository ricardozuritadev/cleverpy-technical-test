import { Outlet } from 'react-router-dom';

import AsideMenu from '../../components/aside-menu';
import Header from '../../components/header/indext';

const Dashboard = () => {
  return (
    <section className="dashboard">
      {/* <section className="aside__menu">
        <AsideMenu />
      </section> */}

      <Header />

      <Outlet />
    </section>
  );
};

export default Dashboard;
