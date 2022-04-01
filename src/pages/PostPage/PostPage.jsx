import React, { useState, useEffect, useCallback } from "react";
import api from "../../utils/Api";
// import Spinner from "./Spinner";
// import { message } from "antd";
import { Post } from "../../components/Post/post";
import { useParams } from "react-router-dom";
import { useApi } from '../../hooks/useApi';

export const PagePost = ({handlePostLike}) => {
  // const [post, setPost] = useState([]);
  const {postID} = useParams();

//без useCallback будет постоянный ререндер с запросами
  const postParam = useCallback(() => {
    return api.getPostById(postID)
  }, [postID])

  const {dataPost: post, loading, error} = useApi(postParam);
  
  return (
    <>
      {/* {loading && <Spinner/>} */}
      {/* {error && <NotFound/>} */}
      {post && <Post {...post}  onPostLike={handlePostLike}/>}
    
    </>
  );
};
