import React from 'react';
import css from './modal.module.css';

const modal = props => {
  
  return (
    <>
      <Backdrop></Backdrop>
      <div className={css.Modal}>
        {props.children}
      </div>
    </>
  );
}