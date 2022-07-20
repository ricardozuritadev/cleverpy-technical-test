import { UserTypes } from './types/UserTypes';
import { useGetter } from '../../context';
import { useTranslation } from 'react-i18next';

import UserInfo from '../../components/user-info';

const Users = () => {
  // Me traigo los usuarios y el texto de búsqueda del contexto
  const { users, search } = useGetter();

  const { t } = useTranslation();

  // Filtro los usuarios cuando se usa el buscador
  const filteredUsers = users.filter((user: UserTypes) => {
    if (search === '') {
      return user;
    } else {
      return user.name.toLocaleLowerCase().includes(search);
    }
  });

  return (
    <section className="users">
      <h2 className="users__title">{t('users')}</h2>
      <section className="users__grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: UserTypes) => (
            <UserInfo key={user.id} {...user} />
          ))
        ) : (
          <h2>{t('no_user')}</h2>
        )}
      </section>
    </section>
  );
};

export default Users;
