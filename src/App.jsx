import React from "react";
import { Breadcrumb, Pagination } from "antd";
import { CardsList } from "./components/CardList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Button } from 'antd';


export const App = () => {
  const handleBtnCreate = () => {
    console.log('Есть контакт'); 
  }
  return (
    <>
      <Header/>
        {/* ? */}
      <Breadcrumb/>
          <main className="cards__container">
            <div className="cards__container_greetings">
            Welcome to Our Image Board! 
            </div>
            <p>We're stoked that you're here. 🥳</p>
              <button className="btn__create" onClick={handleBtnCreate}  
          >Create post</button>
            <CardsList/>
           
      </main>
      {/* ? */}
      <Pagination defaultPageSize={10}/> 
      <Footer /> 
    </>
  );
  }
