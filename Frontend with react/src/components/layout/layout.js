import React, { Component } from 'react'
import LoginForm from '../login form/login_form'
import Navbar from '../navbar/navbar'
import css from './layout.module.css'
import ImgShow from '../ImgShow/ImgShow'
import { BrowserRouter, Route } from 'react-router-dom'
import Teachers from '../teachers/teachers'
import trump from '../../assets/img/trump.jpg'
import Projects from '../projects/projects'
import Thesis from '../thesis/thesis'


class layout extends Component {

  state = {
    loginIsOpen : true
  }


  toogleLogIn = () => {
    this.setState({
      loginIsOpen : !this.state.loginIsOpen
    });
  }



  render () {

    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={ImgShow}/>
        <div className={css.Div}>
          <Route exact path='/' render={props => <LoginForm {...props} isOpen={this.state.loginIsOpen} loginClicked={this.toogleLogIn} />} />
          <Route exact path='/teachers' component={Teachers}/>
          <Route exact path='/projects' component={Projects} />
          <Route exact path ='/thesis' component={Thesis} />
        </div>
        
        
      </BrowserRouter>
    );
  }
  
}

export default layout;
