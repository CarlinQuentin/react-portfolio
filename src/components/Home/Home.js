import React from 'react';
import './home.css';
import { Route, Link, Switch } from 'react-router-dom';

import Landing from '../Pages/Landing';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => (
    <div className='navbar'>
        <div className='navbar-list-styling'>
            <ul className='navbar-list list-unstyled'>
                <li class='listen'><Link to='/landing'>Home</Link></li>
                <li class='listen'><Link to='/about'>About</Link></li>
                <li class='listen'><Link to='/projects'>Projects</Link></li>
                <li class='listen'><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
        <div>
            <Switch>
                <Route exact path="/landing"><Landing /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/projects"><Projects /></Route>
                <Route exact path="/contact"><Contact /></Route>
            </Switch>
        </div>
    </div>
)
export default Home;