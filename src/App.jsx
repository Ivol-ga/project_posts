import React from "react";
import { CardsList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


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

export const App = () => {
  const handleBtnCreate = () => {
    console.log("Есть контакт");
  };

  return (
    <>
      <Header />

      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" marginLeft="10px" marginTop="5px" href="https://react-learning.ru/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="https://react-learning.ru/posts"
        >
          Post
        </Link>
        <Typography color="text.primary">All posts</Typography>
      </Breadcrumbs>

      <main className="cards__container">
        <div className="cards__container_greetings">
          Welcome to Our Image Board!
        </div>
        <Title>Create a post that your friends and family will cherish. Choose  our from to create an original statement about you and your hobbies!</Title>
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

        <CardsList />
      </main>
      <Footer />
    </>
  );
};
