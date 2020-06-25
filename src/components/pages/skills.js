import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Spring } from 'react-spring/renderprops'

function skills() {
    return (
        
        <Spring
        from = {{ marginLeft: -500 }}
        to = {{ marginLeft:0 }}
        config = {{ duration: 500 }}
        >
            {props => (
                <div style = {props}>
                    <Container>
                        <h3>Here are some of my Technical Skills...</h3>
                        <Spring
                        from = {{ opacity: 0 }}
                        to = {{ opacity: 1}}
                        config = {{ delay: 500, duration: 1000 }}
                        >
                            {props => (
                                <div style = {props}>
                                    <Card bg= "light" border="dark" className="mt-4">
                                        <Card.Header><Card.Title className="m-0">Programming Languages</Card.Title></Card.Header>
                                        <Card.Body>                                            
                                            <Card.Text>
                                                Java, Python, JavaScript, C, C++
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card bg= "light" border="dark" className="mt-4">
                                        <Card.Header><Card.Title className="m-0">Web and Database</Card.Title></Card.Header>
                                        <Card.Body>                                            
                                            <Card.Text>
                                                React, Node.js, HTML, CSS, PHP, MySQL, MongoDB
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card bg= "light" border="dark" className="mt-4">
                                        <Card.Header><Card.Title className="m-0">Framework and Tools</Card.Title></Card.Header>
                                        <Card.Body>                                            
                                            <Card.Text>
                                                Git, Material-UI, Bootstrap, Figma, Scikit-learn, Tensorflow, OpenCV, Keras
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

export default skills
