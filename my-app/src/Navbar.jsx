import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import planetsData from './data/planets.json';

function CoolNavbar({ onSelectPlanet }) {
  const [rocketVisible, setRocketVisible] = useState(false);
  const [rocketPosition, setRocketPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setRocketVisible(true);
  };

  const handleMouseLeave = () => {
    setRocketVisible(false);
  };

  const handleNavbarMouseMove = (e) => {
    if (rocketVisible) {
      const navbarRect = document.querySelector('.navbar').getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - navbarRect.left, 0), navbarRect.width);
      const y = Math.min(Math.max(e.clientY - navbarRect.top, 0), navbarRect.height);
      setRocketPosition({ x, y });
    }
  };

  const handleRocketMouseMove = (e) => {
    // Handle rocket-specific mouse move events here
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      style={{
        height: '80px',
        position: 'relative',
        cursor: rocketVisible ? 'none' : 'auto',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleNavbarMouseMove}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image src='\planets\bird_2-removebg-preview.png' alt="Logo" style={{ height: '100px', width: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/booking">
              Book
            </Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              {Object.keys(planetsData).map((planetKey) => (
                <NavDropdown.Item key={planetKey} as={Link} to={`/planet-info/${planetKey}`}>
                  {planetsData[planetKey].title}
                </NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {rocketVisible && (
        <Image
          src="https://cdn.pixabay.com/animation/2022/07/31/06/27/06-27-17-124_512.gif"
          alt="Rocket"
          style={{
            position: 'absolute',
            width: '30px',
            height: 'auto',
            left: `${rocketPosition.x}px`,
            top: `${rocketPosition.y}px`,
            zIndex: -1,
          }}
          onMouseMove={handleRocketMouseMove}
        />
      )}
    </Navbar>
  );
}

export default CoolNavbar;
