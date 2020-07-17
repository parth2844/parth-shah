import React from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import { Spring } from 'react-spring/renderprops'
import '../../stylesheets/projects.css'

function projects() {
    return (
        <div className="projects-page">
        <Spring
        from = {{ marginLeft: -500 }}
        to = {{ marginLeft:0 }}
        config = {{ duration: 500 }}
        >
            {props => (
                <div style = {props}>
                    <Container className="pt-3 pb-3">
                        <h3 className="projects-page-title">My Personal and Academic Projects...</h3>
                        <Spring
                        from = {{ opacity: 0 }}
                        to = {{ opacity: 1}}
                        config = {{ delay: 500, duration: 1000 }}
                        >
                            {props => (
                                <div style = {props}>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Chat Rooms</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: Node, JavaScript</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Programmed an online chat application with the functionality to join different chatting groups or rooms.</p>  
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/chat-app"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Snake Game</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: JavaScript</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Programmed the traditional game of snake using Vanilla Javascript.</p>  
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/snake-game"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Weather App</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: React, JavaScript</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Used the weatherstack API to allow users to check weather at different locations around the world.</p>  
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/Weather-App"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">House Price Prediction</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: Pyhthon, Scikit-Learn, Machine Learning</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Performed data exploration to analyze the features affecting the Sale price of houses.</p>  
                                                    <p>Developed a prediction model with 88% accuracy to estimate the Sale Price using only prominent factors.</p>                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/House-Price-Prediction"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Sudoku Solving Intelligent Agent</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: Java</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>The project aims at development of a smart agent for solving the classic Sudoku board game using Artificial Intelligence techniques.</p>  
                                                    <p>Agent uses a backtracking approach along with heuristics for selecting the most optimal variable and value to generate solution.</p>
                                                    <p>Boards of increasing complexities (sizes greater than 9x9) are also tested with this algorithm.</p>     
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/Sudoku-Solver"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>


                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Computation of Mathematical Equations Using Gestures</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: Python, OpenCV, Tensorflow, Keras</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Aimed to minimize the use of keyboard and develop a gesture-based system, using device’s camera.</p>  
                                                    <p>Accomplished the task of recognizing gestures and numerical input using the OpenCV library to track a specified colored object.</p>        
                                                    <p>Created a CNN model to train and test the model for classification of numbers using the MNIST dataset.</p>     
                                                    <p>Finalized product was successful in providing the various functionalities of a calculator with added support for a few types of equations.</p>                
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/Computing-mathematical-eqautions-using-visual-input"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Website Threat Detection</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: Python, Machine Learning</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Implemented a python script to develop different models for classifying malicious and benign websites.</p>  
                                                    <p>Evaluated the performance of models using measures such as precision, recall and f1score.</p>        
                                                    <p>The best performing model achieved 95% accuracy with 0.79 f1 score.</p>     
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/Malicious-and-Benign-Websites"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Educational Institute Database</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: MySQL, Java</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Created a database to maintain records for an educational institute.</p>  
                                                    <p>Integrated a GUI tool to filter and display summarized records to speed up user and database interaction.</p>     
                                                </div>
                                            </Card.Text>
                                            
                                            <a><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
                                        </Card.Body>
                                    </Card>

                                    <Card className="projects-page-card mt-4">
                                        <Card.Header className="projects-page-card-header">
                                            <Card.Title className="projects-page-card-title m-0">Italian Avenue – Online Food Ordering</Card.Title>
                                        </Card.Header>
                                        <Card.Body className="projects-page-card-body"> 
                                            <Card.Text>
                                                <p>Technologies Used: JavaScript, PHP</p>
                                            </Card.Text>
                                            <Card.Text>
                                                <h6>Project Description:</h6>
                                                <div className="project-description">
                                                    <p>Composed a Software Requirement Specifications document by interacting with different users of the system.</p>
                                                    <p>Built an online food-ordering platform programmed with functionalities to order delivery, reserve a table, check for various offers and discounts.</p>
                                                    <p>Integrated the website with database using PHP to update real-time information about availability of dishes, tables and track delivery.</p>
                                                </div>
                                            </Card.Text>
                                            
                                            <a href="https://github.com/parth2844/Online-Food-Ordering"><button className="github-button">View on Github</button></a>
                                            {/* <button className="demo-button">Demo</button> */}
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

export default projects
