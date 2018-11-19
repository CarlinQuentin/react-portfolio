import React, { Component } from 'react';
import './about.css';
import img from './assets/pics/CarlinQuentin.jpeg';
import { Container, Row, Col } from 'reactstrap';

class About extends Component {
    render() {
        return(
            <Container className='all'>
                <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" /> 
                    <Row>
                        <Col><h1> About Me</h1></Col>
                    </Row>
                    <Row>
                        <Col xs="6"><img className='img' src={img} /></Col>
                        <Col xs="6" className='me'>My name is Quentin Carlin. I have been learning to code for the last few months. I enjoy active sports such as tennis, soccer, frisbee, or boxing. I was home-schooled along with my nine siblings which has taught me so much through the years (especially how to get along with people). After graduating highschool I wanted to enhance my coding abilities. I just graduated Eleven-Fifty Academy in November and have continued to imporve my full stack coding skills. Coding isn't just numbers, letters and special characters on a screen. It is a way of thinking, a lifestyle. I honestly love to code, and look forward to wherever it takes me!<br/>
                        <a>Resume</a>
                        </Col>
                    </Row>
            </Container>
        )
    }
}

export default About;