import React, {Component} from 'react';
import './styles/Search.css'

export default class Search extends Component {
  constructor(props) {
    super();

    this.state = {
    };
  }

  searchInput(event){
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div className='search-holder'>
        {<input type='text' placeholder= 'search' className='search-bar' onChange={this.searchInput.bind(this)}/>}
      </div>
    )
  } 
};
