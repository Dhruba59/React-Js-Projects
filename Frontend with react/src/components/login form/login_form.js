import React from "react";
import { Form, Button } from "react-bootstrap";
import css from "./loginForm.module.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const login_form = (props) => {

  let loginForm = null;
  if(props.isOpen) {

    loginForm = (
      <div id='loginDiv' className={css.Login_form}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control size="sm" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control size="sm" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group size="sm" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button onClick={props.loginClicked}  variant="dark" type="log in">
            <Link to="/new-post">Log In</Link>
          </Button>
        </Form>
      </div>
    );
  }



  return (
    <Router>
      {loginForm}
      {/* <Route exact path="/new-post" component={Abc}/> */}
    </Router>
  );
};

export default login_form;
