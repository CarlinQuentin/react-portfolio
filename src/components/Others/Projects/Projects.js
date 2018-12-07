import React, { Component} from 'react';
import './Projects.css'
import img2 from '../assets/pics/css.png';
import img3 from '../assets/pics/web2.png';
import img4 from '../assets/pics/api.png';
import img5 from '../assets/pics/Storylog.png';
import img6 from '../assets/pics/foodFinder.png';
import img7 from '../assets/pics/nightbuzz.png';


class Projects extends Component {
    render() {
        return(
            <div class='cover'>
                <h1>My Projects</h1>
                    <div className='grid2'>
                        <div className='grid-item'><a target='blank' href='https://codepen.io/QuentinCarlin/pen/aaNgEL'> CSS Creature<img src={img2}/></a>   Built after 1 day of coding <br/> Time to build: 1 day </div>
                        <div className='grid-item'><a target='blank' href='https://carlinquentin.github.io/firstWebsite/'> Static Store Front<img src={img3}/></a>  Built after 5 days of coding <br/> Time to build: 3 days </div>
                        <div className='grid-item'><a target='blank' href='https://carlinquentin.github.io/CarlinQuentin.github.io-api/'>Recipe Finder<img src={img4}/></a>  Built after 2 weeks of coding <br/> Time to build: 5 days </div>
                        <div className='grid-item'><a target='blank' href='https://storylog1-client.herokuapp.com/'> Story Log<img src={img5}/></a>  Built after 8 weeks of coding <br/> Time to build: 2 weeks</div>
                        <div className='grid-item'><a target='blank' href='https://food-finder123.herokuapp.com/'> Food Finder<img src={img6}/></a>  Built after 11 weeks of coding <br/> Time to build: 1 day</div>
                        <div className='grid-item'><a target='blank' href='https://nightbuzz-plzzz-wurk.herokuapp.com/about'> Night Buzz<img src={img7}/></a>  Built after 10 weeks of coding <br/> Time to build: 2 weeks</div>
                    </div>
                </div>
            )
    }
}

export default Projects;