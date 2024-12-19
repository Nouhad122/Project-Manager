import React from 'react';
import Button from './Button.jsx';
import Task from './Task.jsx';

const SelectedProject = ({project, handleDeleteProject, handleTasks, tasks, handleDeleteTask}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US',{
    year: "numeric",
    month: "short",
    day: "2-digit"
  });
  return (
    <div className='px-4 py-4 w-2/3'>
        <header>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold text-purple-600'>{project.title}</h1>
                <Button onClick={() =>handleDeleteProject(project.id)}>Delete</Button>
            </div>

            <p className='text-sm text-stone-600'>{formattedDate}</p>
            <p className='mt-6 whitespace-pre-wrap'>{project.description}</p>
        </header>
       <Task handleTasks={handleTasks} tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  )
}

export default SelectedProject
