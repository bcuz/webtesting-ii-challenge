import React, { Component } from 'react';

function Display(props) {

  let { balls = 0, strikes = 0 } = props

    return (
      <div>
        <p>balls: {balls}</p>
        <p>strikes: {strikes}</p>
      </div>

  )

}


export default Display;
