import React, { useContext } from 'react'
import Post from '../Post/Post';
import './PostsContainer.scss';
import { FeedContext } from '../../components/Pages/Feed/Feed';

const PostsContainer = () => {
  const { posts } = useContext(FeedContext)

  return (
    <div className='posts-container'>
      {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
    </div>
  )
}

export default PostsContainer;
