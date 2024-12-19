import React from 'react'
import Button from './Button.jsx';

const ProjectSidebar = ({handleAddingMood, projects, handleSelectedProject, selectedProjectId}) => {
  return (
    <aside className='bg-purple-600 w-1/5 px-4 py-4 rounded-xl text-slate-100'>
      <h2 className='text-xl font-bold mb-6'>Project Sidebar</h2>
      <div>
          <Button onClick={handleAddingMood} whiteBtn>+ Add Item</Button>
      </div>
      <ul className='mt-6'>
        {
        projects.map(project =>{
          let cssClasses = 'py-3 px-3 w-full text-left transition ease-linear delay-75';
          if(project.id === selectedProjectId){
            cssClasses += ' bg-purple-500';
          }
          else{
            cssClasses += ' bg-purple-800 hover:bg-purple-900';
          }
        return(
           <li className='my-3' key={project.id}>
              <button onClick={() => handleSelectedProject(project.id)} className={cssClasses}>
                {project.title}
              </button>
              
            </li>
            )
            })
        }
      </ul>
    </aside>
  )
}

export default ProjectSidebar
