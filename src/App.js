import React, {Component} from 'react'
import Table from './Table.js'

class App extends Component{
  render(){
    const characters = [
      {
        name: 'Charlie',
        job: 'janitor',
      },
      {
        name: 'Macloard',
        job: 'Bouncer',
      },
      {
        name: 'Davi johns',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    
    return (
      <div className="container">
        <h1>Job list</h1>
        <Table characterData={ characters }/>
      </div>
    )
  }

}
export default App;
