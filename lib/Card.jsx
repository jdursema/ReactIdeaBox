import React, {Component} from 'react';
import './styles/Card.css';

export default class Card extends Component {
  constructor(props) {
    super();

    this.state = {
      rank: ['swill', 'plausible', 'genius']
    };
  }

  grabCardIndex() {
    this.props.deleteIdea(this.props.number);
  }

  upvoteFunction() {
    this.props.increaseRank(this.props.number);
  }

  downvoteFunction() {
    this.props.decreaseRank(this.props.number);
  }

  render() {
    return (
      <div className= 'card'>
        <button className='delete' onClick={this.grabCardIndex.bind(this)}></button>
        <h4>{this.props.idea.title}</h4>
        <p>{this.props.idea.body}</p>
        <div className='vote'>
          <button className='upvote' onClick={this.upvoteFunction.bind(this)}></button>
          <p>{this.props.idea.rank}</p>
          <button className='downvote' onClick= {this.downvoteFunction.bind(this)}></button>
        </div>
      </div>
    );
  }
}