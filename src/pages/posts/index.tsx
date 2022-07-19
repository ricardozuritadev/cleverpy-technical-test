import { useState, useEffect } from 'react';
import { useGetter } from '../../context';
import { useParams } from 'react-router-dom';
import { UserTypes, PostTypes } from '../manage/types';

import PostCard from '../../components/post-card';

const Posts = () => {
  const { users, posts } = useGetter();
  const { idUser } = useParams();
  const [userPosts, setUserPosts] = useState<PostTypes[]>([]);

  useEffect(() => {
    const filteredPosts = posts.filter(
      ({ userId }: PostTypes) => userId === Number(idUser)
    );
    setUserPosts(filteredPosts);
  }, [idUser]);

  const filteredUser = users.find(({ id }: UserTypes) => id === Number(idUser));

  const handleDelete = (postId: number) => {
    const result = userPosts.filter(({ id }: PostTypes) => id !== postId);
    setUserPosts(result);
  };

  return (
    <>
      {userPosts.length > 0 ? (
        userPosts.map((post: PostTypes) => (
          <PostCard
            key={post.id}
            {...post}
            user={filteredUser}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <h2 className="heading__secondary manage__empty">
          {filteredUser?.name} has no posts
        </h2>
      )}
    </>
  );
};

export default Posts;
