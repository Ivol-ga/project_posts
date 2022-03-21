import React from "react";
import './styles.css';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
dayjs.locale('ru')

export const Card = ({
  title,
  text,
  image,
  tags,
  created_at,
  updated_at,
  author: { avatar, name, about, email },
}) => {
  const dataPostCreate = dayjs(created_at).format('dddd, MMMM DD.YYYY');
  const dataPostUpdate = dayjs(updated_at).format('dddd, MMMM DD.YYYY');
  return (
    <div className="card">
      {/* <a href="#" className="card__link"> */}
        {/* {title}
      </a> */}
      <div className="card__picture">
        {/* <img src={image} alt="picture" className="member__pic" /> */}
        <div className="user">
          <img src={avatar} alt="avatar" className="member__avatar" />
          <a>{name}</a>
          <b>{email}</b>
          <p>{title}</p>
          <div>{text}</div>
        </div>
        <div className="tags">{tags}</div>
        <div className="card__created">Создано: {dataPostCreate}</div>
        <div className="card__updated">Изменено: {dataPostUpdate}</div>
      </div>
    </div>
  );
};