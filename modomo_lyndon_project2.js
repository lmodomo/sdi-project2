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
	remainingWaveCnt = 0,
	surfers = ["Kelly Slater", "Duke Kahanamoku", "Sunny Garcia", "Taj Burrow"],
	slang1 = "Surf\'s Up Brah",
	slang2 = "Goofy footed"
;
	

// (Procedure Task): Check to see if it is a good day for the beach or not
var goodDayForBeach = function (goodDay) { 
	if (goodDay === true) {   
		console.log ("(Procedure Task): It is a great day for the beach!!");
	}else {
		console.log ("(Procedure Task): It is NOT a great day for the beach, bummer dude...");
	}
};  //end goodDayForBeach function


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


//(Number Function Task): Count the number of waves in each set.  A set is x number
//	of continuous waves before a temporary break with no waves.
var sets = function (continuousWaves) { 
	var wavesInSet = continuousWaves,
		i = 1,
		numOfWaves = 0,
		percentOfWavesInSet = 0
	;
	
	console.log ("(Number Function Task) Output From The While Loop Listed Below:");
	while (i <= wavesInSet) {
		numOfWaves++;
		// percentOfWavesInSet = ((numOfWaves / continuousWaves).toFixed(2)) * 100;
		console.log ("Wave number " + i + " in the set of waves just passed by. " + percentOfWavesInSet + "% of the waves in the SET have now passed." );
		i++;
	};
	return (numOfWaves);	
};  //end sets function

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
	console.log ("There are " + wavesInSet + " waves in a set today");
	for (var i = 0, j = surfer.length; i < j; i++) {
		wavesLeft--;
		console.log (surfer [i] + " catches, wave " + (i+1));
	}
	return (wavesLeft);	
};  //end catchWave function

//(String Function Task) Concatenated slang words.
var slangVerse = function (phase1, phase2) { 
	var phase;
	
	phase = "(String Function Task /Returned Value): Why do surfer's have such a strange language.  They say things like " + phase1 + ", " + phase2 + ", etc...";
	return (phase);	
};  //end slangVerse function


//For Procedure Task
goodDayForBeach (niceBeachDay);

//For Boolean Function Task
goodSurfDay = idealDayToSurf (sunnyDay, surfsUp);
console.log ("(Boolean Function Task / Returned Value):Is it a good day to surf : ", goodSurfDay);

//For Number Function Task
waitTime = surfTime(idealTimeToSurf);
console.log ("The total hours the surfer's had to wait to go surfing: ", waitTime +" hrs.");

//For Array Function Task
remainingWaveCnt = catchWave(numOfWavesInSet, surfers);
console.log ("(Array Function Task / Returned Value):The number of waves remaining in the set: ", remainingWaveCnt);

//For String Function Task
console.log (slangVerse(slang1, slang2));