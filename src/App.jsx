import React, { useState } from 'react';
import ProjectSidebar from './Components/ProjectSidebar.jsx';
import NewProject from './Components/NewProject.jsx';
import NoProjectSelected from './Components/NoProjectSelected.jsx';
import SelectedProject from './Components/SelectedProject.jsx';

const App = () => {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  
  const handleAddingMood = () =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleCancelingMood = () =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectedProject = (id) =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  const handleInputsSave = (projectData) =>{
    const newProject= {
      ...projectData,
      id: Math.random()
    };
    setProjectsState(prevState =>{
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleDeleteProject = () =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== prevState.selectedProjectId)
      }
    })
  }

  const handleTasks = (task) =>{
    setProjectsState(prevState =>{
      const newTask = {
        task: task,
        projectId: prevState.selectedProjectId,
        id: Math.random()
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }

  const handleDeleteTask = (id) =>{
    setProjectsState(prevState =>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  const filteredTasks = projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject handleInputsSave={handleInputsSave} handleCancelingMood={handleCancelingMood}/>
  }
  else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected handleAddingMood={handleAddingMood}/>
  }
  else{
    content = <SelectedProject project={selectedProject} handleDeleteProject={handleDeleteProject}
     tasks={filteredTasks} handleTasks={handleTasks} handleDeleteTask={handleDeleteTask}/>
  }
console.log(projectsState);
  return (
    <main className='h-screen py-4 px-4 flex gap-12'>
      <ProjectSidebar handleAddingMood={handleAddingMood} projects={projectsState.projects}
       handleSelectedProject={handleSelectedProject} selectedProjectId = {projectsState.selectedProjectId}/>
      {content}
    </main>
  )
}

export default App

