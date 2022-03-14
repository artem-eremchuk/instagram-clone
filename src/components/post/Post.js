import React from 'react'
import './Post.scss';

function Post(props) {
  const {
    user_name, 
    user_avatar,
    main_img,
    description,
    comments
  } = props.post;

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
            {/* <img src="https://cdn4.iconfinder.com/data/icons/basic-ui-2-line/32/heart-love-like-likes-loved-favorite-256.png" alt="heart" /> */}
            <img src="../../img/empty_heart.png" alt="heart" />
          </div>
          <h3 className="post-description__title">{`${0} отметок "Нравится"`}</h3>
          <p className="post-description__text">
            {description}
          </p>
        </section>
        <section className="post-comments">
          <h3 className="post-commets__title">
            {`Посмотреть все комментарии ${0}`}
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
        </section>
        <input type="text" className="add-comment" placeholder='add comment'/>
      </main>
    </div>
  )
}

export default Post;
