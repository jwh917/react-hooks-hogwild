import React from "react";

// make comp

function HogsHeader({filterGreased, sortName, sortWeightSB, sortWeightBS}) {
	return (
		<div className="App">
      <br></br>
      <span className="largeHeader"> Hogs and Pokers</span>
      <br></br>
      <br></br>
      <button onClick={filterGreased}>Which Hog Is Greased?</button> 
      <br></br>
      <h3>Sort Hogs</h3>
      <button onClick={sortName}>By Name(A-Z)</button>
      <h3>By Weight</h3>
      <button onClick={sortWeightSB}>Small - Bigg</button> <button onClick={sortWeightBS}>Bigg - Small</button>
      <br></br>
      <br></br>
      <br></br>
		</div>
	);
}

export default HogsHeader;