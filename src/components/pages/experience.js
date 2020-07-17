import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Spring } from 'react-spring/renderprops'
import '../../stylesheets/experience.css'

function experience() {
    return (
        <div className="experience-page">
        <Spring
        from = {{ marginLeft: -500 }}
        to = {{ marginLeft:0 }}
        config = {{ duration: 500 }}
        >
            {props => (
                <div style = {props}>
                    <Container className="pt-3 pb-3">
                        <h3 className="experience-page-title">My Professional Work Experience...</h3>
                        <Spring
                        from = {{ opacity: 0 }}
                        to = {{ opacity: 1}}
                        config = {{ delay: 500, duration: 1000 }}
                        >
                            {props => (
                                <div style = {props}>
                                    <Card className="experience-page-card mt-4">
                                        <Card.Header className="experience-page-card-header">
                                            <Card.Title className="experience-page-card-title m-0"><a href="https://www.advancedretailea.com/" target="_blank">Advance Energy Analytics</a></Card.Title>
                                        </Card.Header>
                                        <Card.Body className="experience-page-card-body">    
                                            <Card.Text>  
                                                <h5>Position : Software Engineer Intern</h5>
                                            </Card.Text> 
                                            <Card.Text>
                                                <h6>Role Description:</h6>
                                                <p>Planning and assisting the deployment of company's software platform on Amazon Cloud computing environment.</p>                               
                                            </Card.Text>
                                            <button className="details-button">Detailed Role</button>
                                        </Card.Body>
                                    </Card>
                                    <Card className="experience-page-card mt-4">
                                        <Card.Header className="experience-page-card-header">
                                            <Card.Title className="experience-page-card-title m-0"><a href="https://www.kretiva.com/" target="_blank">Kretiva - The Collaborative Market Place</a></Card.Title>
                                        </Card.Header>
                                        <Card.Body className="experience-page-card-body">    
                                            <Card.Text>  
                                                <h5>Position : FrontEnd Developer Intern</h5>
                                            </Card.Text> 
                                            <Card.Text>
                                                <h6>Role Description:</h6>
                                                <p>Supported the development of company’s online e-commerce platform using React in a CI/CD environment</p>
                                                <p>Responsible for developing and maintaining webpages, email templates and performing API integrations </p>                                  
                                            </Card.Text>
                                            <button className="details-button">Detailed Role</button>
                                        </Card.Body>
                                    </Card>
                                    <Card className="experience-page-card mt-4">
                                        <Card.Header className="experience-page-card-header">
                                            <Card.Title className="experience-page-card-title m-0"><a href="https://geyserwala.com/" target="_blank">Innovative Distributors – Water Heater Solutions</a></Card.Title>
                                        </Card.Header>
                                        <Card.Body className="experience-page-card-body">       
                                            <Card.Text>  
                                                <h5>Position : Web Developer Intern</h5>
                                            </Card.Text> 
                                            <Card.Text>
                                                <h6>Role Description:</h6>
                                                <p>Restructured front end of e-commerce website and integrated the database to present live inventory information</p>
                                                <p>Promoted and marketed products using Google AdWords platform, which increased website hits by 30-40%</p>                                  
                                            </Card.Text>
                                            <button className="details-button">Detailed Role</button>                                    
                                            
                                        </Card.Body>
                                    </Card>                                    
                                </div>
                            )}
                        </Spring>
                        
                    </Container>
                </div>
            )}
            
        </Spring>
        </div>
    )
}

export default experience
