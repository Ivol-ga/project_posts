import React, { useState, useEffect } from "react";
import { CardsList } from "../../components/CardList";
import api from "../../utils/Api";
import { Main } from '../../components/MainText/index';
// import { message } from "antd";
export const PageCatalog = ({currentAuthor, handlePostLike, handlePostDelete, items, handleClickAuthorUpdate, handleBtnCreate}) => {
   
  return (
    <>
      <Main author={currentAuthor} onUpdateAuthor={handleClickAuthorUpdate} handleBtnCreate={handleBtnCreate}/>
      <CardsList list={items} onPostLike={handlePostLike} onPostDelete={handlePostDelete} currentAuthor={currentAuthor} />
    </>
  );
};
