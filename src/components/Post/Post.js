import React, { useState } from 'react'
import './Post.scss';
import emptyHeart from '../../img/empty_heart.png'
import fillHeart from '../../img/fill_heart.png'

function Post(props) {
  const [likeIcon, setLikeIcon] = useState(props.post.like_mark);
  const [newCommentText, setNewCommentText] = useState('')

  const {post, onAddComment, onChangeLikeMark} = props;

  const {
    id,
    user_name, 
    user_avatar,
    main_img,
    description,
    comments,
  } = post;

  return (
    <div className="post-container">
      <header className="post-header">
        <div className="post-header-author">
          <img className="post-header-author__logo" src={user_avatar} alt="user-avatar" />
          <h2 className="post-header-author__title">
            {user_name}
          </h2>
        </div>
      </header>
      <img className="post-img" src={main_img} alt="main-img"/>
      <main className="post-content">
        <section className="post-description">
          <div className="post-description__emoji">
            <img 
              src={!likeIcon ? emptyHeart : fillHeart } 
              alt="heart"
              onClick={() => {
                setLikeIcon(!likeIcon)
                onChangeLikeMark(id)
              }} 
            />
          </div>
          <h3 className="post-description__title">
            {`${!likeIcon ? `` : `${1} отметка нравится`}`}
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
            const {id, comment_author, comment_text} = comment;

            return (
              <div className="post-comment" key={id}>
                <p className="post-comment__text"> 
                  <span className="post-comment__author">
                    {comment_author}
                  </span>
                    {comment_text}
                </p>
              </div>
            )
          })}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              onAddComment(id, newCommentText);
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
