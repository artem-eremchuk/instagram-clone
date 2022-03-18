import React from 'react'
import Post from '../Post/Post';
import './PostsContainer.scss';

const PostsContainer = ({ posts, ...postMethods }) =>
    <div className='posts-container'>
      {posts.map(post => (
          <Post key={post.id} post={post} {...postMethods} />
        ))}
    </div>

export default PostsContainer;
