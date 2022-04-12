import React from "react";
import './styles.css';
import api from "../../utils/Api";
import { useForm } from "react-hook-form";
import { Post } from './../Post/post';

export function EditPost(id, setItems, setActivePost, getIdPostForForm) {
  console.log(id);
  const {register, handleSubmit, formState: { errors }} = useForm({
    mode: "onBlur"
});
  function onPostEdit(editPost) {
    let tagsArrayEdit = editPost?.tags?.split(",") || [];
    const newPostListAfterEdit = {
      title: editPost?.title,
      image: editPost?.image,
      text: editPost?.text,
      tags: tagsArrayEdit
    }
      api.setPostEdit(newPostListAfterEdit)
      .then(() => {
        api.getPostList()
        .then((newPostListAfterEdit) => {
           setItems(newPostListAfterEdit)
        })
      })
      setActivePost(false);
  }
  return (
    <div>
      <div>
     </div>
      <form className="postEdit" onSubmit={handleSubmit(onPostEdit)}>
          <div className="postEdit__area_title">
            <h2>Редактирование поста </h2>
          </div>
          <label className="postEdit__title">
            Заголовок:
            <input
              type="text"
              {...register("title")}
              placeholder="Введите заголовок"
            />
          </label>          
          <label className="postEdit__name">
            Редактировать имя:
            <input
              type="text"
              {...register("name")}
              placeholder="Введите имя"
            />
          </label>
          <label className="postEdit__text">
            Ваш текст:
            <input
              type="text-area"
              {...register("text")}
              placeholder="Ваш текст"
            />
          </label>
          <label className="postEdit__email">
            Введите email:
            <input
              type="email"
              {...register("email")}
              placeholder=" Ваш email"
            />
          </label>
          <label className="postEdit__avatar">
            Изменить аватар:
            <input
              type="text"
              {...register("avatar")}
              placeholder="Ваш аватар"
            />
          </label>
          <label className="postEdit__tags">
            Тэги поста:
            <input
              type="text"
              {...register("tags")}
              placeholder="Тэги поста"
            />
          </label>
          <button className="post__create" 
          onClick={getIdPostForForm}
          >
            Сохранить
          </button>
        </form>
    </div>
  );
}
