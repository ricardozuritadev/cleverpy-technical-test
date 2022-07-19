import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useGetter } from '../../context';
import images from '../../utils/imgLoader';

const BurguerMenu = () => {
  const { admin } = useGetter();

  return (
    <Menu right>
      <section className="aside__profile">
        <div className="aside__avatar">
          <img className="aside__img" src={images.avatar} alt="user-avatar" />
        </div>
        <p className="aside__welcome">Welcome</p>
        <p className="aside__username">{admin.username}</p>
        <p className="aside__admin">Site admin</p>
      </section>

      <NavLink id="home" className="menu-item" to="/dashboard/manage">
        Manage posts
      </NavLink>
      <NavLink id="about" className="menu-item" to="/dashboard/users">
        Users
      </NavLink>
      <NavLink id="contact" className="menu-item" to="/dashboard/profile">
        My profile
      </NavLink>
      <NavLink className="menu-item" to="/login">
        Logout
      </NavLink>
    </Menu>
  );
};

export default BurguerMenu;
