import React from "react";


function HogCardUl({hogSpecialty, hogWeight, hogGreased, hogMedal, isListShown}) {

  // function hogUl(){
  //   return ( (isListShown === true) ?
  //   <div className="ui eight wide column">
  //     <ul>
  //       <li>Specialty: {hogSpecialty}</li>
  //       <li>Weight: {hogWeight}</li>
  //       <li>Greased: {hogGreased}</li>
  //       <li>Highest Medal Achieved: {hogMedal}</li>
  //     </ul>
  //   </div> : "")
  // }



	return ( 
  // <div>
  //   {hogUl}
  // </div>
  (isListShown === true) ?
    <div className="ui eight wide column">
      <ul>
        {/* get true or false to show for greased, make showing list to show only on hog clicked and make the first letter of medal uppercase */}
        <li>Specialty: {hogSpecialty}</li>
        <li>Weight: {hogWeight}</li>
        <li>Greased: {hogGreased}</li>
        <li>Highest Medal Achieved: {hogMedal}</li>
      </ul>
  </div> : ""
  
	);
}

export default HogCardUl;