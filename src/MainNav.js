import React from 'react'
import {Nav, Navbar,Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
function Mainnav() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand>Day8</Navbar.Brand>
      <Nav className="me-auto">
     <Link className='NavLink' to="/">Home</Link>
        <Link  className='NavLink'  to="/about">About Us</Link>
        {/* <Link to="/Day9">Contact Us</Link> */}
      </Nav>
      </Container>
    </Navbar>
    <br />
   
  </>
  )
}

export default Mainnav