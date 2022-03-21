import React from "react";
import './styles.css';
import { postData } from '../../posts.js';
import { Card } from "../Card";

export const CardsList = () => {
    return (
        <div className="cards">
            {postData.map(dataItem => {
                return <Card key={dataItem._id} {...dataItem}/>
            })}
         
        </div>
     
    )
}