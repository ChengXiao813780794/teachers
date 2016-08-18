import React from 'react';

const Loading = (props) => <div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0}}>
  <img src="/public/img/loader.gif"/>
</div>

export default Loading;
