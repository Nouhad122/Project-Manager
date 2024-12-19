import React from 'react';
import logo from '../assets/no-projects.png';
import Button from './Button';

const NoProjectSelected = ({handleAddingMood}) => {
  return (
    <div className='text-center w-2/3 px-20 py-20'>
      <img src={logo} alt='projects list image' className='w-16 h-16 mx-auto'/>
      <h2 className='text-xl my-4 font-bold text-purple-800'>No Project Selected</h2>
      <p className='text-sm text-stone-500'>Select a Project or get started with a new one</p>
      <p className='mt-4'>
        <Button onClick={handleAddingMood}>Create New Project</Button>
      </p>
    </div>
  )
}

export default NoProjectSelected
