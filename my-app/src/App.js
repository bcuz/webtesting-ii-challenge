import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  state = {
    ball: 0,
    strike: 0
  }

  handleStrike = () => {

    if (this.state.strike < 2) {
      this.setState(prevState => {
        return {strike: prevState.strike + 1}
     })
    } else {
      this.setState({strike: 0, ball: 0})
    }
  }

  render() {
    return (
      <div>
        <Display ball={this.state.ball} strike={this.state.strike} />
        <Dashboard handleStrike={this.handleStrike} />
      </div>

    )
  }
}

export default App;
