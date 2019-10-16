import React, {Component} from 'react'

// form component
class Form extends Component{
  render(){
    return(
      <form>
        <label>Name</label>
        <input type="text" value="{name}"/>
        <label>Job</label>
        <input type="text" value="{job}"/>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form ;
