import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import css from './project.module.css';

const project = (props) => {


  return (
  <div >
    <Accordion className={css.Accordion}>
      <Accordion.Toggle className={css.Toggle} as={Button} variant="light" eventKey="0">
        {props.title} || <span className={css.Tags}>Tags: {props.topics.join(', ')}</span>
      </Accordion.Toggle>
   
    <Accordion.Collapse  eventKey="0">
      <Card bg='light' className={css.Collapse}>
        <Card.Title className={css.TitleOfCard}><u>{props.title} </u></Card.Title>
        <Card.Text><h6>Tags</h6>:{props.topics}</Card.Text>
        <Card.Text><h6>Date</h6>:{props.date}</Card.Text>
        <Card.Text><h6>Supervisor</h6>:{props.supervisor}</Card.Text>
        <Card.Text><h6>Team members</h6>:{props.members.join(', ')}</Card.Text>
        <Card.Text><h6>Abstract</h6>:{props.abstract}</Card.Text>
        
      </Card>
    </Accordion.Collapse>
    </Accordion>
    </div>
  );
}

export default project;
