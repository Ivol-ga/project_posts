import React, {useContext} from "react";
import './styles.css';
import { ReactComponent as Like } from './img/like.svg'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { useNavigate } from "react-router-dom";
import { CurrentAuthorContext } from '../../Context/currentAuthorContext';
dayjs.locale('ru')
export const Post = ({onPostLike, image, onPostDelete, _id, likes, title, text, tags, created_at, updated_at, author}) => {
  const dataPostCreate = dayjs(created_at).format('dddd, MMMM DD.YYYY');
  const dataPostUpdate = dayjs(updated_at).format('dddd, MMMM DD.YYYY');
  const CurrentAuthor = useContext(CurrentAuthorContext);
  const liked = likes && likes.some(id => id === CurrentAuthor?._id); 
  const navigate = useNavigate();
  function handleLikeClick() {
           onPostLike({_id, likes});
  }
  function handleBackClick() {
    navigate(-1);
}
  return (
    <div className="postPage">
      <div>
        <a href="#" className="button__back" onClick={handleBackClick}>
          Назад
        </a>
      </div>
      <div className="postPage__card">
      <h2 className="postPage__title">{title}</h2>
        <div className="card__picture">
          <div className="likes__count">
            {likes.length}
            <button className="card__picture_like" onClick={handleLikeClick}>
              <Like
                className={liked ? "card__like-icon_active" : "card__like-icon"}
              />
              <img src={author?.like}  className="card__like-icon"/>
            </button>
          </div>
          <div className="user">
          <img src={image} alt="image" className="member__image" />
          <div className="member__avatar">
             <img src={author?.avatar} alt="avatar" className="member__avatar_card" />
             <span>{author?.name}</span>
          </div>
          
            
            <p>{author?.email}</p>
            <div>{text}</div>
          </div>
          <div className="tags">{tags}</div>
          <div className="card__created">Создано: {dataPostCreate}</div>
          <div className="card__updated">Изменено: {dataPostUpdate}</div>
        </div>
      </div>
    </div>
  );
};