import React, {Component} from 'react'

// form component
class Form extends Component{

  constructor(props){
    super(props)
    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }

  // method run when event fired
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })

  }

  // evoked when form submitted
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render(){
    const {name, job} = this.state;
    return(
      <form>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Job</label>
        <input type="text" name="job" value={job} onChange={this.handleChange} />

        <button type="button" onClick= {this.submitForm}>Submit</button>
      </form>
    );
  }
}

export default Form ;
