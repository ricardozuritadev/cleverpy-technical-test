import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useGetter } from '../../context';

const SearchBar = () => {
  const { search, setSearch } = useGetter();

  const { t } = useTranslation();

  // Función para manejar el cambio del estado search
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        onChange={handleChange}
        value={search}
        placeholder={t('search_user')}
        className="searchbar__input"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="header__icons searchbar__icon"
      />
    </div>
  );
};

export default SearchBar;
