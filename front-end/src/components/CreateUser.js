import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import "./userLogin.css"
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const CreateUser = () => {

    const [ user, setUser ] = useState({
        first_name: "",
        last_name: "",
        age: 16,
        email: "",
        user_name: "",
        password: "",
    })

    let navigate = useNavigate();

    const handleSubmit = (e) => {
       user.age = Number(user.age)
       console.log(user)
        e.preventDefault();
        axios.post(`${API}/auth/sign_up`, user)
        .then(() => {
            navigate("/users/login")
        }   
        )
        .catch((c) => {
            console.log(c)
        })
    }

    const handleInput = (e) => {
        setUser({...user, [e.target.id] : e.target.value})
    }

    return (
        <form className="userSignIn-container">
          
          <Card style={{ width: '30rem' }} className="sign_up_card">
            <Card.Title className="sign_up_card_welcome">Welcome to Happly Clocks!</Card.Title>
            <Card.Body>
              <Card.Title>First Name: </Card.Title>
              <Card.Text>
                <input type="text" id="first_name" value={user.first_name} onChange={handleInput} />
              </Card.Text>
              <Card.Title>Last Name: </Card.Title>
              <Card.Text>
                <input type="text" id="last_name" value={user.last_name} onChange={handleInput} />
              </Card.Text>
              <Card.Title>Age: </Card.Title>
              <Card.Text>
                <input type="number" id="age" min="16" value={user.age} onChange={handleInput} />
              </Card.Text>
              <Card.Title>Email: </Card.Title>
              <Card.Text>
                <input type="email" id="email" value={user.email} onChange={handleInput} />
              </Card.Text>
              <Card.Title>Username: </Card.Title>
              <Card.Text>
                <input type="text" id="user_name" value={user.user_name} onChange={handleInput} />
              </Card.Text>
              <Card.Title>Password: </Card.Title>
              <Card.Text>
                <input type="password" id="password" value={user.password} onChange={handleInput}/>
              </Card.Text>
  
                <Button variant="success" type="submit" onClick={handleSubmit}>Sign Up</Button>
      
            </Card.Body>
          </Card>
        </form>
    )
}

export default CreateUser