import React from 'react';
import Card from './Card'

const CardList = (props) =>{
  return(
    <div>
      <h2>Card List</h2>
      <div>
      {
        props.ideaCards.map((idea) => {
          return (
            <Card title = {idea.title}
                  body = {idea.body}/>
          );
        })
      }
      </div>
      </div>

  )
  
};

export default CardList;