import React from 'react'
import Post from '../Post/Post';
import './PostsContainer.scss';

function PostsContainer(props) {
  const {posts} = props;

  const listPosts = posts.map(post => {
    return (
      <Post
        key={post.id} 
        post={post} 
      />
    )
  });

  return (
    <div className='posts-container'>
      {listPosts}
    </div>
  )
}

export default PostsContainer;
