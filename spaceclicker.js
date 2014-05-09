var version = "SpaceClicker v0.0.1";
var stash = {dust:0,bricks:10,minerals:10,metal:0, robots:0, scrapers:0};

console.log( version );

// Setup
$( document ).ready(function() {
	update();
});

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};


function update() {
	var count = 0;
	for(key in stash) {
		count += stash[key];
		if (stash[key] > 0) {
		  $("#"+key).text(stash[key] + " " + key);
		}
		else {
		  $("#"+key).text("");
		};
	};
	if (count == 0) { $("#dust").text("nothing");};
	$("#dust").append((" <a href='#' onClick='scrape()'>Scrape</a>"));
	if (stash["dust"] >= 5) {
		$("#dust").append((" <a href='#' onClick='compact()'>Compact (-5 dust)</a>"));
		};
	if (stash["minerals"] >= 10) {
		$("#minerals").append((" <a href='#' onClick='refine()'> Refine (-10 minerals)</a>"));
		};
	if (stash["metal"] >= 1) {
		$("#metal").append((" <a href='#' onClick='brobot()'> Build robot (-1 metal)</a>"));
		};			
	if ((stash["bricks"] >= 10) && (stash["robots"] >= 1)) {
		$("#bricks").append((" <a href='#' onClick='bscraper()'> Build scraper (-10 bricks, -1 robot)</a>"));
		};

};

function scrape(){	
	stash["dust"]++;
	var rnd = randomInt(1,5);
    if (rnd==5) {
		stash["minerals"]++;
    };
	update();
};

function compact(){
	stash["dust"] -= 5;
	stash["bricks"]++;
	update();
};

function refine(){
	stash["minerals"] -= 10;
	stash["metal"]++;
	update();
};

function brobot() {
	stash["metal"]--;
	stash["robots"]++;
	update();
};

function bscraper() {
	stash["robots"]--;
	stash["bricks"] -= 10;
	stash["scrapers"]++;
	setInterval(function(){
		scrape();
		update();
	},1000);
};
