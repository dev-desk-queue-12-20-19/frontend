import React from 'react';
import { withRouter } from "react-router-dom";

function StudentCard(props) {

console.log(props)
  return (
    <div className="TicketCard">
      <p>Student number {props.ticket.student_id}</p>
      <h2>Title: {props.ticket.title}</h2>
      <h2>Description: {props.ticket.description}</h2>
      <p>Status: {props.ticket.status} </p>
      <button type="submit" onClick={()=> props.history.push('/new-ticket')}>Create New Request</button>

    </div>
  );
}

const StudentCardRouter = withRouter(StudentCard);

export default StudentCardRouter;











