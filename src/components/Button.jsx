import React from 'react';

const Button = ({color,bgColor,size,text,borderRaduis}) => {
  return (
    <button type="button" style={{backgroundColor:bgColor,color,borderRaduis}} className={`text-${size} p-3 hover:drop-shadow-xl`}>
       {text}
    </button>
  );
}

export default Button;
