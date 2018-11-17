import React from 'react';
import './home.css';
import { Route, Link, Switch } from 'react-router-dom';

import Landing from '../Pages/Landing';

const Home = () => (
    <div>
        <div>
            <ul>
                <li><Link to='/landing'>Home</Link></li>
            </ul>
        </div>
        <div>
            <Switch>
                <Route exact path="/landing"><Landing /></Route>
            </Switch>
        </div>
    </div>
)
export default Home;