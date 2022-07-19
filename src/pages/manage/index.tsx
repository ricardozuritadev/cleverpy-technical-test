import { useGetter } from '../../context';
import { Outlet } from 'react-router-dom';
import { UserTypes } from './types';

import UserCard from '../../components/user-card';

const Manage = () => {
  const { users } = useGetter();

  return (
    <section className="manage dashboard__container">
      <section className="manage__section">
        <section>
          <h3 className="manage__title">Users</h3>
          <section className="manage__cards">
            {users.map((user: UserTypes) => (
              <UserCard key={user.id} {...user} />
            ))}
          </section>
        </section>

        <section>
          <h3 className="manage__title">Posts</h3>
          <section className="manage__cards manage__cards--posts">
            <Outlet />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Manage;
