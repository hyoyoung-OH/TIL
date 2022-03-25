import { useState } from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteHandler() {
    setmodalIsOpen(true);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}
export default Todo;
