import React, {useRef} from 'react';
import Button from './Button';

const NewTask = ({handleTasks, tasks}) => {
    const taskRef = useRef();

    const handleEnteredTask = () =>{
        const enteredTask = taskRef.current.value;
        if(enteredTask.trim() === '' || tasks.length >= 15){
            return;
        }
        handleTasks(enteredTask);

        taskRef.current.value = '';
    }

    return (
        <div className='my-4'>
        <input type='text' placeholder='Add a Task...' ref={taskRef}
            className='px-3 py-2.5 h-full text-sm outline-none w-1/3 mr-4 bg-purple-100 border-2 border-transparent focus:border-solid focus:border-2 focus:border-purple-800'/>
            <Button onClick={handleEnteredTask}>Add a Task</Button>
        </div>
  )
}

export default NewTask
