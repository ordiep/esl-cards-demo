import React from 'react';
import Card from './esl-card';
const Grid = (props) => {
  const cards = Array(20).fill(0).map( (value, index) =>  <Card key={index} id={index + 1} />);
  return (
    <div className="esl-grid">
      {cards}
    </div>
  )
}
export default Grid;