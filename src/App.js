import { useState, useEffect, createContext, useCallback } from 'react';
import PostsContainer from './components/PostsContainer/PostsContainer';
import Header from './components/Header/Header';
import ModalWindow from './components/ModalWindow/ModalWindow.js'
import './App.scss';
import { initialPosts } from './models/initialPosts'

export const AppContext = createContext({
  posts: [],
  modalOpened: false,
  changeLikeMark: () => {},
  addComment: () => {},
  addNewPost: () => {},
  setModalOpened: () => {}
})

function App() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || initialPosts);
  const [modalOpened, setModalOpened] = useState(false);

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
    setModalOpened
  }

  return (
    <AppContext.Provider value={providedValues}>
      {modalOpened && <ModalWindow />}
      <Header />
      <PostsContainer />
    </AppContext.Provider>
  );
}

export default App;