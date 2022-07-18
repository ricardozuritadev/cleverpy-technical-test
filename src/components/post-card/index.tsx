import { PostTypes } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const PostCard: React.FC<PostTypes> = ({ title, body, user }) => {
  return (
    <section className="post">
      <div className="post__header">
        <p className="post__author">{user.name}</p>
        <FontAwesomeIcon icon={faEllipsis} />
      </div>
      <div className="post_content">
        <h4 className="post__title">{title}</h4>
        <p className="post__text">{body}</p>
      </div>
    </section>
  );
};

export default PostCard;
