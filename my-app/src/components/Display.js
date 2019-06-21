import React, { Component } from 'react';

function Display(props) {

  let { ball = 0, strike = 0 } = props

  if (ball === 0 && strike === 0) {
    return <h3>play ball!</h3>
  }

    return (
      <div>
        <p>balls: {ball}</p>
        <p>strikes: {strike}</p>
      </div>

  )

}


export default Display;
