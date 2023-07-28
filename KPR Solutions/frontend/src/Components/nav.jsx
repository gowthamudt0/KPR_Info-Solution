import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Navbars() {
  const navbarStyle = {
    backgroundColor: 'darkblue',
    padding: '10px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
  };

  const centerNavbar = {
    display:"flex",
    justifyContent: 'center',
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4" style={{ ...navbarStyle, ...centerNavbar }}>
        <Container>
          <Navbar.Brand href="#/" style={linkStyle}>upload</Navbar.Brand>
         
            <Nav.Link href="#/create" className="nav" style={linkStyle}>gallery</Nav.Link>
         
        </Container>
      </Navbar>
    </>
  );
}
