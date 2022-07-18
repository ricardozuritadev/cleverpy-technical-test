import { UserTypes } from './types/UserTypes';
import { useGetter } from '../../context';

import UserInfo from '../../components/user-info';

const Users = () => {
  const { users } = useGetter();

  return (
    <section className="users">
      <h2 className="users__title">Users</h2>
      <section className="users__grid">
        {users.map((user: UserTypes) => (
          <UserInfo key={user.id} {...user} />
        ))}
      </section>
    </section>
  );
};

export default Users;
