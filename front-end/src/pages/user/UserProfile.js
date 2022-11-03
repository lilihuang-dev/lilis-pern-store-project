import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./userProfile.css"

const API = process.env.REACT_APP_API_URL;

function UserProfile() {
    
  const [user, setUser] = useState({});
  let { uid } = useParams();
  let navigate = useNavigate();
console.log(uid)
  useEffect(() => {
    axios
      .get(`${API}/users/${uid}`)
      .then((response) => {
        setUser(response.data.payload);
      })
      .catch((error) => {
        console.log(error);
      });

  }, [uid]);

  return (
    <div className='userProfile-container'>
        <h1 className='userProfile-title'>Welcome to your Dashboard</h1>
        <div className="userProfile-detailInfo">
            <h3>User Name:</h3>
            <div className='userProfile-name'>{user.first_name} {user.last_name}</div>
        </div>
    </div>
  )
}

export default UserProfile