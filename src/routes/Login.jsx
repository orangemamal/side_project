import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  function loginCheck() {
    navigate('/main');
  }

  return (
    <div>
      <input type="text"/>
      <input type="password"/>
      <button onClick={() => loginCheck()}>LOGIN</button>
    </div>
  );
};

