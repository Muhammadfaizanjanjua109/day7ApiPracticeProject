import React from 'react'
import {Nav, Navbar,Container } from 'react-bootstrap'

function Mainnav() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Day8</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About Us</Nav.Link>
        <Nav.Link href="#pricing">Contact Us</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
    <br />
   
  </>
  )
}

export default Mainnav