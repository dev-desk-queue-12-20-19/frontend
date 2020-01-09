import React from 'react';
import { withRouter } from "react-router-dom";
import { Card, Button } from 'semantic-ui-react';


function StudentCard(props) {

console.log(props)
  return (
    <Card>
      <Card.Content>
      <Card.Header>Student number: {props.ticket.student_id}</Card.Header>
      <Card.Description>Title: {props.ticket.title}</Card.Description>
      <Card.Description> Description: {props.ticket.description}</Card.Description>
      <Card.Description>Status: {props.ticket.status} </Card.Description>
      <Button  type="submit" onClick={()=> props.history.push('/new-ticket')}>Create New Request</Button>
      </Card.Content>
    </Card>
  );
}

const StudentCardRouter = withRouter (StudentCard)

export default StudentCardRouter











