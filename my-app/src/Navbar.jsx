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
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="path/to/your/image.png"
            alt="INV@DER$"
            style={{ maxHeight: '30px' }}
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Book</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              {Object.keys(planetsData).map(planetKey => (
                <NavDropdown.Item key={planetKey} onClick={() => onSelectPlanet(planetKey)}>
                  {planetsData[planetKey].title}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CoolNavbar;
