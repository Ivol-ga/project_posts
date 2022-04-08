import React from "react";
import './styles.css';
export function Modal({active, setActive}) {
  console.log(active)
  return (
    
    <div className="modalPost" onClick={(event)=> setActive(false)
  }>
        <div className="modalPost__edit" onClick={()=>console.log("false")}>
        </div>
    </div>
  );
}
