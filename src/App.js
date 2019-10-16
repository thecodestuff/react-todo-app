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

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render(){ 
    const { characters } = this.state
    return (
      <div className="container">
        <h1>Job list</h1>
        <Table characterData={ characters } removeCharacter={ this.removeCharacter }/>
       
        <div className="form-wrapper">
          <Form handleSubmit={this.handleSubmit}/>
        </div>

      </div>
    )
  }

}
export default App;
