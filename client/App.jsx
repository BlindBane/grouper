import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Container from './components/Container.jsx'
import Home from './components/Home.jsx'
import MakeGroup from './components/MakeGroup.jsx'
import RootVoting from './components/RootVoting.jsx'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import Chat from './components/Chat.jsx'
import Profile from './components/Profile.jsx'
import About from './components/About/About.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Router>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/makeGroup' component={MakeGroup} />
          <Route path='/voting' component={RootVoting} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/chat' component={Chat} />
          <Route path='/profile' component={Profile} />
          <Route path='/about' component={About} />
        </Container>
      </Router>
    )
  }
}

export default App
