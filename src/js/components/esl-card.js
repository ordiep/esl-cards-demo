import React from 'react';
const Card = (props) => {
  const { cardInfo } = props;
  const { imageUrl, name, text, type  } = cardInfo;
  const setName = cardInfo.set.name;
  const altText = `Elder Scroll Legends Card Image For ${name}`;
  
  return (
    <div className="esl-card">
      <h2>{name}</h2>
      <p><b>Type: </b>{type}</p>
      <p><b>Set:</b> {setName}</p>
      <img src={imageUrl} alt={altText}/>
      <p><b>Description:</b> {text}</p>
    </div>
  )
}
export default Card;