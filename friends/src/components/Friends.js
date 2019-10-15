import React, { useState, useEffect } from "react";
import Friend from './Friend';
import { withAuthCheck } from "./Container";

export default function Friends() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    withAuthCheck()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(error => {
        alert(error.response.data.message);
      });
  }, []);

  return (
    <div>
      <h2>Friends</h2>
      <p>
      {friends.map(friend => 
        <Friend friend={friend} />
      )}
      </p>
    </div>
  );
}
