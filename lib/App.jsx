import React, {Component} from 'react';
import Search from './Search';
import Input from './Input';
import Card from './Card';
import './styles/App.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      ideas: JSON.parse(localStorage.getItem('ideaCards'))

    }
  }

  createNewIdea(obj) {
    let ideasArray = this.state.ideas;

    ideasArray.push(obj);
    this.setState({ideas: ideasArray});
    localStorage.setItem('ideaCards', JSON.stringify(ideasArray));
  }

  deleteIdea(number){
    let ideasArray = this.state.ideas;

    ideasArray.splice(number, 1);
    this.setState({ideas: ideasArray});
    localStorage.setItem('ideaCards', JSON.stringify(ideasArray));
  }


  render() {
   return (
     <div>
       <Input newIdea = {this.createNewIdea.bind(this)}/>
       <Search />
       <div className='cards'>
   { this.state.ideas.map((idea, index) => <Card key={index} number={index} idea={idea} deleteIdea={this.deleteIdea.bind(this)}/>)} 
      </div>
     </div>
   );
  }
}