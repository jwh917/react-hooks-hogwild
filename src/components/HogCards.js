import React from "react";
import HogCardUl from "./HogCardUl";


function HogCards({hogName, 
  hogImageURL,
   hogSpecialty, 
   hogWeight, 
   hogGreased, 
   hogMedal,
   hideHogsInfo,
   isListShown}) {
	return (
		<div className="ui eight wide column">
      <div className="pigTile" onClick={hideHogsInfo}>
        {/* h3 and img comp */}
        <h3>{hogName}</h3>
        <img src={hogImageURL} alt={hogName} width="200" height="200"/>
        <div>
          {/* ul comp */}
          {/* if 
          (!isListShown) ? 
         ( <ul className="App">
            <li>Specialty: {hogSpecialty}</li>
            <li>Weight: {hogWeight}</li>
            <li>Greased: {hogGreased}</li>
            <li>Highest Medal Achieved: {hogMedal}</li>
          </ul>) : "" */}
          <HogCardUl hogSpecialty={hogSpecialty} hogWeight={hogWeight} hogGreased={hogGreased} hogMedal={hogMedal} isListShown={isListShown}/>

        </div>

      </div>
		</div>
	);
}

export default HogCards;