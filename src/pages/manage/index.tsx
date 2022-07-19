import { useState, useEffect } from 'react';
import { useGetter } from '../../context';
import { useParams } from 'react-router-dom';
import { UserTypes, PostTypes } from './types';

import PostCard from '../../components/post-card';
import UserCard from '../../components/user-card';

const Manage = () => {
  const { users, posts, search } = useGetter();
  const { idUser } = useParams();
  const [userPosts, setUserPosts] = useState<PostTypes[]>([]);

  const filteredUser = users.filter((user: any) => {
    if (search === '') {
      return user;
    } else {
      return user.name.toLowerCase().includes(search);
    }
  });

  const postAuthor = users.find(({ id }: UserTypes) => id === Number(idUser));

  useEffect(() => {
    const filteredPosts = posts.filter(
      ({ userId }: PostTypes) => userId === Number(idUser)
    );
    setUserPosts(filteredPosts);
  }, [idUser]);

  const handleDelete = (postId: number) => {
    const result = userPosts.filter(({ id }: PostTypes) => id !== postId);
    setUserPosts(result);
  };

  return (
    <section className="manage dashboard__container">
      <section className="manage__section">
        <section>
          <h3 className="manage__title">Users</h3>
          <section className="manage__cards">
            {filteredUser.length > 0 ? (
              filteredUser.map((user: UserTypes) => (
                <UserCard key={user.id} {...user} />
              ))
            ) : (
              <h2 className="heading__secondary manage__empty manage__empty--user">
                No user found
              </h2>
            )}
          </section>
        </section>

        <section>
          <h3 className="manage__title">Posts</h3>

          <section className="manage__cards manage__cards--posts">
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
                  {postAuthor?.name} has no posts
                </h2>
              )
            ) : (
              <h2 className="heading__secondary manage__empty">
                Select a user to manage their posts
              </h2>
            )}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Manage;
