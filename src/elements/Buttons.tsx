	import React from "react";
	import "./Elem.css" 
interface ButtonsProps{
	children:string 
  
}

export const Buttons:React.FC<ButtonsProps>=({children, ...props})=> {
  return (
    <div >
      <button  className="btn" {...props}>{children}</button>
    </div>
  );
}

export default Buttons;