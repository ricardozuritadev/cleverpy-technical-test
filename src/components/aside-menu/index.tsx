import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setSearch } from '../../store/slices/search';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import images from '../../utils/imgLoader';

const AsideMenu = () => {
  const dispatch = useAppDispatch();
  const { username } = useAppSelector(state => state.admin);

  const navigate = useNavigate();
  const { t } = useTranslation();

  // Función para limpiar el buscador cuando se cambia de página
  const handleClick = () => dispatch(setSearch(''));

  // Función para redirigir al usuario a la página de su perfil
  const handleProfile = () => navigate('/dashboard/profile');

  return (
    <aside className="aside">
      <section className="aside__profile">
        <div className="aside__avatar">
          <img className="aside__img" src={images.avatar} alt="user-avatar" />
        </div>
        <p className="aside__welcome">{t('welcome')}</p>
        <p className="aside__username">{username}</p>
        <p className="aside__admin">{t('role')}</p>
        <button onClick={handleProfile} className="aside__adminprofile">
          {t('profile')}
        </button>
      </section>

      <nav className="aside__nav">
        <NavLink
          to="/dashboard/manage"
          className="aside__links"
          onClick={handleClick}
          style={({ isActive }) => ({
            background: isActive ? '#1c4998' : '#2855a6ff',
          })}
        >
          <FontAwesomeIcon icon={faComments} className="aside__icons" />
          <p className="aside__text">{t('manage')}</p>
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className="aside__links"
          onClick={handleClick}
          style={({ isActive }) => ({
            background: isActive ? '#1c4998' : '#2855a6ff',
          })}
        >
          <FontAwesomeIcon icon={faUsers} className="aside__icons" />
          <p className="aside__text">{t('users')}</p>
        </NavLink>
      </nav>
    </aside>
  );
};

export default AsideMenu;
