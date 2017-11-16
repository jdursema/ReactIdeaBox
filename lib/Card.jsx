import React from 'react';

const CardList = (props) =>{
  return(
    <div>
      <h3>title: {props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}