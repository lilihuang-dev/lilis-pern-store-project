import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userLogin.css"
import Swal from "sweetalert2";
import { Button, Card } from 'react-bootstrap';
import {useParams, useNavigate} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function UserLogin ({logText, setLogText, logInUser, setLogInUser}) {
    const [user,setUser] = useState({
        user_name: "",
        password: "",
    });
   
    const navigate = useNavigate();
    const logInId = useParams()
    console.log(logInId)
    const handleInput =(e)=> {
        setUser({...user,[e.target.id]: e.target.value})
    }

    const handleSubmit =(e)=> {
        e.preventDefault();

        axios.post(`${API}/auth/login`, user)
          .then(res => {
            setLogText("Log Out")
            const {uid} = res.data.payload
            navigate(`/users/${uid}`)
          }) 
          .catch(error => {
            Swal.fire({
              title: 'Fail to log in!',
              text: 'Please try again or sign up as an user.',
              icon: 'info',
              timer: 2500,
            })
            console.log(error)
          })
    }
   
    useEffect(()=> {
      axios.get(`${API}/users/${logInId}`)
          .then(res => {
            
            setLogInUser(res.data.payload)
          
          }) 
          .catch(error => {
            console.log(error)
          })
    }, [logText])

    return (
        <form className="userLogin-container">
          <Card style={{ width: '20rem' }} className="login-card">
            <Card.Body>
              <Card.Title>Username: </Card.Title>
              <Card.Text>
                <input type="text" id="user_name" value={user.user_name} onChange={handleInput} required/>
              </Card.Text>
              <Card.Title>Password: </Card.Title>
              <Card.Text>
                <input type="password" id="password" value={user.password} onChange={handleInput} required/>
              </Card.Text>
              {/* <Card.Link> */}
                  <Button variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
              {/* </Card.Link> */}
          
              <Card.Link href="/users/sign_up">
                  <Button variant="success">New? Sign up here.</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </form>
    )
}

export default UserLogin;