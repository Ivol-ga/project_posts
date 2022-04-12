import React from "react";
import './styles.css';
export function Modal({active, setActive, children, getIdPostForForm}) {
  console.log(active)
  // console.log(getIdPostForForm);
  return (
    
    <div className={active ? "modalPost-active" : "modalPost"} onMouseDown={()=> setActive(false)
  }>
        <div className="modalPost__edit" onMouseDown={(event)=>event.stopPropagation()}>
          {children}
        </div>
    </div>
  );
}
