import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
  
  return (
    props.show ?
      <>
        <Backdrop clicked={props.modalClosed}/>
        <div className={classes.Modal}>
         {props.children}
        </div>
      </>
      
      : null
  );
}

export default modal;