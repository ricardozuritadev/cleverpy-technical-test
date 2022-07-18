import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { DropdownProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const MySwal = withReactContent(Swal);

const DropdownMenu: React.FC<DropdownProps> = ({
  postId,
  handleDelete,
  setEditedTitle,
  setEditedBody,
}) => {
  const [isHide, setIsHide] = useState<boolean>(true);

  const handleShowHide = () => setIsHide(!isHide);

  const handleEdit = async () => {
    handleShowHide();
    return MySwal.fire({
      title: 'Enter new post title',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Save',
      confirmButtonColor: '#65b12bff',
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#e60023ff',
      width: '50rem',
    }).then(async postTitle => {
      return MySwal.fire({
        title: 'Enter new post content',
        input: 'textarea',
        showCancelButton: true,
        confirmButtonText: 'Save',
        confirmButtonColor: '#65b12bff',
        cancelButtonText: 'Cancel',
        cancelButtonColor: '#e60023ff',
        width: '50rem',
      }).then(postBody => {
        if (postTitle.value) {
          setEditedTitle(postTitle.value);
        }
        if (postBody.value) {
          setEditedBody(postBody.value);
        }
      });
    });
  };

  const handleDeletePost = async () => {
    handleShowHide();
    return MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#65b12bff',
      cancelButtonColor: '#e60023ff',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        handleDelete(postId);
      }
    });
  };

  return (
    <div className="dropdown">
      <button className="dropdown__btn" onClick={handleShowHide}>
        <FontAwesomeIcon icon={faEllipsis} className="dropdown__dots" />
      </button>
      {!isHide && (
        <section className="dropdown__options">
          <button
            onClick={handleEdit}
            className="dropdown__text dropdown__text--green"
          >
            Edit
          </button>
          <button
            onClick={handleDeletePost}
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
