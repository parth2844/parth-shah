import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Typical from 'react-typical'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import profile_pic from '../../assets/profile_image.jpg'
import '../../stylesheets/Home.css'

function home() {
    return (
        <div className="home-page pt-3 pb-3">
            <Row noGutters={true}>
                <Col xs={12} md={6} className="">
                    <Row noGutters={true} className="d-flex justify-content-center">
                        <Typical 
                            steps= {["Hi, I'm Parth Shah",1000]}
                            loop = {1}
                            wrapper = "h3"
                            className = "home-page-title"
                        />                        
                    </Row>
                    <Row noGutters={true} className="d-flex justify-content-center">
                        <Image src= {profile_pic} roundedCircle alt="Profile Photo" className="main-img"/>
                    </Row>                 
                </Col>
                <Col xs={12} md={6} className="">
                    <Container className="p-3 home-page-details">
                        <Tabs defaultActiveKey="about" variant="pills">
                            <Tab eventKey="about" title="About" className="pt-3 tab-details">
                                <h3><i>Something About Me...</i></h3>
                                <p>I am a student at University of California, Irvine. Originally I’m from Mumbai, India and moved to USA to pursue my Master’s Degree in Computer Science. I also hold a Bachelor of Computer Engineering Degree from Mumbai University.</p>
                                <p>As the world today builds itself around technology, it is difficult to find any application which remains stranger to Artificial Intelligence or Machine Learning. One of these applications, which sparked my interest in Computer Science came from my favourite sport, Cricket. A lightweight sticker that could be attached to cricket bats, to collect real-time data on several parameters of a cricket shot was in development. Even apart from this very interesting titbit, there were so many amazing innovations coming around in technology, I had to be a part of it.</p>
                                <p>Apart from this, I enjoy watching television sitcoms, movies and documentaries in my leisure time. Recently, I’ve also started to read novels and biographies in pursuit of developing a new hobby.</p>
                                <p>Connect with me on LinkedIn using the link below to know more.</p>
                            </Tab>
                            <Tab eventKey="summary" title="Summary" className="pt-3 tab-details">
                                <h3><i>Ongoing Activities...</i></h3>                                
                                <p>Alongside my Master’s Degree, I’m also engaged in part-time internships and projects to develop my expertise and skills set. </p>
                                <p>Currently, I’m working as a Front-End Developer for Kretiva and as a Software Developer for Advanced Energy Analytics. Working at these companies has helped me develop some amazing skills, even apart from technology. Look at my Experience page for a more detailed description of my journey.</p>
                                <p>Apart from internships, I’m also working to enhance my skills through personal projects during my spare time in summer. For details about my personal projects, please visit the Projects page.</p>
                                
                            </Tab>                            
                        </Tabs>                        
                    </Container>
                </Col>
            </Row>            
        </div>
    )
}

export default home
