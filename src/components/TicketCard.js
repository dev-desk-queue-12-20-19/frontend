import React from 'react';

export default function TicketCard(props) {

  return (
    <div className="TicketCard">
      <p>Id number {props.ticket.id}</p>
      <h2>Title: {props.ticket.title}</h2>
      <h2>Description: {props.ticket.description}</h2>
      <p>Status: {props.ticket.status} </p>
      <button onClick={() => props.deleteTicket(props.ticket.id)}>Delete </button>
      <button onClick={() => props.markComplete(props.ticket.id)}>Mark Complete</button>

      <button>Assign to me</button>
    </div>
  );
}