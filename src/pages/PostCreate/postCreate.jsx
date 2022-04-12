import React from "react";
import './styles.css';
import api from "../../utils/Api";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export function PostCreate(setItems) {
  const navigate = useNavigate();
  // const[memberInfo, setMemberInfo] = useState({
  //     title: "",
  //     name: "",
  //     about: "",
  //     text: "",
  //     email: "",
  //     image: "",
  //     tags: []
  // });
  const {register, handleSubmit, formState: { errors }} = useForm({
    mode: "onBlur"
});
  function handleBackClick() {
    navigate(-1);
  }
  // function handleChange (event) {
  //     setMemberInfo(() => event.target.name == "tags" ? {...memberInfo, [event.target.name] : event.target.value.split(",")} : {...memberInfo, [event.target.name]: event.target.value})
  // }
  // function handleCreate(event) {
  //     event.preventDefault();
  //     console.log(postInfo);
  //     setMemberInfo({
  //       title: "",
  //       name: "",
  //       about: "",
  //       text: "",
  //       email: "",
  //       image: "",
  //       tags: []
  //     })
  // }
  function onPostSubmit(postInfo) {
    let tagsArray = postInfo.tags.split(",") || [];
      const newPostListAfterCreate = {
      title: postInfo.title,
      image: postInfo.image,
      text: postInfo.text,
      tags: tagsArray
    }
        api.setPostCreate(newPostListAfterCreate)
      .then(() => {
        api.getPostList()
        .then((newPostListAfterCreate) => {
           setItems(newPostListAfterCreate)
        })
      })
  }
  return (
    <div>
      <div>
        <a href="#" className="button__back" onClick={handleBackClick}>
          Назад
        </a>
      </div>
      <form className="postCreate" onSubmit={handleSubmit(onPostSubmit)}>
        {/* <div className="postCreate__area"> */}
          <div className="postCreate__area_title">
            <h2>Страница создания поста</h2>
          </div>
          <div className="postCreate__section">
          <label className="postCreate__title">
            Заголовок поста*:
            <input
              type="text"
              {...register("title", { required: "Это поле обязательно" })}
              placeholder="Введите заголовок"
            />
          </label>
          <div>{errors?.title && <p className="postCreate__error">{errors?.title?.message}</p>}</div>
          <label className="postCreate__name">
            Введите имя:
            <input
              type="text"
              {...register("name")}
              placeholder="Введите имя"
            />
          </label>
          <label className="postCreate__about">
            Расскажите о себе:
            <input
              type="text"
              {...register("about")}
              placeholder="Расскажите о себе"
            />
          </label>
          <label className="postCreate__text">
            Ваш текст*:
            <input
              type="text-area"
              {...register("text", { required: "Это поле обязательно" })}
              placeholder="Ваш текст"
            />
          </label>
          <div>{errors?.text && <p className="postCreate__error">{errors?.text?.message}</p>}</div>
          <label className="postCreate__email">
            Введите email*:
            <input
              type="email"
              {...register("email", { required: "Это поле обязательно" })}
              placeholder=" Ваш email"
            />
          </label>
          <div>{errors?.email && <p className="postCreate__error">{errors?.email?.message}</p>}</div>
          <label className="postCreate__avatar">
            Добавьте аватар:
            <input
              type="text"
              {...register("image")}
              placeholder="Ваш аватар"
            />
          </label>
          <label className="postCreate__tags">
            Добавьте тэги поста:
            <input type="text" {...register("tags")} placeholder="Тэги поста" />
          </label>
          </div>
          <button className="post__create">
            Создать
          </button>
          <div className="postCreate__description">* - поля, обязательные для заполнения.</div>
        {/* </div> */}
      </form>
    </div>
  );
}
