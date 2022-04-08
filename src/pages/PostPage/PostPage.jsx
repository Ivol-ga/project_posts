import React, { useState, useEffect, useCallback } from "react";
import api from "../../utils/Api";
// import { message } from "antd";
import { Post } from "../../components/Post/post";
import { useParams } from "react-router-dom";
import { useApi } from '../../hooks/useApi';

// import Spinner from './../../Spinner/index';

export const PagePost = ({handlePostLike, cards}) => {
  // const [post, setPost] = useState([]);
  const {postID} = useParams();

//без useCallback будет постоянный ререндер с запросами
  const postParam = useCallback(() => {
    return api.getPostById(postID)
  }, [postID, cards])

  const {dataPost: post, isLoadingPost, error} = useApi(postParam);

  
  return (
    <>
  
      {post && <Post {...post}  onPostLike={handlePostLike}/>}
  
    </>
  );
};
