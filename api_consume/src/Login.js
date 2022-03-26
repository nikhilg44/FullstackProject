import React,{useState} from 'react';
import App from './App.js';
import News from './News.js';
import { useNavigate } from 'react-router';
import {Form,Button,Row,Col} from 'react-bootstrap';
import {IconButton} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from 'axios';
import { propTypes } from 'react-bootstrap/esm/Image';
function Login (props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
      pass: "",
      showPass: false,
    });
    const navigate = useNavigate();
    function handleClick(e) {
        // if(email=='' || password.pass==''){
        // e.preventDefault()
        // console.log("cannot proceed further")
        // }
        // else{}

        console.log("req started")
        // const fun = setTimeout(async () => {
        //   try{
        //   const res=await axios('http://localhost:3001/retrieve-data',{"email":email,"password":password.pass});
        //       console.log("response")
        //       console.log(res.status)
        //   }catch (err) {
        //     // Handle Error Here
        //     console.log(err);
        // }
        // console.log("completed")
        // navigate('/news',{state:{email:email}})
        // console.log(email)
        //  },50);
        // //fun();
        axios.post('http://localhost:3001/retrieve-data',{"email":email,"password":password.pass})
        .then(response => {
            console.log(response)
            // if(props.email)
            // {
            //   setEmail('invalid')
            // }
            console.log("completed")
            navigate('/news',{state:{email:email}})
            console.log(email)
        })
        .catch((err) => {
           setEmail('invalid')
          console.log(err, "catch block is executed")
      })

      }
      function emailChange(e) {
          setEmail(e.target.value)
          console.log(email)
      }
      function passwordChange(e) {
        setPassword({...password,pass : e.target.value})
        console.log(password.pass)
    }

    const handleClickShowPassword = () => {
      console.log("re-rendered")
      setPassword({ ...password, showPass: !password.showPass});
    };
    function handleRegisterClick(e) {
        navigate('/register')
      };
    
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <div>
    <Row>
    <Col></Col>
    <Col xs={2} style={{backgroundColor:"orange"}}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <div style={{display:'flex',height:'40px'}}>
        <Form.Control  type="email" placeholder="Enter email"  onChange={(e)=>{emailChange(e)}} />
        </div>
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <div style={{display:'flex',height:'40px'}}>
        <Form.Control  type={password.showPass ? "text" : "password"} placeholder="Password" onChange={(e)=>{passwordChange(e)}} />
            <IconButton style={{marginLeft:'-45px'}}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {password.showPass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
        </div>
    </Form.Group>
    </Form>
    <Button variant="success" onClick={(e)=>handleClick(e)}>
        Login
    </Button>
    <div>If you dont have a account, Please register here.</div>
    <Button onClick={(e)=>handleRegisterClick(e)}>Register</Button>
    {email=='invalid'?<div style={{color:"red"}}>Invalid Credentials!</div>:<div></div>
    }
   </Col>
   <Col></Col>
   </Row>
    </div>
  );
}

export default Login;