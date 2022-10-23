import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import {useParams, useNavigate} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function UserLogin () {
    const [user,setUser] = useState({
        username: "",
        password: "",
    });
   
    const navigate = useNavigate();

    const handleInput =(e)=> {
        setUser({...user,[e.targert.id]: e.target.value})
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        // JUST FOR TEST, NOT DONE YET
        navigate("/clocks")
    }

    return (
        <form >
            <Card style={{ width: '20rem' }} className="login-card">
        <Card.Body>
          <Card.Title>Username: </Card.Title>
          <Card.Text>
            <input type="text" id="username" value={user.username} onChange={handleInput} />
          </Card.Text>
          <Card.Title>Password: </Card.Title>
          <Card.Text>
            <input type="text" id="password" value={user.password} onChange={handleInput}/>
          </Card.Text>
          {/* <Card.Link> */}
              <Button variant="success" type="submit" onClick={handleSubmit}>Submit</Button>
          {/* </Card.Link> */}
       
          <Card.Link href="#">
              <Button variant="success">New? Sign up here.</Button>
          </Card.Link>
        </Card.Body>
      </Card>
        </form>
    )
}

export default UserLogin;