import React from 'react';
import classes from './layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => {
  return (
    <>
      <Toolbar/>
      <div>Toolbar, SideDrawer, BackDrop</div>
      <main className ={classes.Content}>
       {props.children}
      </main>
    </>
    
  );
}

export default layout;