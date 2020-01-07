import React, { useState, useEffect } from "react";

import axiosWithAuth from '../utils/axiosWithAuth';
import TicketCard from './TicketCard';

function Dashboard() {
  const [ticketList, setTicketList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get("/tickets")
    .then(response => {
      console.log(response);
      setTicketList(response.data);
    })
    .catch(error => {
      console.log(error); 
    })
  }, [])

  const deleteTicket = id => {
    axiosWithAuth()
    .delete(`/tickets/${id}`)
    .then(() => {
      setTicketList(ticketList.filter(ticket => ticket.id !== id))
    })
    .catch(error => {
      console.log('delete error',error)
    })
  }

  return(
    <div>
      {
        ticketList.map(ticket => {
          return <TicketCard deleteTicket={deleteTicket}
          ticket={ticket} key={ticket.id} />
        })
        }
    </div>
  )
}

export default Dashboard;