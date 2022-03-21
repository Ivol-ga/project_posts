import React from "react";
import { CardsList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styled from 'styled-components';


// const Title = styled.p`
// `
export const App = () => {
  const handleBtnCreate = () => {
    console.log("Есть контакт");
  };
  return (
    <>
      <Header />
      <main className="cards__container">
        <div className="cards__container_greetings">
          Welcome to Our Image Board!
        </div>
        <p>We're stoked that you're here. 🥳</p>
        <button className="btn__create" onClick={handleBtnCreate}>
          Create post
        </button>
        <CardsList />
      </main>
      <Footer />
    </>
  );
};
