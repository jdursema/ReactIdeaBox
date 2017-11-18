import React, {Component} from 'react';
import './styles/Card.css';

export default class Card extends Component {
  constructor(props) {
    super();

    this.state = {
    }
  }
  grabCardIndex(){
    this.props.deleteIdea(this.props.number);
  }

  render() {
    return(
      <div className= 'card'>
        <button className='delete' onClick={this.grabCardIndex.bind(this)}></button>
        <h4>{this.props.idea.title}</h4>
        <p>{this.props.idea.body}</p>
        <div className='vote'>
          <button className='upvote'></button>
          <p>swill</p>
          <button className='downvote'></button>
        </div>
      </div>
    );
  }
}