import React, { Component } from 'react';
import './about.css';
import img from '../assets/pics/CarlinQuentin.jpeg';
// import 'bootstrap/dist/css/bootstrap.css';
import { Container,  Row, Col } from 'reactstrap';


class About extends Component {
    render() {
        return(
            <div className='all'>
                <h1>About Me</h1>
                    <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
                        <div className='grid'> 
                            <div><img className='img' src={img} /></div>
                            <p className='me'>My name is Quentin Carlin. I have been learning to code for the last few months. I enjoy active sports such as tennis, soccer, frisbee, or boxing. I was home-schooled along with my nine siblings which has taught me so much through the years (especially how to get along with people). After graduating highschool I wanted to enhance my coding abilities. I just graduated Eleven-Fifty Academy in November and have continued to imporve my full stack coding skills. Coding isn't just numbers, letters and special characters on a screen. It is a way of thinking, a lifestyle. I honestly love to code, and look forward to wherever it takes me!<br/>
                            <a href='https://carlinquentin.github.io/assets/Resume%20(2).pdf' target='blank'>Resume</a>
                            </p> 
                        </div>
            </div>
        )
    }
}

export default About;
