import { UserTypes } from './types/UserTypes';
import { useGetter } from '../../context';

import UserInfo from '../../components/user-info';

const Users = () => {
  const { users, search } = useGetter();

  const filteredUsers = users.filter((user: UserTypes) => {
    if (search === '') {
      return user;
    } else {
      return user.name.toLocaleLowerCase().includes(search);
    }
  });

  return (
    <section className="users">
      <h2 className="users__title">Users</h2>
      <section className="users__grid">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user: UserTypes) => (
            <UserInfo key={user.id} {...user} />
          ))
        ) : (
          <h2>No user found</h2>
        )}
      </section>
    </section>
  );
};

export default Users;
