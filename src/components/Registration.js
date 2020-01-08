import React, {useState} from "react";
import axios from "axios";

export const Registration = () =>  {

  const [form, setForm] = useState(
    
    {
        email: "",
        username: "",
        password: "",
        role: "",
        
  })

  const [fire, setFire] = useState(
    false
  )

    

    
  

 function handleChange(event) {
    setForm({
      ...form, [event.target.name]: event.target.value
    });
    // console.log(form)
  }
  // function handleChange1(event) {
  //   setForm({
  //     //...form, username: event.target.value
  //   });
  //   console.log(form)
  // }

 function handleSubmit(event) {
    event.preventDefault();
    setFire(
       true
    )
    console.log(form)
  }
    if (fire) {
      console.log(form)
      axios
        .post("https://devdesk-queue-2020.herokuapp.com/api/auth/register", form)

        .then(response => {
           if (response.statusText === "Created") {
          setFire(false);
          
          alert(response.statusText);
          console.log(response)
           }
        })
        .catch(error => {
          // this.setState({ fire: false });
          console.log("registration error", error);
        });
    }


  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="username"
            name="username"
            placeholder="User name"
            value={form.username}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <input
            type="role"
            name="role"
            placeholder="Role"
            value={form.role}
            onChange={handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
}

