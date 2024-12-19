import React, { useState } from 'react';
import ProjectSidebar from './Components/ProjectSidebar.jsx';
import NewProject from './Components/NewProject.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [projectsState, setProjectsState] = useState({
    mood: false,
    projects: [],
  });
  
  const handleAddingMood = () =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        mood: true
      }
    })
  }

  const handleCancelingMood = () =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        mood: false
      }
    })
  }

  const handleInputsSave = (projectData) =>{
    const newProject= {
      ...projectData,
      id: uuidv4
    };
    setProjectsState(prevState =>{
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
console.log(projectsState);
  return (
    <main className='h-screen py-4 px-4 flex gap-12'>
      <ProjectSidebar handleAddingMood={handleAddingMood} projects={projectsState.projects}/>
      {
        projectsState.mood ?
          <NewProject handleInputsSave={handleInputsSave} handleCancelingMood={handleCancelingMood}/>:
          <NoProjectSelected handleAddingMood={handleAddingMood}/>
      }
    </main>
  )
}

export default App

