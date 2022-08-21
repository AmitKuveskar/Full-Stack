import './App.css';
import React from 'react';
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { Row,Col,Container } from "reactstrap";
import NavBar from './component/NavBar';
import Home from "./component/Home";
import AllStudents from "./component/AllStudents";
import Sidebar from './component/SideBar';
import AddStudent from './component/AddStudent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './component/Update';



  function App(){
    return (
    <div className="container">
      <Router>
      
      <Container>
      <NavBar/>
            <Row>
        <Col md={4}>
               <Sidebar/>
       </Col>
      <Col md={8}>
       <Routes>
            <Route path="/" element={<Home/>} exact /> 
            <Route path="/View" element={<AllStudents/>} exact />
            <Route path="/Add" element={<AddStudent/>} exact />
            <Route path="/Update/:id" element={<Update/>} exact />
          
            
            
            

            
             
            
            
        </Routes>
     
      </Col>
      </Row>
       
      
       
       </Container>
       </Router>
      
       <ToastContainer/>
      </div>
      
    );
  }

export default App;
