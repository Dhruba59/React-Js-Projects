import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/logo';
import Sidedrawer from '../../sideDrawer/sidedrawer'
import { Component } from 'react';

class Toolbar extends Component {

  state = {
    sideDrawer: false
  }

  toogleButton = () =>{
    this.setState({sideDrawer : !this.state.sideDrawer});
  }

  

  render(){
    return (
      <header className={classes.Toolbar}>
        {/* <Sidedrawer toggle={this.state.sideDrawer} /> */}
        <div onClick= {this.toogleButton}>MENU</div>
        <Logo/>
        <nav>
          ...
        </nav>
      </header>
    )
  }
}

export default Toolbar
