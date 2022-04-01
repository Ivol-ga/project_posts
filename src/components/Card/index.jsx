import React, { useContext} from "react";
import './styles.css';
import { ReactComponent as Like } from './img/like.svg'
import 'antd/dist/antd.css';
import { Button } from 'antd';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { Link } from 'react-router-dom';
import { CurrentAuthorContext } from './../../Context/currentAuthorContext';
dayjs.locale('ru')

export const Card = ({onPostLike, onPostDelete, _id, likes, title, text, tags, created_at, updated_at, author: { avatar, name, email }}) => {
  const currentAuthor = useContext(CurrentAuthorContext);
    const dataPostCreate = dayjs(created_at).format('dddd, MMMM DD.YYYY');
  const dataPostUpdate = dayjs(updated_at).format('dddd, MMMM DD.YYYY');
  const liked = likes.some(id => id === currentAuthor._id); 
  function handleLikeClick() {
    onPostLike({_id, likes});
  }
  const handlePostDelete = () => {
    onPostDelete(_id);
  }
  return (
    <div className="card">
         <div className="card__picture">
           <div className="likes__count">{likes.length}
           <button className="card__picture_like" onClick={handleLikeClick}>
               <Like className={liked ? "card__like-icon_active" : "card__like-icon"}/>
                {/* <img src={like} alt="добавить в избранное" className="card__like-icon"/> */}
           </button>
           </div>
            <Link to={`/post/${_id}`} className="user">
              <img src={avatar}  className="member__avatar" />
               <b>{name}</b>
               </Link>
               <div>
               <b>{email}</b>
               <p>{title}</p>
               <div>{text}</div>
            </div>
        <div className="tags">{tags}</div>
        <div className="card__created">Создано: {dataPostCreate}</div>
        <div className="card__updated">Изменено: {dataPostUpdate}</div>
         </div>
         <Button type="primary" className="post__delete" onClick={handlePostDelete}>Удалить</Button>
    </div>
  );
};