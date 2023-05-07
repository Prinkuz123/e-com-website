import React, { useContext, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart,FaUser} from 'react-icons/fa'
import './Style.css'
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";


import Form from "react-bootstrap/Form";
import '@fortawesome/fontawesome-free/css/all.css';
import { myContext } from "../../Context/Context";






const Main = () => {
const contestData=useContext(myContext)
const {productdetails} = contestData;
console.log(productdetails);
  const inputref=useRef(null)
  const Searchhandle=()=>{
    const inputdata=inputref.current.value
// const filterdata=productdetails.filter(e => e.name)
    // console.log(filterdata);
  }
  return (
    <>
      <Navbar bg="light" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="#" style={{
            fontFamily:"cursive"
          }}>Rishi's Cart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/Admin">Home</Nav.Link>
              <Nav.Link as={Link} to="product">Shop</Nav.Link>
              
              <Nav.Link href="#" disabled>
                About Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                ref={inputref}
              />
              <Button variant="outline-success"  onClick={Searchhandle}>Search</Button>
             

            </Form><div className="main-bskt">
            <Link to="/Basket" ><FaShoppingCart size={24} /></Link>
            </div>
            <div className="main-lgn">
            <Link to="/Login"><FaUser size={24} /></Link>
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Main;
