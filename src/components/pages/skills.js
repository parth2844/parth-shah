import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Spring } from 'react-spring/renderprops'
import '../../stylesheets/skills.css'

function skills() {
    return (
        <div className="skills-page">
        <Spring
        from = {{ marginLeft: -500 }}
        to = {{ marginLeft:0 }}
        config = {{ duration: 500 }}
        >
            {props => (
                <div style = {props}>
                    <Container className="pt-3 pb-3">
                        <h3 className="skills-page-title">Here are some of my Technical Skills...</h3>
                        <Spring
                        from = {{ opacity: 0 }}
                        to = {{ opacity: 1}}
                        config = {{ delay: 500, duration: 1000 }}
                        >
                            {props => (
                                <div style = {props}>
                                    <Card className="skills-page-card mt-4">
                                        <Card.Header className="skills-page-card-header">
                                            <Card.Title className="skills-page-card-title m-0">Programming Languages</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="skills-page-card-body">                                            
                                            <Card.Text>
                                                Java, Python, JavaScript, C, C++, SQL
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="skills-page-card mt-4">
                                        <Card.Header className="skills-page-card-header">
                                            <Card.Title className="skills-page-card-title m-0">Web and Database</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="skills-page-card-body">                                            
                                            <Card.Text>
                                                HTML, CSS, React.js, Node.js, PHP, MySQL, MongoDB
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="skills-page-card mt-4">
                                        <Card.Header className="skills-page-card-header">
                                            <Card.Title className="skills-page-card-title m-0">Frameworks</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="skills-page-card-body">                                            
                                            <Card.Text>
                                                Sikit-learn, OpenCV, Tensorflow, Keras, Material-UI, Bootstrap
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="skills-page-card mt-4">
                                        <Card.Header className="skills-page-card-header">
                                            <Card.Title className="skills-page-card-title m-0">Tools</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="skills-page-card-body">                                            
                                            <Card.Text>
                                                Git, Jenkins, Jira, Confluence, Figma
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
        </div>    
        
    )
}

export default skills
