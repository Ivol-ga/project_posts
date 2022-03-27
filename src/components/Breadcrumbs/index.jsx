import React from "react";
import './styles.css';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export const BreadComponent = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        color="inherit"
        marginLeft="10px"
        marginTop="5px"
        href="https://react-learning.ru/"
      >
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
  );
};