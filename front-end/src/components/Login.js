import React, {useState} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';


const Login = (props) => {


    const [credentials, setCredentials] = useState({
      username: '',
      password: '',
    });

    const onSubmit = (e) => {
      e.preventDefault();


      axiosWithAuth()
        .post('/auth/login', credentials)
        .then(result => {
          console.log('post login', result.data.token)
          localStorage.setItem('token', result.data.token);
          props.history.push('/');
          console.log('login', props)
        })
        .catch(error => 
          console.log('login post error', error));
        
  };
      

 const handleChange = (e) => {
   console.log(e)
   setCredentials({
     ...credentials,
     [e.target.name] : e.target.value
     
   })
 };

    


  return (
    <>
      
      <h1>Dev Desk</h1>
      <form onSubmit = {onSubmit}>
          <input
              type ='text'
              name ='username'
              placeholder = 'username'
              value ={credentials.username}
              onChange = {handleChange}
              />

              <br></br>

              <input
                  type ='password'
                  name ='password'
                  placeholder = 'password'
                  value ={credentials.password}
                  onChange = {handleChange}
                  />

                  
                    <br></br>

                  <button>login</button>
                 
      </form>
      
    </>
  );
};

export default Login;