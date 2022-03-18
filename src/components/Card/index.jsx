import React from "react";
import './styles.css';


export const Card = ({title, avatar, email, about, tags, created_at, updated_at}) => {
  return (
    <div className="card">
      <a href="#" className="card__link">
        {title}
      </a>
      <div className="card__picture">
        <img src={avatar} alt="picture" className="member__pic" />
        <div className="member__email">{email}</div>
      </div>
      <p className="card__description">{about}</p>
      <div className="tags">{tags}</div>
      <div className="card__created">{created_at}</div>
      <div className="card__updated">{updated_at}</div>
    </div>
  );
};