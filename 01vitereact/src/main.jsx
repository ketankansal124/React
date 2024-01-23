import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: "https://www.google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement=(
  <a href="https://www.google.com" target='_blank'>Visit google</a>
)

const reactElement= React.createElement(
  'a',
  {href:"https://www.google.com",target:"_blank"},
  "Click me to visit google"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // anotherElement
  // reactElement
)
