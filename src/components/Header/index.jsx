import React from "react";
import { Logo } from "../Logo";
import './styles.css';
import { Btn } from "../Button";


export const Header = () => {
    return (
        <>
        <header className="posts__header">
            <div className="posts__header_container">
               <Logo/>
                <Btn/> 
         </div>

        </header>
        </>
    )
}