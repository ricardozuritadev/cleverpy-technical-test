import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import { useGetter } from '../../context';
import images from '../../utils/imgLoader';
import { useTranslation } from 'react-i18next';

import LangSelector from '../lang-selector';

const BurguerMenu = () => {
  const { admin } = useGetter();

  const { t } = useTranslation();

  return (
    <Menu right>
      <section className="aside__profile">
        <div className="aside__avatar">
          <img className="aside__img" src={images.avatar} alt="user-avatar" />
        </div>
        <p className="aside__welcome">{t('welcome')}</p>
        <p className="aside__username">{admin.username}</p>
        <p className="aside__admin">{t('role')}</p>
      </section>

      <NavLink id="home" className="menu-item" to="/dashboard/manage">
        {t('manage')}
      </NavLink>
      <NavLink id="about" className="menu-item" to="/dashboard/users">
        {t('users')}
      </NavLink>
      <NavLink id="contact" className="menu-item" to="/dashboard/profile">
        {t('profile')}
      </NavLink>
      <NavLink className="menu-item" to="/login">
        {t('logout')}
      </NavLink>

      <LangSelector />
    </Menu>
  );
};

export default BurguerMenu;
