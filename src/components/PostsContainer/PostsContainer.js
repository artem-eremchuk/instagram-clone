import React, { useContext } from 'react'
import Post from '../Post/Post';
import './PostsContainer.scss';
import { AppContext } from '../../App'

const PostsContainer = () => {
  const { posts } = useContext(AppContext)

  return (
    <div className='posts-container'>
      {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  )
}

export default PostsContainer;
