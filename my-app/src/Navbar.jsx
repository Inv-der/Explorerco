import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import planetsData from './data/planets.json';

function CoolNavbar({ onSelectPlanet }) {
  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0)',    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <Navbar expand="lg"  variant="dark" style={{ ...navbarStyle, borderBottomLeftRadius: '20%', borderBottomRightRadius: '20%' }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="\planets\bird_2-removebg-preview.png"
            alt="INV@DER$"
            style={{ maxHeight: '100px' }}
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/books">Home</Nav.Link>
            <Nav.Link href="/book">Book</Nav.Link>
            <NavDropdown
              title="Planets "
              id="navbarScrollingDropdown"
              style={{ border: 'none' }} 
            >
              {Object.keys(planetsData).map(planetKey => (
                <NavDropdown.Item key={planetKey} onClick={() => onSelectPlanet(planetKey)}>
                  {planetsData[planetKey].title}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
                <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
              </svg>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CoolNavbar;
