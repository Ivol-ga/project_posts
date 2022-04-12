import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import './styles.css';
export function Modal({ active, setActive, children, getIdPostForForm }) {
  console.log(active);
  // console.log(getIdPostForForm);
  return (
    
    <div
      className={active ? "modalPost-active" : "modalPost"}
      onMouseDown={() => setActive(false)}
    >
      <div
        className="modalPost__edit"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <CloseOutlined
          className="modalPost__close"
          onClick={() => setActive(false)}
        />
        {children}
      </div>
    </div>
  );
}
