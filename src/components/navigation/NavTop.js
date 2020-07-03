import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import '../../stylesheets/NavTop.css'

function NavTop() {
    return (
        
        <Navbar expand="md" variant="dark" className="navigation-bar">
            <Navbar.Brand href="/parth-shah" className="navigation-bar-logo"><p className="logo">Parth Shah</p></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
            <Nav defaultActiveKey="0" className="ml-auto">
                <Nav.Item>
                    <Nav.Link eventKey="0" className="navtop-link">
                        <Link to="/parth-shah">HOME</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
<<<<<<< HEAD
                    <Nav.Link eventKey="1" >
                        <Link to='/parth-shah/skills'>SKILLS</Link>
=======
                    <Nav.Link eventKey="1" className="navtop-link" disabled>
                        <Link to='/skills'>SKILLS</Link>
>>>>>>> e6be2048043b557797207d4ee90bf71a396f2fb1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" className="navtop-link" disabled>
                        <Link to="/experience">EXPERIENCE</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" className="navtop-link" disabled>
                        <Link to="/projects">PROJECTS</Link>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
            
        
    )
}

export default NavTop;