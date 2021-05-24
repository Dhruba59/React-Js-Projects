import React, { Component } from "react";
import css from './teacher.module.css';
import TeacherDetailsModal from '../teacher_detail';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Collapse,
} from "react-bootstrap";

class teacher extends Component {
  state = {
    isOpen: false,
    isModalOpen : false
  };

  toogleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  OpenModals = () => {
    this.setState({
      isModalOpen : true
    });
  }
  modalClose = () => {
    this.setState({
      isModalOpen : false
    });
  }

  render() {

    let TeacherInfoModal = null;
    if(this.state.isModalOpen) {
      TeacherInfoModal = (<TeacherDetailsModal OpenModal={this.OpenModals} modalClosed = {this.modalClose} />);
    }

    return (
      <div className={css.Teacher}>
        {TeacherInfoModal}
        <Card onClick={this.OpenModals} border="info" style={{  width: "16rem"}}>
          <Card.Img style={{maxWidth:'16rem', maxHeight:'8rem'}} variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>`Hey I am {this.props.name}. I am a {this.props.designation}.`</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default teacher;
