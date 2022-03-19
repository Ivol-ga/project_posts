import React from "react";
import './styles.css';


export const Card = ({title, image, tags, created_at, updated_at}) => {
  return (
    <div className="card">
      <a href="#" className="card__link">
        {title}
      </a>
      <div className="card__picture">
        <img src={image} alt="picture" className="member__pic" />
        {/* <div className="member__name">{name}</div> */}
      </div>
      {/* <div className="name">{name}</div>
      <div className="email">{email}</div> */}
      {/* <p className="card__description">{about}</p> */}
      <div className="tags">{tags}</div>
      <div className="card__created">{created_at}</div>
      <div className="card__updated">{updated_at}</div>
    </div>
  );
};