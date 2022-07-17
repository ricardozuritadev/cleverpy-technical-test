import { useGetter } from '../../context';

import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';

const Manage = () => {
  const { posts } = useGetter();

  return (
    <section className="manage dashboard__container">
      <h2 className="heading__secondary">
        Select a user to manage their posts
      </h2>
      <section className="manage__section">
        <section>
          <h3>Users</h3>
          <section className="manage__cards">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </section>
        </section>

        <section>
          <h3>Posts</h3>
          <section className="manage__cards manage__cards--posts">
            {posts.map((post: any) => (
              <PostCard key={post.id} {...post} />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Manage;
