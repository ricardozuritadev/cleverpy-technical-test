import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { UserTypes, PostTypes } from './types';
import { useAppSelector } from '../../store/hooks';

import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';

const Manage = () => {
  const { list: posts } = useAppSelector(state => state.posts);
  const { list: users } = useAppSelector(state => state.users);
  const { text: search } = useAppSelector(state => state.seacrh);

  const { idUser } = useParams();
  const [userPosts, setUserPosts] = useState<PostTypes[]>([]);

  const { t } = useTranslation();

  // Filtro los usuarios cuando se utiliza el buscador
  const filteredUser = users.filter((user: UserTypes) => {
    if (search === '') {
      return user;
    } else {
      return user.name.toLowerCase().includes(search);
    }
  });

  // Carga los posts filtrados dependiendo del usuario elegido
  useEffect(() => {
    const filteredPosts = posts.filter(
      ({ userId }: PostTypes) => userId === Number(idUser)
    );
    setUserPosts(filteredPosts);
  }, [idUser]);

  // Guardo el autor del post para pasárselo como props al post card
  const postAuthor: any = users.find(
    ({ id }: UserTypes) => id === Number(idUser)
  );

  // Función para eliminar posts de un usuario
  const handleDelete = (postId: number) => {
    const result = userPosts.filter(({ id }: PostTypes) => id !== postId);
    setUserPosts(result);
  };

  return (
    <section className="manage dashboard__container">
      <section className="manage__section">
        <section>
          <h3 className="heading__tertiary manage__title">{t('users')}</h3>
          <section className="manage__cards">
            {filteredUser.length > 0 ? (
              filteredUser.map((user: UserTypes) => (
                <UserCard key={user.id} {...user} />
              ))
            ) : (
              <h2 className="heading__secondary manage__empty manage__empty--user">
                {t('no_user')}
              </h2>
            )}
          </section>
        </section>

        <section>
          <h3 className="heading__tertiary manage__title">{t('posts')}</h3>
          <section className="manage__cards manage__cards--posts">
            {/* {userPosts.map((post: PostTypes) => (
              <PostCard key={post.id} {...post} handleDelete={handleDelete} />
            ))} */}
            {idUser !== undefined ? (
              userPosts.length > 0 ? (
                userPosts.map((post: PostTypes) => (
                  <PostCard
                    key={post.id}
                    {...post}
                    user={postAuthor}
                    handleDelete={handleDelete}
                  />
                ))
              ) : (
                <h2 className="heading__secondary manage__empty">
                  {t('no_posts', { post_author: postAuthor.name })}
                </h2>
              )
            ) : (
              <h2 className="heading__secondary manage__empty">
                {t('select_user')}
              </h2>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Manage;
