import React from 'react'
import Post from '../Post/Post';
import './PostsContainer.scss';

function PostsContainer(props) {
  const {posts, onAddComment, onChangeLikeMark} = props;

  const listPosts = posts.map(post => {
    return (
      <Post
        key={post.id} 
        post={post}
        onAddComment={onAddComment} 
        onChangeLikeMark={onChangeLikeMark}
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
