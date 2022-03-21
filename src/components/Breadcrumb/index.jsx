import React from "react";
import './styles.css';
import { Breadcrumb } from 'antd';


export const Breadcrumb = () => {
    return (
    <div className="breadCrumb">
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>,
    document.getElementById('container')
    </div>
    )
}