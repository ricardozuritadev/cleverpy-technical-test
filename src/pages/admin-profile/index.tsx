import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';
import images from '../../utils/imgLoader';

const AdminProfile = () => {
  // Me traigo el admin del store
  const { email, username } = useAppSelector(state => state.admin);

  const { t } = useTranslation();

  return (
    <section className="admin">
      <h2 className="heading__secondary">{t('profile')}</h2>
      <section className="admin__card">
        <section className="admin__avatar">
          <img src={images.avatar} alt="user-avatar" className="admin__img" />
        </section>
        <section className="admin__profile">
          <p className="admin__username">{username}</p>
          <p className="admin__email">{email}</p>
          <p className="admin__role">{t('role')}</p>
        </section>
      </section>
    </section>
  );
};

export default AdminProfile;
