import React from 'react';

const Login = (props) => <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0}}>
  <div>
    <span style={{width: 100, justifyContent: 'right'}}>username</span>
    <input name="username"/>
  </div>
  <div>
    <span style={{width: 100, justifyContent: 'right'}}>password</span>
    <input name="password"/>
  </div>
  </div>

export default Login;
