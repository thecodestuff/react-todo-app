import React, {Component} from 'react'
import Table from './Table.js'
import Form from './form.js'

class App extends Component{
    state = {
      characters: [
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

    }

  removeCharacter = index => {
    const {characters} = this.state

    this.setState({
      characters: characters.filter( (character, i) => {
         return i !== index
      } )
    }) 
  }

  render(){ 
    const { characters } = this.state
    return (
      <div className="container">
        <div className="form-wrapper">
          <Form />
        </div>
        <h1>Job list</h1>
        <Table characterData={ characters } removeCharacter={ this.removeCharacter }/>
      </div>
    )
  }

}
export default App;
