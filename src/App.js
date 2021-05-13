import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
// import video from './components/bg.mp4'
function App() {
  return (
    <>
      {/* <video id="bgVid" autoPlay loop muted >
        <source src={video} type="video/mp4" />
      </video> */}
      <Router>
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/projects' component={Projects} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

