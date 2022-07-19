import { useGetter } from '../../context';
import images from '../../utils/imgLoader';

const AdminProfile = () => {
  // Me traigo el admin del contexto con el hook useGetter()
  const { admin } = useGetter();

  return (
    <section className="admin">
      <h2 className="heading__secondary">My profile</h2>
      <section className="admin__card">
        <section className="admin__avatar">
          <img src={images.avatar} alt="user-avatar" className="admin__img" />
        </section>
        <section className="admin__profile">
          <p className="admin__username">{admin.username}</p>
          <p className="admin__email">{admin.email}</p>
          <p className="admin__role">Site admin</p>
        </section>
      </section>
    </section>
  );
};

export default AdminProfile;
