import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Popular from './components/Popular/Popular'
import Battle from './components/Battle/Battle'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render () {
    return (
      <div>
        <Battle />
        <Popular/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

