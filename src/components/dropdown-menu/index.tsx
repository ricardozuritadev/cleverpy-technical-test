import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { DropdownProps } from './types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const MySwal = withReactContent(Swal);

const DropdownMenu: React.FC<DropdownProps> = ({
  postId,
  handleDelete,
  setEditedTitle,
  setEditedBody,
}) => {
  const [isHide, setIsHide] = useState<boolean>(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();

  const handleShowHide = () => setIsHide(!isHide);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsHide(true);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  // Función para editar el titulo y el texto de los posts que muestra un popup
  const handleEdit = async () => {
    handleShowHide();
    return MySwal.fire({
      title: t('modify_post_title'),
      input: 'text',
      showCancelButton: true,
      confirmButtonText: t('save'),
      confirmButtonColor: '#65b12bff',
      cancelButtonText: t('cancel'),
      cancelButtonColor: '#e60023ff',
      width: '50rem',
    }).then(async postTitle => {
      return MySwal.fire({
        title: t('modify_post_content'),
        input: 'textarea',
        showCancelButton: true,
        confirmButtonText: t('save'),
        confirmButtonColor: '#65b12bff',
        cancelButtonText: t('cancel'),
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

  // Función para eliminar un post que muestra un popup para confirmar
  const handleDeletePost = async () => {
    handleShowHide();
    return MySwal.fire({
      title: t('confirm'),
      text: t('warning'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#65b12bff',
      cancelButtonColor: '#e60023ff',
      confirmButtonText: t('confirm_delete'),
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
        <section ref={wrapperRef} className="dropdown__options">
          <button
            onClick={handleEdit}
            className="dropdown__text dropdown__text--green"
          >
            {t('edit')}
          </button>
          <button
            onClick={handleDeletePost}
            className="dropdown__text dropdown__text--red"
          >
            {t('delete')}
          </button>
        </section>
      )}
    </div>
  );
};

export default DropdownMenu;
