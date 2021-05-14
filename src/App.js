import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Zanatlije from './components/projects/Zanatlije'
import Plates from './components/projects/Plates'
import Maia from './components/projects/Maia'
import WeekendProjects from './components/projects/WeekendProjects'

function App() {
  return (
    <>
      <Router>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/projectZanatlije' component={Zanatlije} />
            <Route path='/projectPlates' component={Plates} />
            <Route path='/projectMaia' component={Maia} />
            <Route path='/weekendProjects' component={WeekendProjects} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

