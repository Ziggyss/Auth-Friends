import React from "react";

export default function Friend(props) {
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <br />
      <h5>Age: {props.age}</h5>
      <br />
      <h5>Email: {props.email}</h5>
    </div>
  );
}
