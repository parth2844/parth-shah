import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Spring } from 'react-spring/renderprops'

function experience() {
    return (
        
        <Spring
        from = {{ marginLeft: -500 }}
        to = {{ marginLeft:0 }}
        config = {{ duration: 500 }}
        >
            {props => (
                <div style = {props}>
                    <Container>
                        <h3>My Professional Work Experience...</h3>
                        <Spring
                        from = {{ opacity: 0 }}
                        to = {{ opacity: 1}}
                        config = {{ delay: 500, duration: 1000 }}
                        >
                            {props => (
                                <div style = {props}>
                                    <Card bg= "light" border="dark" className="mt-4">
                                        <Card.Header><Card.Title className="m-0">Ainves – Front End Development Intern</Card.Title></Card.Header>
                                        <Card.Body>                                            
                                            <Card.Text>
                                                Involved directly in the development of company’s online e-commerce platform using React in a CI/CD environment
                                            </Card.Text>
                                            <Card.Text>
                                                Responsible for developing and maintaining webpages, email templates and performing API integrations 
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card bg= "light" border="dark" className="mt-4">
                                        <Card.Header><Card.Title className="m-0">Innovative Distributors – Web Development Intern</Card.Title></Card.Header>
                                        <Card.Body>                                            
                                            <Card.Text>
                                                Restructured front end of e-commerce website and integrated the database to present live inventory information
                                            </Card.Text>
                                            <Card.Text>
                                                Promoted and marketed products using Google AdWords platform, which increased website hits by 30-40%
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>                                    
                                </div>
                            )}
                        </Spring>
                        
                    </Container>
                </div>
            )}
            
        </Spring>
        
    )
}

export default experience
