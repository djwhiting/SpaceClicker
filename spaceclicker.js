var version = "SpaceClicker v0.0.1";
var stash = {dust:0,bricks:0,minerals:0,metal:0};

console.log( version );

// Setup
$( document ).ready(function() {
	update();
});

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};

function update() {
	$("#dust").text(stash["dust"] + " dust");
	for(key in stash) {
		if (stash[key] > 0) {
		  $("#"+key).text(stash[key] + " " + key);
		}
		else {
		  $("#"+key).text("");
		};
	};

	if(stash["dust"] < 5) {$("#compactlink").hide();} else {$("#compactlink").show();};
	if(stash["minerals"] < 10) {$("#refinelink").hide();} else {$("#refinelink").show();};
};

function scrape(){	
	stash["dust"] = stash["dust"] + 1;
	var rnd = randomInt(1,5);
    if (rnd==5) {
		stash["minerals"] = stash["minerals"]	+ 1;
    };
	update();
};

function compact(){
	stash["dust"] = stash["dust"] - 5;
	stash["bricks"] = stash["bricks"] + 1;
	update();
};

function refine(){
	stash["minerals"] = stash["minerals"] - 10;
	stash["metal"] = stash["metal"] + 1;
	update();
};