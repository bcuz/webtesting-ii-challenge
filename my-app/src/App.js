import React from 'react';
import './App.css';
import Display from './components/Display';

class App extends React.Component {
  state = {
    ball: 0,
    strike: 0
  }

  render() {
    return (
      <div>
        <Display ball={this.state.ball} strike={this.state.strike} />
      </div>

    )
  }
}

export default App;
