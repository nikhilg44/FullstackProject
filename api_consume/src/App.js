import React from 'react';
import Login from './Login.js';
import Api from './Api2.js'
import Refer from './Refs.js'
import Register from './Register.js';
import Googlelogin from './googlebutton.component.js'
import {Badge} from 'react-bootstrap';
function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h2><Badge>My React App</Badge></h2>
      <Login/>
      <Googlelogin/>
    </div>
  );
}

export default App;
