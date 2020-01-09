import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import axiosWithAuth from "../utils/axiosWithAuth";
import StudentCard from './StudentCard';
import TicketCard from "./TicketCard";
import { Card, Grid, Button, Segment } from 'semantic-ui-react';



function Dashboard(props) {
  const [ticketList, setTicketList] = useState([]);
  
  const userObject = JSON.parse(sessionStorage.getItem("userDetails"));
  console.log("userObject", userObject);
  
  useEffect(() => {
    axiosWithAuth()
      .get("/tickets")
      .then(response => {
        console.log(response);
        setTicketList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteTicket = id => {
    axiosWithAuth('helper')
      .delete(`/tickets/${id}`)
      .then(() => {
        setTicketList(ticketList.filter(ticket => ticket.id !== id));
      })
      .catch(error => {
        console.log("delete error", error);
      });
  };

  const markComplete = id => {
    axiosWithAuth('helper')
      .put(`/tickets/${id}`, { status: "complete" })
      .then(response => {
        console.log(response);
      
        setTicketList(ticketList.filter(ticket => ticket.id !== id));
      })
      .catch(error => {
        console.log("update error", error);
      });
  }; 

  // const assignToMe = id => {
  //   axiosWithAuth()
  //     .put(`/tickets/${id}`, { helper_id: `${id}` })
  //     .then(response => {
  //       console.log(response);

  //     })
  //     .catch(error => {
  //       console.log("assignment error", error);
  //     });
  // };

  // console.log("User object from ...", props.userObject);
  return (
    <div>
      {
        userObject.user_type === "helper" ? ticketList.map(ticket => {
           return <TicketCard
              deleteTicket={deleteTicket}
              markComplete={markComplete}
              ticket={ticket}
              key={ticket.id}
            />

        }) : ticketList.filter(ticket => userObject.user_id === ticket.student_id).map(ticket => {
          return (
            <div key={ticket.id}>

              <StudentCard ticket={ticket} key={ticket.id} />

            </div>
          )
        })
      }
    </div>
  )

}

export default Dashboard;
