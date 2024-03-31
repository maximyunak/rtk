import React, { useState } from 'react';
import { postApi } from '../servises/PostServise';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
  const [limit, setlimit] = useState(100);
  const { data: posts, error, isLoading, refetch } = postApi.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postApi.useCreatePostMutation();
  const [updatePost, {}] = postApi.useUpdatePostMutation();
  const [deletePost, {}] = postApi.useDeletePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  return (
    <div>
      <div>
        <button onClick={handleCreate}>create</button>
        {isLoading && <h1>loading..</h1>}
        {error && <h1>eror</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem remove={handleRemove} update={handleUpdate} key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
};

export default PostContainer;
