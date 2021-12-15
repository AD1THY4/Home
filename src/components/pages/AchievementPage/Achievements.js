import React, {useState,useEffect } from "react";
import "./styles.css";
import  './AbtData.json';
import YoutubeEmbed from "./YoutubeEmbed";
const Achievements = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);

  };
  useEffect(() =>{
    // fetch('../AchievementPage/AbtData.json')
    fetch('./AbtData.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
     .then((res) => res.json())
     .then((data) => setItems(data)); 
  },
  []);
  return (
    
    <div className ="Achievements">
                    
      <YoutubeEmbed embedId="2PnmLF9YQRI" />

      <div className = "container">
        {items.slice(0,visible).map((item)=>(
          
          <div className="achieve">
            <div className="imgload" background-color="white">
              <img src={item.img} alt="BigCo Inc. logo" height="200px" width = "230"/></div><div className="card">

            <h2>{item.headline}</h2>

            <p>{item.description}</p>
          </div>
        </div>
             
        ))}
        
        <button onClick = {showMoreItems}>Load More</button>
       
        </div>
       
        </div>
        
  );

}




export default Achievements;