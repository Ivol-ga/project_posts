import React from "react";
import './styles.css';
import { postData } from '../../posts.js';
import { Card } from "../Card";

const title = postData.map(elem => elem.title);
const avatar = postData.map(elem => elem.image);
const about = postData.map(elem => elem.about);
const tags = postData.map(elem => elem.tags);
const created_at = postData.map(elem => elem.created_at);
const updated_at = postData.map(elem => elem.updated_at);
let id = postData.map(x => x._id);
 
const author = postData.map(elem => elem.author);
const membName = author.map(x => x.name);

export const CardsList = () => {
    return (
        <div className="cards">
            {postData.map(dataItem => {
                return <Card key={dataItem._id} {...dataItem}/>
            })}
         
        </div>
    )
}