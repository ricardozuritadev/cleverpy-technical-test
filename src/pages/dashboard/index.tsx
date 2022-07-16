import AsideMenu from '../../components/aside-menu';
import Header from '../../components/header/indext';
import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';
import { Outlet } from 'react-router-dom';

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
