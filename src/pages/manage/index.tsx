import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';

const Manage = () => {
  return (
    <section className="manage dashboard__container">
      <h2 className="heading__secondary">
        Select a user to manage their posts
      </h2>
      <section>
        <h3>Users</h3>
        <section className="manage__users">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </section>
      </section>
      <section>
        <h3>Posts</h3>
        <section className="manage__posts">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </section>
    </section>
  );
};

export default Manage;
