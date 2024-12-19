import React from 'react';

const Button = ({children, whiteBtn, ...props}) => {
    const purpleBtnClass = 'text-slate-100 bg-purple-600  py-2 px-5 border-2 border-transparent transition ease-linear delay-75 hover:bg-transparent hover:border-2 hover:border-purple-600 hover:text-purple-800';
    const WhiteBtnClass = 'bg-slate-100 text-purple-900  py-2 px-5 border-2 border-transparent transition ease-linear delay-75';
  return (
    <button {...props} className={whiteBtn ? WhiteBtnClass : purpleBtnClass}>
        {children}
    </button>
  )
}

export default Button
