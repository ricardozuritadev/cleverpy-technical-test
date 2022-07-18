import { useState } from 'react';
import { PostTypes } from './types';

import DropdownMenu from '../dropdown-menu';

const PostCard: React.FC<PostTypes> = ({
  id,
  title,
  body,
  user,
  handleDelete,
}) => {
  const [editedBody, setEditedBody] = useState<string | undefined>(undefined);
  const [editedTitle, setEditedTitle] = useState<string | undefined>(undefined);

  return (
    <section className="post">
      <div className="post__header">
        <p className="post__author">{user.name}</p>
        <p>{id}</p>
        <DropdownMenu
          handleDelete={handleDelete}
          postId={id}
          setEditedBody={setEditedBody}
          setEditedTitle={setEditedTitle}
        />
      </div>
      <div className="post_content">
        <h4 className="post__title">
          {editedTitle === undefined ? title : editedTitle}
        </h4>
        <p className="post__text">
          {editedBody === undefined ? body : editedBody}
        </p>
      </div>
    </section>
  );
};

export default PostCard;
