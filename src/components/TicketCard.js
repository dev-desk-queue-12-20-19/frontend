import React from 'react';
import { Card, Button, Grid, Segment } from 'semantic-ui-react';


export default function TicketCard(props) {

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
    <Card.Group>
      <Card>
        <Card.Content>
          <Segment stacked>
      <Card.Header>Id number {props.ticket.id}</Card.Header>
      <Card.Description>Title: {props.ticket.title}</Card.Description>
      <Card.Description>Description: {props.ticket.description}</Card.Description>
      <Card.Description>Status: {props.ticket.status} </Card.Description>
      <Button basic color='red' onClick={() => props.deleteTicket(props.ticket.id)}>Delete </Button>
      <Button basic color='green' onClick={() => props.markComplete(props.ticket.id)}>Mark Complete</Button>

      <Button>Assign to me</Button>
      </Segment>
      </Card.Content>
      </Card>
    </Card.Group>
    </Grid.Column>

</Grid>
    
    
  );
}