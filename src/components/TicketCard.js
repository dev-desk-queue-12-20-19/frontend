import React from 'react';

export default function TicketCard(props) {
  // const ticket = props.ticket;
  
  return (
    <div className="TicketCard">
      <p>Id number {props.ticket.id}</p>
      <h2>Title: {props.ticket.title}</h2>
      <h2>Description: {props.ticket.description}</h2>
      <button>Delete</button>
      <button>Edit Ticket</button>
    </div>
  );
}