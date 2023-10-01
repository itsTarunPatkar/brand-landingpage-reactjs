import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function NavbarJSX() {
  return (
    <Navbar bg="glass " variant='dark' expand="lg" className="fixed-top" style={{ minHeight: '90px' }}>
      <Container fluid className='px-lg-5'>
        <Navbar.Brand style={{ fontFamily: 'Josefin Sans', fontSize: '30px' }} href="#home">Brand Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav " >
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#Aboutus">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
