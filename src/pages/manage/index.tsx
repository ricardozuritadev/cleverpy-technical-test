import { useGetter } from '../../context';
import { useParams } from 'react-router-dom';

import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';

const Manage = () => {
  const { users, posts } = useGetter();
  const { idUser } = useParams();

  const filteredPosts = posts.filter(
    ({ userId }: any) => userId === Number(idUser)
  );

  const filteredUser = users.find(({ id }: any) => id === Number(idUser));

  return (
    <section className="manage dashboard__container">
      <section className="manage__section">
        <section>
          <h3 className="manage__title">Users</h3>
          <section className="manage__cards">
            {users.map((user: any) => (
              <UserCard key={user.id} {...user} />
            ))}
          </section>
        </section>

        <section>
          <h3 className="manage__title">Posts</h3>
          <section className="manage__cards manage__cards--posts">
            {idUser ? (
              filteredPosts.map((post: any) => (
                <PostCard key={post.id} {...post} user={filteredUser} />
              ))
            ) : (
              <h2 className="heading__secondary manage__empty">
                Select a user to manage their posts
              </h2>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Manage;
