import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { SearchbarProps } from './types';

const SearchBar: React.FC<SearchbarProps> = ({ search, handleChange }) => {
  const { t } = useTranslation();

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
