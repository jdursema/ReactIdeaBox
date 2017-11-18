import React, {Component} from 'react';
import './styles/input.css';

export default class Input extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      body: ''
    };

    this.saveCardBody= this.saveCardBody.bind(this)
    this.saveCardTitle= this.saveCardTitle.bind(this)
  }

  saveCardTitle(event){
    this.setState({ title: event.target.value})
  }

  saveCardBody(event){
    this.setState({ body: event.target.value})
  }

 
      
  render() {
    return (
      <div className="input-div">
        <h1>Idea<span>Box</span></h1>
          <input type= 'text' placeholder= 'title' value= {this.state.title} onChange= {this.saveCardTitle}/>
          <input type= 'text' placeholder= 'body' value= {this.state.body} onChange= {this.saveCardBody} />
          <button 
          className= "save" onClick= {() => {
            console.log('clicked');
            this.props.newIdea(this.state);
            this.setState({title: '', body: ''})
            }}>
            Save
          </button>
      </div>
  )
}
}