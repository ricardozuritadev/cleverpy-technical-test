import { PostTypes } from './types';

const PostCard: React.FC<PostTypes> = ({ title, body }) => {
  return (
    <section className="post">
      <div className="post__header">
        <h3>{title}</h3>
        <p>...</p>
      </div>
      <div className="post_content">
        <p className="post__text">{body}</p>
      </div>
    </section>
  );
};

export default PostCard;
