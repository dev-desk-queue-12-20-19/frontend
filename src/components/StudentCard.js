import React from 'react';


export default function StudentCard(props) {
console.log(props)
  return (
    <div className="TicketCard">
      <p>Id number {props.ticket.id}</p>
      <h2>Title: {props.ticket.title}</h2>
      <h2>Description: {props.ticket.description}</h2>
      <p>Status: {props.ticket.status} </p>
      <button onClick={() => props.createTicket(props.ticket.id)}>create Ticket</button>

      <button>Assign to me</button>
    </div>
  );
}













