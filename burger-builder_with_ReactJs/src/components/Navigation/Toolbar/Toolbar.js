import {React, useState, useEffect} from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/logo';
import Sidedrawer from '../../sideDrawer/sidedrawer'


const Toolbar = (props) => {

  const [sideDrawer, setSideDrawer] = useState(false);

  const toogleButton = () =>{
    setSideDrawer(!sideDrawer);
  }

  return (
    <header className={classes.Toolbar}>
      {/* <Sidedrawer toggle={this.state.sideDrawer} /> */}
      <div onClick= {set}>MENU</div>
      <Logo/>
      <nav>
        ...
      </nav>
    </header>
  );
}

export default Toolbar
