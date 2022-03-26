import './App.scss';
import { createContext, useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Feed from './components/Pages/Feed/Feed'
import Login from './components/Pages/Login/Login'
import Post from './components/Post/Post';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { getCookie } from './utils/cookies'
import { initialPosts } from './models/initialPosts'

const sessionId = getCookie('sessionId')

export const AppContext = createContext({
  setLoggedIn: () => {},
  loggedIn: sessionId,
  posts: [],
  modalOpened: false,
  changeLikeMark: () => {},
  addComment: () => {},
  addNewPost: () => {},
  setModalOpened: () => {}
})

function App() {
  const [loggedIn, setLoggedIn] =  useState(sessionId)
  const [modalOpened, setModalOpened] = useState(false);
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || initialPosts);

  
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  const changeLikeMark = useCallback((id) => {
    const likedPostIndex = posts.findIndex(post => post.id === id);

    setPosts([
      ...posts.slice(0, likedPostIndex),
      {
        ...posts[likedPostIndex],
        liked: !posts[likedPostIndex].liked
      },
      ...posts.slice(likedPostIndex + 1),
    ]);
  }, [posts])

  const addComment = useCallback((postId, comment) => {
    const currentPost = posts.find(post => post.id === postId);

    const newPost = {
      ...currentPost,
      comments: [
        ...currentPost.comments,
        {
          'id': Date.now(),
          'commentAuthor': 'dachshund',
          'commentText': comment,
        }
      ]
    };


    const newPosts = posts.map(post => 
      post.id === postId 
        ? newPost 
        : post
    )
    
    setPosts(newPosts);
  }, [posts])

  const addNewPost = (img, description) => {
    setPosts([
      {
        id: Date.now(),
        userName: 'dachshund',
        userAvatar: 'https://images.vexels.com/media/users/3/213173/isolated/lists/c6137c02cac6b596b3cc3969719a040e-colored-cute-dachshund.png',
        img,
        liked: false,
        description,
        comments: []
      },
      ...posts
    ])
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const providedValues = {
    posts,
    changeLikeMark,
    addComment,
    addNewPost,
    modalOpened,
    setModalOpened,
    setLoggedIn,
    loggedIn
  }

  return (
    <AppContext.Provider value={providedValues}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <PrivateRoute path='/feed' exact>
            <Feed />
          </PrivateRoute>
          <PrivateRoute path='/post/:id/:type?' exact>
            <Post />
          </PrivateRoute>
          <PrivateRoute path='/feed/moderation' exact>
            <div>moderation</div>
          </PrivateRoute>
          <Route path='*'>
            404 no match
          </Route>
          <Redirect to='/' />
        </Switch>
      </BrowserRouter> 
    </AppContext.Provider>
  );
}

export default App;