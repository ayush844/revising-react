import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const username = "chai aur code"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google', // after whole tree is created we can inject variables here
  anotherElement,
  username
)


ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <App />
)
