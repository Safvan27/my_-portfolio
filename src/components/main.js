import React from 'react';
import { Route,Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Project from './project';

const Main = () => (
    <Switch>
       
        <Route exact path ="/" component={LandingPage}/>
        <Route  path ="/aboutme" component={Aboutme}/>
        <Route  path ="/contact" component={Contact}/>
        <Route  path ="/resume" component={Resume}/>
        <Route  path ="/project" component={Project}/>


    </Switch>
)
export default Main;