import React, {useState} from "react";
import Nav from "./Nav";
import HogsHeader from "./HogsHeader";
import HogGrid from "./HogGrid";
import HogCards from "./HogCards";

import hogs from "../porkers_data";

  // state for unshow info default to false
  // state for list of info default emtpy string *maybe not

  // handle click set state from false to true
  // handle click set state from empty to array of info *maybe not

  // .map of spec weight greased and high medal make ul and info are li s
  // add css ti ul and li s

  // onclick for each pig tile 


	// console.log(hogs)


function App() {
	const [isListShown , setIsListShown] = useState(false)
	const [isGreased , setIsGreased] = useState(false)

	const [nameSorted , setNameSorted] = useState(false)
	const [weightSBSorted , setWeightSBSorted ] = useState(false)
	const [weightBSSorted , setWeightBSSorted] = useState(false)

	// make comp that will be func that takes the state variable and setting variable
	function hideHogsInfo(){
		if(isListShown === false){
			setIsListShown(true)    }
    else{
			setIsListShown(false)    }
	}

	function filterGreased(){
		if(isGreased === false){
			setIsGreased(true)    }
    else{
			setIsGreased(false)    }
	}

	function sortName(event){
		// console.log(event)
		if(nameSorted === false){
			setNameSorted(true)    }
    else{
			setNameSorted(false)    }
	}

	function sortWeightSB(event){
		if(weightSBSorted === false){
			setWeightSBSorted(true)    }
    else{
			setWeightSBSorted(false)    }	
	}

	function sortWeightBS(event){
		if(weightBSSorted === false){
			setWeightBSSorted(true)    }
    else{
			setWeightBSSorted(false)    }	
	}

	// hogcards comp

	// const DisplayedHogs = hogs.map((hog) => {
	// 	// console.log(hog.name, hog.image)
	// 	return ( (isListShown === true) ?
	// 	<HogCards
	// 	key={hog.name}
	// 	hogName={hog.name}
	// 	hogImageURL={hog.image}
	// 	/> :

	// 	<HogCards
	// 	key={hog.name}
	// 	hogName={hog.name}
	// 	hogImageURL={hog.image}
	// 	hogSpecialty={hog.specialty}
	// 	hogWeight={hog.weight}
	// 	hogGreased={hog.greased}
	// 	hogMedal={hog[ "highest medal achieved" ]}
	// 	hideHogsInfo={hideHogsInfo}
	// 	isListShown={isListShown}
	// 	/>
	// 	)
	// })

// remember that it will return hogs, make new variable that = [...hogs]


// const hogsConsole0 = newHogsArrray.sort((hog1, hog2) => console.log("Hog1:",hog1.name,"Hog2:",hog2.name))
// const hogsConsole1 = newHogsArrray.sort((hog1, hog2) => console.log("Hog1:",hog1.weight,"Hog2:",hog2.weight))

// 2 - sort weight small to bigg
// const hogsConsole2 = newHogsArrray.sort((hog1, hog2) => hog1.weight - hog2.weight)

// 3 - sort weight bigg to small
// const hogsConsole3 = newHogsArrray.sort((hog1, hog2) => hog2.weight - hog1.weight)

// 4 - sort name a-z
// const hogsConsole4 = newHogsArrray.sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }))

// console.log(hogs)
// console.log(hogsConsole2)
// console.log(hogsConsole3)
// console.log(hogsConsole4)

const hogsFilterArray = hogs.filter((hog) => {
	if(isGreased === false){
		return hog
	}
	else {
		return hog.greased === true
	}
})

const newHogsArrray = [...hogs]

const sortedHogLists = newHogsArrray.sort((hog1, hog2) => {
	if(nameSorted === true){
		return hog1.name.localeCompare(hog2.name, 'es', { sensitivity: 'base' })
	}
	if(weightSBSorted === true){
		return hog1.weight - hog2.weight
	}
	if((weightBSSorted === true)){
		return hog2.weight - hog1.weight
	}
})


// sortedHogLists || hogsFilterArray 

let hogsDisplayed

if(nameSorted === true || weightSBSorted === true || weightBSSorted === true) {hogsDisplayed = sortedHogLists.map((hog) => {
		// console.log(hog.name, hog.image)
		return (<HogCards
		key={hog.name}
		hogName={hog.name}
		hogImageURL={hog.image}
		hogSpecialty={hog.specialty}
		hogWeight={hog.weight}
		hogGreased={hog.greased}
		hogMedal={hog[ "highest medal achieved" ]}
		hideHogsInfo={hideHogsInfo}
		isListShown={isListShown}
		/>)
	})
}
else hogsDisplayed = hogsFilterArray.map((hog) => {
	// console.log(hog.name, hog.image)
	return (<HogCards
	key={hog.name}
	hogName={hog.name}
	hogImageURL={hog.image}
	hogSpecialty={hog.specialty}
	hogWeight={hog.weight}
	hogGreased={hog.greased}
	hogMedal={hog[ "highest medal achieved" ]}
	hideHogsInfo={hideHogsInfo}
	isListShown={isListShown}
	/>)
})

	return (
		<div className="App">
			<Nav/>
			<HogsHeader filterGreased={filterGreased} sortName={sortName} sortWeightSB={sortWeightSB} sortWeightBS={sortWeightBS}/>
			<HogGrid displayedHogs={hogsDisplayed} />
		</div>
	);
}

export default App;
