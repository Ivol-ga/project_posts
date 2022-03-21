import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Button } from 'antd';

export const Btn = () => {
  return <>
      <div className='header__buttons'>
        <Button type="primary">Home</Button>
        <Button>Remix Docs</Button>
        <Button type="dashed">GitHub</Button>
      </div>
  </>
};
