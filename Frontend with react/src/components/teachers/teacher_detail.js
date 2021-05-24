import React from "react";
import {Modal} from 'react-bootstrap';
import css from './teacher_details.module.css';

const teacher_details = (props) => {
  console.log('asdfasd');

  return (
    <div className={css.Div}>
      <Modal
        show = {props.OpenModal}
        onHide={props.modalClosed}
        size ='xl'
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Teacher Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!</h4>
          <h5>designation</h5>
          <h6> contact infos</h6>
          <h6>Education</h6>
          <h6>Research Interest</h6>
          <h6>Research Projects</h6>
          <h6>Awards</h6>
          <h6>Journal publications</h6>
          <h4>name</h4>
          <h5>designation</h5>
          <h6> contact infos</h6>
          <h6>Education</h6>
          <h6>Research Interest</h6>
          <h6>Research Projects</h6>
          <h6>Awards</h6>
          <h6>Journal publications</h6>
          <h4>name</h4>
          <h5>designation</h5>
          <h6> contact infos</h6>
          <h6>Education</h6>
          <h6>Research Interest</h6>
          <h6>Research Projects</h6>
          <h6>Awards</h6>
          <h6>Journal publications</h6>
          <h4>name</h4>
          <h5>designation</h5>
          <h6> contact infos</h6>
          <h6>Education</h6>
          <h6>Research Interest</h6>
          <h6>Research Projects</h6>
          <h6>Awards</h6>
          <h6>Journal publications</h6>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default teacher_details;