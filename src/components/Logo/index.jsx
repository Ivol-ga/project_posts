import React from "react";
import './styles.css';
import logo from './img/logo.png';


export const Logo = () => {
    return (
        <div>
             <a href="https://react-learning.ru/posts" className="logo">
           <img src={logo} alt="logo" className="logo__posts"/>      
        </a>
        <div className="logo__remix">Remix posts</div>
        </div>
       
    )
}