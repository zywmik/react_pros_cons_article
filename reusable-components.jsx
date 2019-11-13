/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';


const MyButton = () => {
  return <div>
    <button>Click me! 👇</button>
  </div>
}


const MyMenu = () => {
  return <div>
    <h1>Not that useful menu 🤔</h1>
    <MyButton />
    <MyButton />
    <MyButton />
  </div>
}


export {MyButton, MyMenu};