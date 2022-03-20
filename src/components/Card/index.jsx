import React from "react";
import './styles.css';


export const Card = ({title, image, tags, created_at, updated_at, author: {name, about, email, avatar}}) => {
  return (
    <div className="card">
      <a href="#" className="card__link">
        {title}
      </a>
      <div className="card__picture">
        <img src={image} alt="picture" className="member__pic" />
        <div className="user">
              <a>{name}</a>
              <p>{about}</p>
              <b>{email}</b>
            </div>
            <div className="tags">{tags}</div>
      <div className="card__created">Создано: {created_at}</div>
      <div className="card__updated">Изменено: {updated_at}</div>
    </div>
    </div>
  );
};