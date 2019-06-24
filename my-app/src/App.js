import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  handleStrike = () => {
    this.setState(prevState => {      
      // if less than 2 strikes, increment
      if (prevState.strikes < 2) {
        return {strikes: prevState.strikes + 1}
      } else {
        return {strikes: 0, balls: 0}
      }
     })    
  }

  handleBall = () => {
    this.setState(prevState => {      
      if (prevState.balls < 3) {
        return {balls: prevState.balls + 1}
      } else {
        return {strikes: 0, balls: 0}
      }
      })
  }

  handleHit = () => {
    this.setState({strikes: 0, balls: 0})
  }

  handleFoul = () => {

    this.setState(prevState => {

      if (prevState.strikes === 0) {
        return {strikes: prevState.strikes + 2}
      } else if (prevState.strikes === 1) {
        return {strikes: prevState.strikes + 1}
      }
   })
  }

  render() {
    return (
      <div>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <Dashboard handleStrike={this.handleStrike} handleBall={this.handleBall} handleHit={this.handleHit} handleFoul={this.handleFoul} />
      </div>

    )
  }
}

export default App;
