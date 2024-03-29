import React, { useState, useContext } from 'react'
import './Post.scss';
import emptyHeart from '../../img/empty_heart.png'
import filledHeart from '../../img/fill_heart.png'
import { AppContext } from '../../App';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Post({ post }) {
  const [newCommentText, setNewCommentText] = useState('')
  const { 
    changeLikeMark,
    posts,
    addComment
  } = useContext(AppContext)

  const params = useParams()
  const history = useHistory()

  const openedPost = posts.find(x => x.id === params.id)

  const {
    id,
    userName, 
    userAvatar,
    img,
    liked,
    description,
    comments,
  } = post || openedPost;

  return (
    <div className="post-container">
      <header className="post-header">
        <div className="post-header-author">
          <img className="post-header-author__logo" src={userAvatar} alt="user-avatar" />
          <h2 className="post-header-author__title">
            {userName}
          </h2>
        </div>
      </header>
      <img 
        className="post-img"
        src={img}
        alt="main-img"
        onClick={() => history.push(`/post/${id}`, { 
          data: 'nothing'
        })}  
      />
      <main className="post-content">
        <section className="post-description">
          <div className="post-description__emoji">
            <img 
              src={liked ? filledHeart : emptyHeart} 
              alt="heart"
              onClick={() => changeLikeMark(id)} 
            />
          </div>
          <h3 className="post-description__title">
            {liked && '1 отметка нравится'}
          </h3>
          <p className="post-description__text">
            {description}
          </p>
        </section>
        <section className="post-comments">
          <h3 className="post-comments__title">
            {`Посмотреть все комментарии ${comments.length}`}
          </h3>
          {comments.map(comment => {
            const {id, commentAuthor, commentText} = comment;

            return (
              <div className="post-comment" key={id}>
                <p className="post-comment__text"> 
                  <span className="post-comment__author">
                    {commentAuthor}
                  </span>
                    {commentText}
                </p>
              </div>
            )
          })}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              addComment(id, newCommentText);
              setNewCommentText('');
            }}>
            <input 
              className="add-comment" 
              type="text"
              value={newCommentText} 
              placeholder='add comment'
              onChange={(e) => setNewCommentText(e.target.value)}
            />
          </form>
        </section>
      </main>
    </div>
  )
}

export default Post;
