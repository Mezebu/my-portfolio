import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './homepage'
import ProjectsPage from './projects'
import ResumePage from './resume'
import ContactPage from './contact'
import AboutPage from './about'


const Main = () => (
    <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/projects' component={ ProjectsPage } />
        <Route path='/resume' component={ ResumePage } />
        <Route path='/contact' component={ ContactPage } />
        <Route path='/about' component={ AboutPage } />
    </Switch>
        
    
)

export default Main;