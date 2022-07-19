import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useGetter } from '../../context';

const Header = () => {
  const { setSearch } = useGetter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <header className="header">
      <div className="header__searchbar">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search user"
          className="header__input"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="header__icons header__icons--search"
        />
      </div>

      <div className="header__desktop">
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
