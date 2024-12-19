import React, {useImperativeHandle, useRef} from 'react';
import { createPortal } from 'react-dom';
import Button from "./Button.jsx";

const Modal = ({children, buttonContent, ref}) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () =>{
        return{
            open(){
                dialogRef.current.showModal();
            }
        }
  })
  return createPortal(
    <dialog ref={dialogRef} className='py-14 px-16 rounded-lg backdrop:bg-stone-900/60'>
      {children}
      <form className='mt-6 text-center' method='dialog'>
        <Button>{buttonContent}</Button>
      </form>
    </dialog>
  ,document.getElementById('modal-root'))
}

export default Modal
