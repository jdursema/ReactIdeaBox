import React, {Component} from 'react';

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
      <div>
        <h1>IdeaBox</h1>
          <input type= 'text' placeholder= 'title' onChange= {this.saveCardTitle}/>
          <input type= 'text' placeholder= 'body' onChange= {this.saveCardBody} />
          <button onClick= {() => {
            console.log('clicked');
            this.props.newIdea(this.state);
            }}>
            Save
          </button>
      </div>
  )
}
}