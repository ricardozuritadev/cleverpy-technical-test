import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <nav className="dashboard__nav"></nav>

      <section className="dashboard__section">
        <h2 className="dashboard__title">
          Select a user to manage their posts
        </h2>
        <section className="dashboard__data">
          <section className="dashboard__container">
            <h3 className="dashboard__subtitle">Users</h3>
            <div className="dashboard__cards">
              <UserCard />
            </div>
          </section>
          <section className="dashboard__container">
            <h3 className="dashboard__subtitle">Posts</h3>
            <div className="dashboard__cards">
              <PostCard />
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
