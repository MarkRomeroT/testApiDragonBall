import React from "react";
import '../styles/CharacterList.css'
const CharacterList = ({ characters }) => {
  console.log(characters);
  
  return (
    <div className="container">
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="contenedor">
              <div className="cards">
                <div className="card">
                <div className="colour"></div>
                  <div className="card-text">
                    <h4>{item.name}</h4>
                    <p>Species:<b> {item.specie} </b></p>
                    <p>Location:<b> {item.originplanet} </b></p>
                    <p>Universe:<b> {item.universe} </b></p>
                    </div>
                    <img  className="img" src={item.imageUrl}></img>
                    <div className="colour-buttom"></div>
                </div>
              </div>
            </div>
           </div>
        ))}
    </div>
    </div>
  );
};

export default CharacterList;
