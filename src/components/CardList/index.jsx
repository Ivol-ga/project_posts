import React, {useState} from "react";
import './styles.css';
import { Card } from "../Card";

export const CardsList = ({list, onPostLike, currentAuthor}) => {
   
    return (
        <div className="cards">
            {list.map(dataItem => {
                return <Card key={dataItem._id} {...dataItem}  onPostLike={onPostLike} currentAuthor={currentAuthor} /*onPostDelete={onPostDelete}*//>
            })} 
        </div>
     
    )
}