import React from "react";

export default function Friend(props) {
  return (
    <div>
      <h5>Name: {props.friend.name}</h5>
      <br />
      <h5>Age: {props.friend.age}</h5>
      <br />
      <h5>Email: {props.friend.email}</h5>
    </div>
  );
}
