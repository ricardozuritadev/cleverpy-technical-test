import images from '../../utils/imgLoader';

const UserCard = () => {
  return (
    <section className="user">
      <section>
        <img src={images.avatar} alt="user-pic" className="user__img" />
      </section>
      <h3>User 1</h3>
    </section>
  );
};

export default UserCard;
