import React from "react";


function HogGrid({displayedHogs}) {



  // console.log(shownHogs)
  // console.log(hogs[0][ "highest medal achieved" ])

  // const hiddenHogsInfo = hogs.map((hog) => {
  //   // console.log(hog.specialty, hog.weight, hog.greased, hog[ "highest medal achieved" ])
  //   return (<HogCardUl
  //     key={hog.image}
  //     hogSpecialty={hog.specialty}
  //     hogWeight={hog.weight}
  //     hogGreased={hog.greased}
  //     hogMedal={hog[ "highest medal achieved" ]}
  //     />)
  // })
  // parseFloat weight

  // const DisplayedHogs = hogs.map((hog) => {
  //   // console.log(hog.name, hog.image)
  //   return (<HogCards
  //   key={hog.image}
  //   hogName={hog.name}
  //   hogImageURL={hog.image}
  //   hogSpecialty={hog.specialty}
  //   hogWeight={hog.weight}
  //   hogGreased={hog.greased}
  //   hogMedal={hog[ "highest medal achieved" ]}
  //   />)
  // })




	return (
		<div className="ui grid container">
      {displayedHogs}
      {/* {shownHogs} */}
      {/* {hiddenHogsInfo} */}
		</div>
	);
}

export default HogGrid;