import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import 'antd/dist/antd.css';
import './index.css';
import { BrowserRouter } from "react-router-dom";
// import { Post } from './components/Post/post';
import { PagePost } from './pagePost';



ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);