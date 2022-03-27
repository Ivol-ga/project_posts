import React from "react";
import './styles.css';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 20px;
  text-align: left;
  color: #1e1435;
  padding-left: 10px
`
const BtnBackNext = styled.button`
  background: ${props => props.primary ? "rgb(120, 183, 241)" : "white"};
  color: ${props => props.primary ? "white" : "rgb(120, 183, 241)"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(120, 183, 241);
  border-radius: 3px;
  cursor: pointer;
`;
export const Main = ({author:{name, email, about}}) => {
   const handleBtnCreate = () => {
    console.log("Есть контакт");
  };
  return (
    <main className="cards__container">
      <div className="cards__container_greetings">
        Welcome to Our Image Board!
      </div>
      <div className="author__info"> 
      <div className="author__info_name">{name &&  <span>{name}: {about}</span>}</div> 
      <div className="author__info_email"> {email && <span>{email}</span>}</div>
      <Title className="cards__container__description">
        Create a post that your friends and family will cherish. Choose our from
        to create an original statement about you and your hobbies!
      </Title>
        <div>
        <button className="author__info_btn">
          Изменить
        </button>
        </div>
      </div>
      <button className="btn__create" onClick={handleBtnCreate}>
        Create post
      </button>
      <div>
        <BtnBackNext as="a" href="https://react-learning.ru/">
          Home
        </BtnBackNext>
        <BtnBackNext primary as="a" href="https://react-learning.ru/posts">
          Posts
        </BtnBackNext>
      </div>
    </main>
  );
};