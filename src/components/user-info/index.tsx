import images from '../../utils/imgLoader';

import { UserProps } from './types';

const UserInfo: React.FC<UserProps> = ({ name, email, phone, address }) => {
  return (
    <section className="info">
      <section className="info__avatar">
        <img src={images.avatar} alt="user-pic" className="info__img" />
      </section>
      <section className="info__profile">
        <p className="info__name">{name}</p>
        <p className="info__email">{email}</p>
        <p className="info__phone">{phone}</p>
        <p className="info__city">{address.city}</p>
      </section>
    </section>
  );
};

export default UserInfo;
