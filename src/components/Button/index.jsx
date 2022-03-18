import React from "react";
import './styles.css';



export const Button = () => {
    return (
        <div className="header__buttons">
          <button className="btn__home"> Home</button>
          <button className="btn__remixDocs"> RemixDocs</button>
          <button className="btn__gitHub"> GitHub</button>
        </div>
    )
}