import React, { useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StyledLogin = styled.div`
margin-top: 200px;

width: 300px;
height: 200px;

`;


export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();
  
//   const isLoading = () => {

//   };

  const submit = () => {
    axios.post('http://localhost:5000/api/login', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/friends');
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <StyledLogin className='login'>
      <div className='login-inputs'>
        username <input ref={usernameRef} type="text" />
        <br />
        password <input ref={passwordRef} type="password" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </StyledLogin>
  );
}
