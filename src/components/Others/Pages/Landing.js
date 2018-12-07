import React, { Component } from 'react';
import './Landing.css'
import { Container } from 'reactstrap'

class Landing extends Component{
    render(){
        return(
            <Container>
                <div className='alls'>
                <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
                <div className='name'>Quentin Carlin</div>
                <div className='title'> Jr Software Developer</div>
                <div className='quote'> "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie</div>
                </div>
            </Container>
        )
    }
}

export default Landing;