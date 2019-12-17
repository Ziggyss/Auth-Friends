import React, { useState, useEffect } from "react";
import Friend from "./Friend";
import axios from "axios";
import AddFriend from "./AddFriend";

function axiosWithAuth() {
  const token = localStorage.getItem("token");

  const instance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    }
  });

  return instance;
}

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(error => {
        alert(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Friends</h2>
      <p>
        {friends.map(friend => (
          <Friend friend={friend} key={friend.id} setFriends={setFriends} />
        ))}
      </p>
      <h2>Add Friend</h2>
      <AddFriend setFriends={setFriends} />
    </div>
  );
}
