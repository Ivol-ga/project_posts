import React, { useState, useEffect } from "react";
import { CardsList } from "../../components/CardList";
import api from "../../utils/Api";
import { Main } from '../../components/MainText/index';
// import Spinner from "./Spinner";
// import { message } from "antd";

export const PageCatalog = ({currentAuthor, handlePostLike, items}) => {
   
// function handlePostDelete(_id) {
//   // console.log(currentAuthor);
//   let confirmDelete = confirm("Удалить пост?");
//   if (confirmDelete) {
//     api.deletePost(_id).then(() => {
//       api.getPostList().then((newPostListAfterDelete) => {
//         setItems(newPostListAfterDelete);
//       });
//     });
//   }
//   if (status === "403") {
//     alert("Запрещено удалять чужой пост")
//   }
// }
  return (
    <>
      <Main author={currentAuthor}/>
      {/* <Spinner/> */}
      <CardsList list={items} onPostLike={handlePostLike} currentAuthor={currentAuthor} />
    </>
  );
};
