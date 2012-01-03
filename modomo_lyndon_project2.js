// Author: Lyndon H Modomo
// Created for: SDI-O Online Course (SDI-O 1201) : Project 2 / Deliverable 2
// Created on: 01/01/12

// Define & set all the variables for this JS file
var niceBeachDay = true,
	sunnyDay = true,
	surfsUp = true,
	numOfWavesInSet = 6,
	goodSurfDay,
	waveCnt,
	surfers = ["surfer1", "surfer2", "surfer3"],
	slang1 = "Surf\'s Up Brah",
	slang2 = "Goofy footed",
	surferTalk
;
	

// (Procedure Task): Check to see if it is a good day for the beach or not
var goodDayForBeach = function (goodDay) { 
	if (goodDay === true) {   
		console.log ("It is a great day for the beach!!");
	}else {
		console.log ("It is NOT a great day for the beach, bummer dude...");
	}
};  //end goodDayForBeach function


// (Boolean Function Task): Check to see if it will be a sunny day and check to see if "Surf's Up!"
var idealDayToSurf = function (sunny, niceWaves) { 
	if (sunny === niceWaves) {   
		console.log ("It is a great day to surf because the sun is out and Surf's Up Brah!!");
		return (true);
	}else {     
		console.log ("It is NOT a great day to surf.");
		return (false);
	}
};  //end idealDayToSurf function


//(Number Function Task): Count the number of waves in each set.  A set is x number
//	of continuous waves before a temporary break with no waves.
var sets = function (continuousWaves) { 
	var wavesInSet = continuousWaves,
		i = 1,
		numOfWaves = 0;
	
	while (i <= wavesInSet) {
		numOfWaves++;
		console.log ("Wave number " + i + " in the set of waves just passed by.");
		i++;
	};
	return (numOfWaves);	
};  //end sets function


//(Array Function Task): Surfers to catch wave in set.  Returns the number of remaining waves.
var catchWave = function (wavesInSet, surfer) { 
	var wavesLeft = wavesInSet;
	
	for (var i = 0, j = surfer.length; i < j; i++) {
		wavesLeft--;
		console.log ("Wave number " + (i+1) + " in the set.  " + surfer[i] + " will catch this wave.");
	};
	return (wavesLeft);	
};  //end catchWave function

//(String Function Task): Surfers have a strange lingo, where are some concatenated slang words.
var slangVerse = function (phase1, phase2) { 
	var phase;
	
	phase = "Why do surfer's have such a strange language.  They say things like " + phase1 + ", " + phase2 + ", etc...";
	return (phase);	
};  //end slangVerse function


//For Procedure Task
goodDayForBeach (niceBeachDay);

//For Boolean Function Task
goodSurfDay = idealDayToSurf (sunnyDay, surfsUp);
console.log ("Is it a good day to surf : ", goodSurfDay);

//For Number Function Task
waveCnt = sets(numOfWavesInSet);
console.log ("The numbers of waves in a set: ", waveCnt);

//For Array Function Task
waveCnt = catchWave(numOfWavesInSet, surfers);
console.log ("The numbers of waves remaining in the set: ", waveCnt);

//For String Function Task
surferTalk = slangVerse(slang1, slang2);
console.log (surferTalk);