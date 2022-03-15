import { useState, useEffect } from 'react';
import PostsContainer from './components/PostsContainer/PostsContainer';
import Header from './components/Header/Header';
import './App.scss';

const initialPosts = [
  {
    'id': '1',
    'user_name': 'keanu_reeves',
    'user_avatar': 'https://miro.medium.com/max/1400/1*IlfcghwBI5Z_i9XZ65kgZQ.png',
    'main_img': 'https://www.cheatsheet.com/wp-content/uploads/2022/03/Keanu-Reeves-2.jpg',
    'like_mark': false,
    'description': 'As some may know, Keanu Reeves starred in the 2000 horror film The Watcher. In the film, he went against type a bit by portraying a serial killer, starring alongside Oscar-winner Marisa Tomei. But if Reeves had it his way, he wouldn’t have had anything to do with the film in the first place',
    'comments': 
    [
      {
        'id': '1',
        'comment_author': 'watcher',
        'comment_text': 'Yeah, that was a horror of a different sort',
      },
      {
        'id': '2',
        'comment_author': 'the_gift',
        'comment_text': 'I Hate That Movie',
      },
    ]
  },
  {
    'id': '2',
    'user_name': 'chris_pratt',
    'user_avatar': 'https://pyxis.nymag.com/v1/imgs/c5d/bfe/7c1f36a43f0056cdacc066572f6b7f55b8-17-chris-pratt.rsquare.w330.jpg',
    'main_img': 'https://cdn.cnn.com/cnnnext/dam/assets/210924035010-chris-pratt-file-0630-exlarge-169.jpg',
    'like_mark': false,
    'description': 'Pratt took to Instagram on Wednesday to wish a happy birthday to his wife, Katherine Schwarzenegger. The couple welcomed their first child together, a daughter named Lyla, in August 2020. In the post, the actor thanked Katherine for giving him “a gorgeous healthy daughter.”',
    'comments': 
    [
      {
        'id': '1',
        'comment_author': 'Teabiscuit',
        'comment_text': '“Apparent”, seriously? If you have such a bias against somebody that you sell your article that way, leave it to a reasonable contributor next time. You’re just as classless as Chris would be if it was an obvious slight.',
      },
      {
        'id': '2',
        'comment_author': 'sm18444',
        'comment_text': 'Garbage article. Nothing good here, move on.',
      },
    ]
  },
  {
    'id': '3',
    'user_name': 'deadpool',
    'user_avatar': 'https://fishandconnorsawamovie.podbean.com/mf/web/6dhnad/deadpool_square2.jpg',
    'main_img': 'https://blog.fluance.com/wp-content/uploads/2016/10/deadpool.jpg',
    'like_mark': false,
    'description': 'Deadpool is a superhero story based upon the original Marvel comic. The movie follows the life of Wade Wilson, an ex-special forces agent who is clinically altered. After being the subject of an advanced experiment, he is left with accelerated healing powers – making him virtually invincible. He adopts an alter ego – Deadpool. With his dark sense of humor, and supernatural powers he sets out to change the world. Check out the trailer below for more.',
    'comments': 
    [
      {
        'id': '1',
        'comment_author': 'Eric Eisenberg',
        'comment_text': 'NJ native who calls LA home; lives in a Dreamatorium. A decade-plus CinemaBlend veteran; endlessly enthusiastic about the career he’s dreamt of since seventh grade.',
      },
      {
        'id': '2',
        'comment_author': 'Nigel Andrews',
        'comment_text': 'Deadpool tries so hard and is so trying.',
      },
    ]
  },
]

function App() {
  const [posts, setPosts] = useState(JSON.parse(localStorage.getItem("posts")) || initialPosts);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
  }, [posts])

  const addNewPost = (post) => {
    console.log("post")
  }

  const changeLikeMark = (id) => {
    const currentPost  = posts.find(post => post.id === id);
    const newPost = structuredClone(currentPost);

    newPost['like_mark'] = !newPost['like_mark'];

    const newPosts = posts.map(post => {
      if (post.id === id) {
        return newPost;
      }
      return post;
    })
    
    setPosts(newPosts);
  }

  const addComment = (postId, comment) => {
    const  currentPost  = posts.find(post => post.id === postId);
    const newPost = structuredClone(currentPost);

    newPost.comments.push({
      'id': Date.now(),
      'comment_author': 'admin',
      'comment_text': comment,
    })

    const newPosts = posts.map(post => {
      if (post.id === postId) {
        return newPost;
      }
      return post;
    })
    
    setPosts(newPosts);
  }

  return (
    <>
      <Header 
        onAddNewPost={addNewPost}
      />
      <PostsContainer 
        posts={posts}
        onAddComment={addComment} 
        onChangeLikeMark={changeLikeMark}
      />
    </>
  );
}

export default App;
