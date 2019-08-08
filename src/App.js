import React from 'react';
import Grid from './Grid.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  render () {
    const status = 'play: X'
    const historyStatus = [1,2].map((value,index) => (
      <li key={index}>
        {value}
      </li>
    ))
    return (
      <div className="game">
        <div className="game-box">
          <Grid></Grid>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{historyStatus}</ol>
        </div>
      </div>
    )
  }
}

export default App;
