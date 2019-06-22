import React, { Component } from 'react';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleStrike} >strike</button>
        <button onClick={this.props.handleBall} >ball</button>
        <button>foul</button>
        <button>hit</button>
      </div>
    
    );
  }
}

export default Dashboard;
