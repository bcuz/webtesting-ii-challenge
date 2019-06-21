import React, { Component } from 'react';

function Display(props) {

  let { ball = 0, strike = 0 } = props

  if (ball === 0 && strike === 0) {
    return <h3>play ball!</h3>
  }

    return (
      <div>
        {/* <h2>Balls</h2>
        <p>{ball}</p>
        <h2>strikes</h2>
        <p>{strike}</p> */}
      </div>

  )

}


export default Display;
