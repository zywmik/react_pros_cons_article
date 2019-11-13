/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

//? this JSX:
const greeting = <h1 className="greeting">Hello, my friend! 🖐</h1>

//? will be compiled to:
// var greeting = React.createElement(
//   "h1",
//   {
//     className: "greeting"
//   },
//   "Hello, my friend! \uD83D\uDD90"
// );

export default greeting;
