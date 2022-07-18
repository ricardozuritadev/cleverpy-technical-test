import images from '../../utils/imgLoader';
import { useNavigate, useParams } from 'react-router-dom';
import { UserTypes } from './types';

const UserCard: React.FC<UserTypes> = ({ name, id }) => {
  const { idUser } = useParams();
  const navigate = useNavigate();

  const handleClick = () => navigate(`/dashboard/manage/${id}`);

  return (
    <section
      className="user"
      onClick={handleClick}
      style={{
        backgroundColor: Number(idUser) === id ? '#e0ffc8' : 'white',
        fontWeight: Number(idUser) === id ? 'bold' : '',
      }}
    >
      <section>
        <img src={images.avatar} alt="user-pic" className="user__img" />
      </section>
      <p>{name}</p>
    </section>
  );
};

export default UserCard;
