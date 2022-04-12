import React from "react";
import 'antd/dist/antd.css';
import './styles.css';
import {  Stack, Pagination, PaginationItem } from "@mui/material";
import { Link } from 'react-router-dom';



const PaginationMUI = ({page, pageQty, pageLimit, setPage}) => {

  return (
    <Stack
    spacing={2}
    sx={{
      mb: 2,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    >
    <Pagination 
    count={Math.ceil(pageQty/pageLimit)} 
    page={page} 
    onChange={(event,num) =>
      setPage(num)
    }
    variant="outlined"
    color="primary"
    // renderItem={(item) => {
    //   (
    //     <PaginationItem
    //     component={Link}
    //     to={`?page=${item.page}`}
    //     {...item}
    //     />
    //   )
    // }}
    />
    </Stack>
  );
};

 export default PaginationMUI;