import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setSearch } from '../../store/slices/search';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { text: search } = useAppSelector(state => state.seacrh);

  const { t } = useTranslation();

  // Función para manejar el cambio del estado search
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(event.target.value));
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
