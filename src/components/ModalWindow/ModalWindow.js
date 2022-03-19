import { useState, useContext } from 'react';
import { AppContext } from '../../App';
import './ModalWindow.scss';

function ModalWindow() {
  const [linkInputText, setLinkInputText] = useState('');
  const [textareaText, setTextareaText] = useState('');
  const { addNewPost, setModalOpened } = useContext(AppContext)

  return (
    <div className='modal-window-wrapper'>
      <form className="modal-window-box">
        <h2 className="modal-window-header">Add new post</h2>
        <input 
          type="text" 
          className="modal-window__img-link"
          placeholder='add link to your image'
          value={linkInputText}
          onChange={(e) => setLinkInputText(e.target.value)} 
        />
        <textarea 
          name="" 
          id="" 
          className="modal-window__description"
          placeholder='add description'
          value={textareaText}
          onChange={(e) => setTextareaText(e.target.value)} 
        />
        <div className="buttons-box">
          <button 
            className="modal-window-add"
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              addNewPost(linkInputText, textareaText);  
              setLinkInputText('');        
              setTextareaText('');
              setModalOpened(false)    
            }}>
            Add
          </button>
          <button 
            className="modal-window-close"
            onClick={() => setModalOpened(false)}
          >
              Close
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalWindow;
