import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import { FaListUl, FaMoneyBillAlt, FaUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";
const Admin = () => {
  return (
    <div className="admn">
      <div className="div-admn">
        <h1 style={{ fontFamily: "cursive" }} ><Link to='/Product'>Admin</Link></h1>
        <ListGroup className="admn-list">
         <ListGroupItem>
         <FaUserCircle /> <Link to='/Admin/Adminusers'>Users</Link>
          </ListGroupItem>
          <ListGroupItem>
            <FaListUl /><Link to='/Admin/Adminproducts'>Products</Link> 
          </ListGroupItem>

          <ListGroupItem>
            
            <FaMoneyBillAlt /> Revenue
          </ListGroupItem>
        </ListGroup>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
