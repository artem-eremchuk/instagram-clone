import { useContext } from 'react';
import PostsContainer from '../../../components/PostsContainer/PostsContainer';
import Header from '../../../components/Header/Header';
import ModalWindow from '../../../components/ModalWindow/ModalWindow.js'
import { AppContext } from '../../../App';

const Feed = () => {
    const { modalOpened } = useContext(AppContext)

    return (
        <>
          {modalOpened && <ModalWindow />}
          <Header />
          <PostsContainer />
        </>
    )
}

export default Feed