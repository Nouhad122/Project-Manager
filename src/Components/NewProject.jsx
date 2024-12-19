import React, { useRef } from 'react'
import Input from './Input.jsx'
import Button from './Button.jsx';
import Modal from './Modal.jsx';

const NewProject = ({handleInputsSave, handleCancelingMood}) => {
  const modalRef = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () =>{
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    if(enteredTitle.trim() === '' ||
     enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''){
      modalRef.current.open();
      return;
    }
    else{
      handleInputsSave({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
      })
    }
   
  }

  return (
    <>
    <Modal ref={modalRef} buttonContent="Close">
      <h2 className='text-xl font-bold text-center text-purple-600'>Invalid Inputs</h2>
      <p className='mt-3 text-purple-900'>Please enter a valid value for every input</p>
    </Modal>
    <div className='w-2/3'>
      <menu className='flex justify-end gap-4 my-4 items-center'>
        <li><Button whiteBtn onClick={handleCancelingMood}>Cancel</Button></li>
        <li><Button onClick={handleSave}>Save</Button></li>
      </menu>

      <div>
        <Input type="text" label="Title" id="title" ref={titleRef}/>
        <Input type="text" label="Description" id="description" ref={descriptionRef} isTextArea/>
        <Input type="date" label="Due Date" id="due-date" ref={dueDateRef}/>
      </div>
    </div>
    </>
  )
}

export default NewProject
