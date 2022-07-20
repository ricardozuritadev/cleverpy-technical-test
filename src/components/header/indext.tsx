import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useGetter } from '../../context';
import { useTranslation } from 'react-i18next';

import SearchBar from '../search-bar';
import LangSelector from '../lang-selector';
import BurguerMenu from '../burguer-menu';

const MySwal = withReactContent(Swal);

const Header = () => {
  const { search, setSearch, setAdmin } = useGetter();

  const { t } = useTranslation();

  // Función para manejar el cambio del estado search
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Función para eliminar al usuario del contexto y cerrar sesión
  const logout = () => {
    return MySwal.fire({
      title: t('leave'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#65b12bff',
      cancelButtonColor: '#e60023ff',
      cancelButtonText: t('cancel'),
      confirmButtonText: t('confirm_logout'),
    }).then(result => {
      if (result.isConfirmed) {
        setAdmin(null);
      }
    });
  };

  return (
    <header className="header">
      <SearchBar search={search} handleChange={handleChange} />

      <div className="header__desktop header__desktop--flex">
        <div className="header__desktop" onClick={logout}>
          <span style={{ paddingRight: '1rem' }}>{t('logout')}</span>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className="header__icons"
          />
        </div>

        <LangSelector />
      </div>

      <div className="header__mobile">
        <BurguerMenu />
      </div>
    </header>
  );
};

export default Header;
