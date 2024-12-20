import React from 'react';

const Input = ({label, isTextArea, id, ref,...props}) => {
  const classes = "w-full py-4 px-3 bg-purple-100 border-2 outline-none border-transparent focus:border-solid focus:border-2 focus:border-purple-800 max-h-60";
  return (
    <p className='flex flex-col gap-2 mb-8'>
      <label htmlFor={id} className='text-purple-800 font-bold cursor-pointer w-fit'>{label}</label>
      {
        isTextArea ? <textarea {...props} ref={ref} id={id} className={classes} /> : <input {...props} ref={ref} id={id} className={classes} />
      }
    </p>
  )
}

export default Input
