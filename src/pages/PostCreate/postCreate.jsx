import React, {useContext} from "react";
import './styles.css';
import 'antd/dist/antd.css';
import { useNavigate } from "react-router-dom";
import { CurrentAuthorContext } from '../../Context/currentAuthorContext';
// import Spinner from '../Spinner/index';

export function PostCreate() {
  //   const CurrentAuthor = useContext(CurrentAuthorContext);
  const navigate = useNavigate();
  function handleBackClick() {
    navigate(-1);
  }
  return (
    <form className="postCreate">
        <div>
          <a href="#" className="button__back" onClick={handleBackClick}>
            Назад
          </a>
        </div>
        <label>
            Введите имя:
            <input type="text"/>
            
            </label>
          </form>
  );
}
