import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import News from './News.js';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { useLocation,useNavigate } from "react-router-dom";
import Register from './Register.js';
import Login from './Login.js';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routers/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
function Routers()
{
  const navigate=useNavigate();
axios.interceptors.response.use((response) => {
    return response;
 }, (error) => {
    if(error.response.status == 401){
      //navigate('/',{state:{email:"invalid"}})
    }
    return Promise.reject(error);
 });
  return <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/news" element={<News locationdata={useLocation()}/>}  />
  </Routes>
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
