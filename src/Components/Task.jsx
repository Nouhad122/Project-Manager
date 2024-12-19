import React from 'react';
import NewTask from './NewTask';

const Task = ({tasks, handleDeleteTask, handleTasks}) => {

  return (
    <div className='my-6'>
      <h2 className='font-bold text-purple-600 text-base'>Tasks</h2>
      <NewTask handleTasks={handleTasks}/>
      {
      tasks.length > 0 ?
        <ul className='my-8'>
            {
                tasks.map(task =>{
                return(
                    <li className='bg-purple-600 text-stone-100 my-3 flex justify-between w-1/3 py-2 px-3' key={task.id}>
                        <p>{task.task}</p>
                        <button onClick={() =>handleDeleteTask(task.id)} className='ml-12'>Clear</button>
                    </li>
                    )
                })
            }
        </ul> :
        <p className='text-stone-500 text-base'>No Tasks for this Project</p>
    }
    </div>
  )
}

export default Task
