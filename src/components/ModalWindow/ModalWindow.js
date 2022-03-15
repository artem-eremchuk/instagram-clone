import { useState } from 'react';
import './ModalWindow.scss';

function ModalWindow(props) {
  const [linkInputText, setLinkInputText] = useState('');
  const [textareaText, setTextareaText] = useState('');


  const { handlerModalWindow, onAddNewPost } = props;

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
          id="" className="modal-window__description"
          placeholder='add description'
          value={textareaText}
          onChange={(e) => setTextareaText(e.target.value)} 
        />
        <div className="buttons-box">
          <button 
            className="modal-window-add"
            onClick={(e) => {
              e.preventDefault();
              onAddNewPost(linkInputText, textareaText);  
              setLinkInputText('');        
              setTextareaText('');
              handlerModalWindow();        
            }}>
            Add
          </button>
          <button 
            className="modal-window-close"
            onClick={(e) => {
              e.preventDefault();
              handlerModalWindow();
            }}>
              Close
          </button>
        </div>
      </form>
    </div>
  )
}

export default ModalWindow;
