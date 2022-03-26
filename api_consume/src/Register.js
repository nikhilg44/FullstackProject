import React, { Component,useEffect,useState } from "react";
import axios from 'axios';
import {Form,Button,Row,Col,Badge} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import {IconButton} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
export default function Register(){
    const navigate=useNavigate();
    const [target, setTarget] = useState({
        firstname: "",
        lastname:"",
        emailid: "",
        password:""
    });
    const [pass, setPass] = useState(false);
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type",
          "Access-Control-Allow-Credentials":"true"
        }
      };
    // useEffect(() => {
    //     // POST request using axios inside useEffect React hook
    //     axios.post('http://localhost:3001/store-data', {target})
    //         .then(response => {
    //             console.log(response)
    //         });
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // });
    function handleRegisterClick(e) {

        navigate('/')
      }
    //   let body=JSON.stringify(target);
    //   console.log(body)
      function handleButtonClick(e) {
        axios.post('http://localhost:3001/store-data',target)
        .then(response => {
            console.log(response)
        });
        navigate('/')
      }
      function firstNameChange(e) {
        setTarget({...target,firstname : e.target.value})
        console.log(target.firstname)
    }
    function lastNameChange(e) {
      setTarget({...target,lastname : e.target.value})
      console.log(target.lastname)
  }
      function emailChange(e) {
        setTarget({...target,emailid : e.target.value})
        console.log(target.emailid)
    }
    function passwordChange(e) {
      setTarget({...target,password : e.target.value})
      console.log(target.password)
  }
  const handleClickShowPassword = () => {
    console.log("re-rendered pass")
    setPass(!pass);
  };
        return (
            <Row>
            <Col></Col>
            <Col xs={2} style={{backgroundColor:"orange",textAlign:"center"}}>
            <Form>
                <h3 className="m-2 pl-5" ><Badge>Register</Badge></h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={(e)=>firstNameChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={(e)=>lastNameChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>emailChange(e)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <div style={{display:'flex'}}>
                    <input type={pass ? "text" : "password"} className="form-control" placeholder="Enter password" onChange={(e)=>passwordChange(e)}/>
                    <IconButton style={{marginLeft:'-36px'}}
              onClick={handleClickShowPassword}
            >
              {pass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            </div>
                </div>
                <Button type="button" className="m-2 pl-5" onClick={(e)=>handleButtonClick(e)}>Register</Button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={(e)=>handleRegisterClick(e)}>log in?</a>
                </p>
            </Form>
            </Col>
            <Col></Col>
            </Row>
        );
}