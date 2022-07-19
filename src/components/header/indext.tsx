import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useGetter } from '../../context';

const MySwal = withReactContent(Swal);

const Header = () => {
  const { search, setSearch, setAdmin } = useGetter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

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
        return MySwal.fire({
          text: 'Good bye!',
          confirmButtonColor: '#65b12bff',
        });
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
        <FontAwesomeIcon icon={faBars} className="header__icons" />
      </div>
    </header>
  );
};

export default Header;
