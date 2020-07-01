import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../stylesheets/NavTop.css'

function NavTop() {
    return (
        
        <Navbar expand="md" variant="light" bg="light" className="border-bottom">
            <Navbar.Brand href="/parth-shah" className="logo">Parth Shah</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            <Nav variant="tabs" defaultActiveKey="0" className="ml-auto">
                <Nav.Item>
                    <Nav.Link eventKey="0">
                        <Link to="/parth-shah">HOME</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="1" disabled >
                        <Link to='/skills'>SKILLS</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" disabled >
                        <Link to="/experience">EXPERIENCE</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" disabled >
                        <Link to="/projects">PROJECTS</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
            
        
    )
}

export default NavTop;