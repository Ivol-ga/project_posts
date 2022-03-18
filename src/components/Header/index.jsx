import React from "react";
import { Button } from "../Button";
import { Logo } from "../Logo";
// import ReactDOM from "react-dom";

import './styles.css';



export const Header = () => {
    return (
        <>
        <header className="posts__header">
            <div className="posts__header_container">
               <Logo/>
               <Button/>


                
                
              

            </div>

        </header>
        </>
    )
}