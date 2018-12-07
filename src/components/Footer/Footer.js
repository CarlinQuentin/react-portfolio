import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return(
            <div className='footer'>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
                 <div className='words'>Let's Connect</div>
                 <div className='icons'>
                    <a class="fab fa-linkedin link" href='https://www.linkedin.com/in/quentin-carlin-b4111a16a/' target='_blank'></a>
                    <a class="fab fa-github-square git" href='https://github.com/CarlinQuentin' target='_blank'></a>
                </div>
            </div>
        )
    }
} 

export default Footer

