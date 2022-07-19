import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useGetter } from '../../context';

import BurguerMenu from '../burguer-menu';

const MySwal = withReactContent(Swal);

const Header = () => {
  const { search, setSearch, setAdmin } = useGetter();

  // Función para manejar el cambio del estado search
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // Función para eliminar al usuario del contexto y cerrar sesión
  const logout = () => {
    return MySwal.fire({
      title: 'Do you want to leave?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#65b12bff',
      cancelButtonColor: '#e60023ff',
      confirmButtonText: 'Yes, logout!',
    }).then(result => {
      if (result.isConfirmed) {
        setAdmin(null);
      }
    });
  };

  return (
    <header className="header">
      <div className="header__searchbar">
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Search user"
          className="header__input"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="header__icons header__icons--search"
        />
      </div>

      <div className="header__desktop" onClick={logout}>
        <span style={{ paddingRight: '1rem' }}>Logout</span>
        <FontAwesomeIcon icon={faRightFromBracket} className="header__icons" />
      </div>

      <div className="header__mobile">
        <BurguerMenu />
      </div>
    </header>
  );
};

export default Header;
