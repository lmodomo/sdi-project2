// Author: Lyndon H Modomo
// Created for: SDI-O Online Course (SDI-O 1201) : Project 2 / Deliverable 2
// Created on: 01/01/12

// Define & set all the variables for this JS file
var niceBeachDay = true,
	sunnyDay = true,
	surfsUp = true,
	goodSurfDay = false,
	numOfWavesInSet = 6,	//a set is the number of continous waves before a noticable break with no waves.
	idealTimeToSurf = 14,  	//for this lab I am just using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
	waitTime = 0,
	surfers = ["Kelly Slater", "Duke Kahanamoku", "Sunny Garcia", "Taj Burrow"],
	slang1 = "Surf\'s Up Brah",
	slang2 = "Goofy footed",
	slangPhrase = ""
;
	

// (Procedure Task): Check to see if it is a good day for the beach or not
var goodBeachDay = function (goodDay) { 
	if (goodDay === true) {   
		console.log ("(Procedure Task): It is a great day for the beach!!");
	}else {
		console.log ("(Procedure Task): It is NOT a great day for the beach, bummer dude...");
	}
};  //end goodBeachDay function


// (Boolean Function Task): Check to see if it will be a sunny day and check to see if "Surf's Up!"
var idealDayToSurf = function (sunny, niceWaves) { 
	if (sunny && niceWaves) {   
		console.log ("(Boolean Function Task): It is a great day to surf because the sun is out and Surf's Up Brah!!");
		return (true);
	}else {     
		console.log ("(Boolean Function Task): It is NOT a great day to surf.");
		return (false);
	}
};  //end idealDayToSurf function


//(Number Function Task): Determine if it is the ideal time of day to go out and surf
var surfTime = function (timeOfDay) { 
	var	currentTime = 8,		//for this lab this should be less then "timeOfDay". Using whole numbers (military time), 1 = 1:00, 2 = 2:00 ... 24 = 12:00 midnight, etc...
		timeRemaining = 0,
		totalWaitTime = 0
	;

	console.log ("(Number Function Task) Output From The While Loop Listed Below:");
	totalWaitTime = timeOfDay - currentTime;
	while (currentTime < timeOfDay) {
		timeRemaining = timeOfDay - currentTime;
		console.log ("Current time is " + currentTime +":00.  The ideal time to surf is at " + timeOfDay + ":00.  There is " + timeRemaining + " hrs. remaining till SURF TIME!!!");
		currentTime = currentTime + 1;
	};
	console.log ("Time to go SURFING!!!");
	return (totalWaitTime);	
};  //end surfTime function


//(Array Function Task): Surfers to catch wave in set.  Returns the number of remaining waves.
var catchWave = function (wavesInSet, surfer) { 
	var wavesLeft = wavesInSet;
	
	console.log ("(Array Function Task): Output From the FOR Loop Listed Below:");
	surfer.push("Bethany Hamilton");  //to test .push method for an Array
	surfer.push("Lyndon Modomo"); //to test .push method for an Array
	surfer.push("Rick Osborne"); //to test .push method for an Array.  Added one more the then number of waves to test if there are more surfers then waves.
	// console.log (surfer.length);
	console.log ("There are " + wavesInSet + " waves in a set today, and there are " + surfer.length + " surfers ready to catch the waves.");
	
	if (surfer.length <= wavesInSet) {
		for (var i = 0, j = surfer.length; i < j; i++) {
			wavesLeft--;
			console.log (surfer [i] + " catches wave " + (i+1));
		}
	}else {
		for (var i = 0, j = wavesInSet; i < j; i++) {
			wavesLeft--;
			console.log (surfer [i] + " catches wave " + (i+1));
		}
	}
	return (surfer);	
};  //end catchWave function

//(String Function Task) Concatenated slang words.
var slangVerse = function (phase1, phase2) { 
	var phase;
	
	phase = "(String Function Task /Returned Value): Why do surfer's have such a strange language.  They say things like " + phase1 + ", " + phase2 + ", etc...";
	return (phase);	
};  //end slangVerse function


//For Procedure Task
goodBeachDay (niceBeachDay);

//For Boolean Function Task
goodSurfDay = idealDayToSurf (sunnyDay, surfsUp);
console.log ("(Boolean Function Task / Returned Value): Is it a good day to surf : ", goodSurfDay);

//For Number Function Task
waitTime = surfTime(idealTimeToSurf);
console.log ("(Number Function Task / Returned Value): The total hours the surfer's had to wait to go surfing: ", waitTime +" hrs.");

surfers = catchWave(numOfWavesInSet, surfers);
console.log ("(Array Function Task / Returned Value): Array values: ", surfers);

//For String Function Task
slangPhrase = slangVerse(slang1, slang2);
console.log (slangPhrase);