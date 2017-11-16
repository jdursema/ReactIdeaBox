import React, {Component} from 'react';
import Search from './Search';
import Input from './Input';
import CardList from './CardList';

export default class App extends Component{
  constructor(){
    super();

    this.state = {
      ideas: []

    }
  }

  createNewIdea(obj){
    this.state.ideas.push(obj)
    console.log(this.state.ideas)
  }

  render(){
   return (
     <div>
       <Input newIdea = {this.createNewIdea.bind(this)}/>
       <Search />
       <CardList ideaCards = {this.state.ideas}/>
     </div>
   )
  }
}