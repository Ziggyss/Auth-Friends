import React, { useState } from "react";
import axios from 'axios';


const friendsApi = "http://localhost:5000/api/friends";

const initialFormValues = {
  name: "",
  age: "",
  email: ""
};

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
  
    const instance = axios.create({
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
  
    return instance;
  };


export default function AddFriend({ setFriends}) {

    
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };


  const submitFriend = () => {
    axiosWithAuth()
      .post(friendsApi, formValues)
      .then(response => {
        setFriends(response.data);
        setFormValues(initialFormValues);
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h3>Add New Friend</h3>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={onChange}
      />
      <label htmlFor="age">Age: </label>
      <input
        type="text"
        name="age"
        value={formValues.age}
        onChange={onChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        name="email"
        value={formValues.email}
        onChange={onChange}
      />
      <button onClick={submitFriend}>Add Friend</button>
    </div>
  );
}
