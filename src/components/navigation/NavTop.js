import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../stylesheets/NavTop.css'

function NavTop() {
    return (
        
        <Navbar expand="md" variant="light" bg="light" className="border-bottom mb-3">
            <Navbar.Brand href="/" className="logo">Parth Shah</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            <Nav variant="" defaultActiveKey="0" className="ml-auto">
                <Nav.Item>
                    <Nav.Link eventKey="0" >
                    HOME
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" >
                    SKILLS
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" >
                    EXPERIENCE
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" >
                    PROJECTS
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
            
        
    )
}

export default NavTop;