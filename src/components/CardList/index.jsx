import React from "react";
import './styles.css';
import { postData } from '../../posts.js';
import { Card } from "../Card";

export const CardsList = () => {

    return (
        <div className="cards">
            {/* {postData.map(dataItem => {
                return (<Card {...dataItem}/>)
            })} */}
          <Card
          title = {postData["title"]}
          avatar = {postData["author"]["avatar"]}
          email = {postData["author"]["email"]}
          about = {postData["author"]["about"]}
          tags = {postData["tags"]}
          created_at = {postData["created_at"]}
          updated_at = {postData["updated_at"]}
          />
        </div>
    )
}