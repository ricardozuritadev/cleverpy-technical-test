import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import images from '../../utils/imgLoader';

const AsideMenu = () => {
  return (
    <aside className="aside">
      <section className="aside__profile">
        <div className="aside__avatar">
          <img className="aside__img" src={images.avatar} alt="user-avatar" />
        </div>
        <p className="aside__welcome">Welcome</p>
        <p className="aside__username">RickyZu</p>
        <p className="aside__admin">Site admin</p>
      </section>

      <nav className="aside__nav">
        <NavLink
          to="/dashboard/manage"
          className="aside__links"
          style={({ isActive }) => ({
            background: isActive ? '#1c4998' : '#2855a6ff',
          })}
        >
          <FontAwesomeIcon icon={faCommentDots} className="aside__icons" />
          <p className="aside__text">Manage posts</p>
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className="aside__links"
          style={({ isActive }) => ({
            background: isActive ? '#1c4998' : '#2855a6ff',
          })}
        >
          <FontAwesomeIcon icon={faUsers} className="aside__icons" />
          <p className="aside__text">Users</p>
        </NavLink>
        <NavLink
          to="/dashboard/posts"
          className="aside__links"
          style={({ isActive }) => ({
            background: isActive ? '#1c4998' : '#2855a6ff',
          })}
        >
          <FontAwesomeIcon icon={faComments} className="aside__icons" />
          <p className="aside__text">Posts</p>
        </NavLink>
      </nav>
    </aside>
  );
};

export default AsideMenu;
