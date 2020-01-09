import React from 'react';
import { withRouter } from "react-router-dom";
import { Button, Card, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


function StudentCard(props) {

console.log(props)
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Card.Group>
    <Card>

      <Card.Content>
      <Segment stacked>

      <Card.Header>Student number: {props.ticket.student_id}</Card.Header>
      <Card.Description>Title: {props.ticket.title}</Card.Description>
      <Card.Description> Description: {props.ticket.description}</Card.Description>
      <Card.Description>Status: {props.ticket.status} </Card.Description>
      <Button  basic color='green' type="submit" onClick={()=> props.history.push('/new-ticket')}>Create New Request</Button>

      </Segment>

      </Card.Content>
    </Card>
    </Card.Group>
    </Grid.Column>

    </Grid>

  );
}

const StudentCardRouter = withRouter(StudentCard);

export default StudentCardRouter;











