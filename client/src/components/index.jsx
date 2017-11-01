import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import FishInAndOut from './FishInAndOut.jsx'
import FishList from './FishList.jsx'

function App() {
  const title = 'fishes'

  return(
    <div className="app-div">
      <div className="title">{title}</div>
      <div className="grid-top">
        <FishInAndOut />
      </div>
      <FishList />
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))