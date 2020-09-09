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
                                            <Card.Title className="experience-page-card-title m-0"><a href="http://advancedenergyanalytics.com/" target="_blank">Advance Energy Analytics</a></Card.Title>
                                        </Card.Header>
                                        <Card.Body className="experience-page-card-body">    
                                            <Card.Text>  
                                                <h5>Position : Software Engineer Intern</h5>
                                            </Card.Text> 
                                            <Card.Text>
                                                <h6>Role Description:</h6>
                                                <p>Built cloud architecture to migrate company resources on AWS infrastructure practicing Agile principles</p>   
                                                <p>Worked on deployment of AWS Lambda functions for computation and EC2 instance for web-portal</p>    
                                                <p>Automated the PDF report generation process using puppeteer with S3 triggers on NodeJS Lambda function</p>                        
                                            </Card.Text>
                                            {/* <button className="details-button">Detailed Role</button> */}
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
                                                <p>Developed cross-browser/platform compatible responsive webpages, components with HTML, CSS, JavaScript, React, Material-UI and deployed them in a CI/CD environment using Jenkins pipelines</p>
                                                <p>Redesigned webpages and achieved a total reduction of 40% in load time, improving user experience</p>    
                                                <p>Developed Redux stores and actions, performed API integrations, set-up session storage for customer facing portal</p>                              
                                            </Card.Text>
                                            {/* <button className="details-button">Detailed Role</button> */}
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
                                                <p>Revamped user interface using WordPress and integrated MySQL database for efficient data flow</p>
                                                <p>Performed SEO and utilized Google AdWords online marketing platform to increase web traffic by 35%</p>                                  
                                            </Card.Text>
                                            {/* <button className="details-button">Detailed Role</button>                                     */}
                                            
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
