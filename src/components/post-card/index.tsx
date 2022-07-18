import { PostTypes } from './types';
import DropdownMenu from '../dropdown-menu';

const PostCard: React.FC<PostTypes> = ({
  id,
  title,
  body,
  user,
  handleDelete,
}) => {
  return (
    <section className="post">
      <div className="post__header">
        <p className="post__author">{user.name}</p>
        <p>{id}</p>
        <DropdownMenu handleDelete={handleDelete} postId={id} />
      </div>
      <div className="post_content">
        <h4 className="post__title">{title}</h4>
        <p className="post__text">{body}</p>
      </div>
    </section>
  );
};

export default PostCard;
