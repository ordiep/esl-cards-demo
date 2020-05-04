import React, { useState, useEffect } from 'react';
import Card from './esl-card';


const Grid = (props) => {
  const [cardState, setCardState] = useState({cards: []});
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchText, setSearchText] = useState();
  const loader = <div className="loader"></div>;
  const cards = cardState.cards.map((cardData, index) =>{
    return (<Card key={index + 1} cardInfo={cardData} />);
  });

  
  async function fetchCardData(pageNumber) {
    let response = await fetch(`https://api.elderscrollslegends.io/v1/cards?pageSize=20&page=${pageNumber}`);
    let data = await response.json();
    setCardState({cards: cardState.cards.concat(data.cards) });
    setLoading(false);
  }

  async function searchCardData(searchText) {
    let response = await fetch(`https://api.elderscrollslegends.io/v1/cards?pageSize=20&name=${searchText}`);
    let data = await response.json();
    console.log('SearchData', data);
    setCardState({cards: data.cards });
    setLoading(false);
  }
  
  useEffect(() =>{
    const grid = document.getElementsByClassName('esl-grid')[0];
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= grid.clientHeight + grid.offsetTop) {
        setLoading(true);
        setPageNumber(pageNumber + 1);
      }
    });
    fetchCardData(pageNumber);
    return () => { window.removeEventListener('scroll', ()=>{})}
  }, [pageNumber]);

  return (
    <div> 
      <div> <input 
              type="text" name="search" 
              placeholder="Search for a card by Name" 
              onChange={(e) => setSearchText(e.target.value)}/> 
      <button onClick={()=>{searchCardData(searchText)}}>Search</button>
      </div>
      
      <div className="esl-grid">
        { cards.length ? cards : false }
        { isLoading ? loader : false }
      </div>
    </div>
  )
}
  export default Grid;