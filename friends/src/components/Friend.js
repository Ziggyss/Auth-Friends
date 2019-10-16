import React, { useState } from "react";
import axiosWithAuth from "../axios/axios";

const friendsApi = "http://localhost:5000/api/friends";

export default function Friend({
  friend: { id, name, age, email },
  setFriends
}) {
  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`${friendsApi}/${id}`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div>
      <h5>Name: {name}</h5>
      <br />
      <h5>Age: {age}</h5>
      <br />
      <h5>Email: {email}</h5>
      <button
        onClick={() => {
          deleteFriend(id);
        }}
      >
        Delete Friend
      </button>
    </div>
  );
}

