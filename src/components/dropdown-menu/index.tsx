import { DropdownProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const DropdownMenu: React.FC<DropdownProps> = ({ postId, handleDelete }) => {
  const [isHide, setIsHide] = useState(true);

  const handleClick = () => setIsHide(!isHide);

  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={handleClick}>
        <FontAwesomeIcon icon={faEllipsis} className="post__dots" />
      </button>
      {!isHide && (
        <section className="dropdown__options">
          <button className="dropdown__text dropdown__text--green">Edit</button>
          <button
            onClick={() => handleDelete(postId)}
            className="dropdown__text dropdown__text--red"
          >
            Delete
          </button>
        </section>
      )}
    </div>
  );
};

export default DropdownMenu;
