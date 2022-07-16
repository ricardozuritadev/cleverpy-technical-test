import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="header__icons" />
      </div>

      <nav className="header__desktop">Header nav links</nav>

      <div className="header__desktop">
        <FontAwesomeIcon icon={faRightFromBracket} className="header__icons" />
      </div>

      <div className="header__mobile">
        <FontAwesomeIcon icon={faBars} className="header__icons" />
      </div>
    </header>
  );
};

export default Header;
