import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Voting from './Voting.jsx'
import Waiting from './Waiting.jsx'
import Winner from './Winner.jsx'
import VoterLanding from './VoterLanding.jsx'
import axios from 'axios'

class componentName extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groupName: '',
      group: undefined,
      link: window.location.href.slice(0, 37)
    }
  }

  componentWillMount () {
    let groupName = this.props.location.pathname.slice(14)

    if (groupName.split('/')[1] !== undefined) {
      groupName = groupName.split('/')[1]
    }

    if (localStorage.getItem('groupName') !== groupName) {
      localStorage.setItem('voted', false)
      localStorage.removeItem(localStorage.getItem('groupName'))
      localStorage.removeItem('votes')
      localStorage.setItem('groupName', groupName)
      this.setState({ groupName: groupName })
      axios.get('/api/groups/' + groupName)
      .then((res) => {
        res.data.index = 0
        localStorage.setItem(groupName, JSON.stringify(res.data))
        return res
      })
      .then((res) => {
        this.setState({group: JSON.parse(localStorage.getItem(groupName))})
      })
      .catch((err) => {
        console.error('axios get error', err)
      })
    } else {
      this.setState({
        group: JSON.parse(localStorage.getItem(localStorage.getItem('groupName'))),
        groupName: localStorage.getItem('groupName')
      })
    }
  }

  render () {
    if (this.state.group === undefined) {
      return (
        <h1>LOADING</h1>
      )
    } else {
      return (
        <div>
          <Route path='/voting/welcome' render={() => { return <VoterLanding name={this.state.groupName} /> }} />
          <Route path='/voting/waiting' render={() => { return <Waiting name={this.state.groupName} link={this.state.link + this.state.groupName} endTime={this.state.group.endTime} /> }} />
          <Route path='/voting/winner' render={() => { return <Winner name={this.state.groupName} /> }} />
          <Route path='/voting/group/' render={() => { return <Voting name={this.state.groupName} yelpData={this.state.group} /> }} />
        </div>
      )
    }
  }
}

export default componentName
