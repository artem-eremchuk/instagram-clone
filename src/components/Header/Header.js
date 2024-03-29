import React, { useContext } from 'react'
import { AppContext } from '../../App';
import './Header.scss'

function Header() {
  const { setModalOpened } = useContext(AppContext)

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header__logo">Instagram</h1>
        <div className="add-post">
          <img 
            className="add-post__logo" 
            src="https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-2/128/add-256.png" 
            alt="add-post"
            onClick={() => setModalOpened(true)}  
          />
        </div>
      </div>
    </header>
  )
}

export default Header;
