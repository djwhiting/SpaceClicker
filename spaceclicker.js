var version = "SpaceClicker v0.0.1";
var stash = {dust:0,bricks:0,minerals:0,scrapers:0};

console.log( version );

// Setup
$( document ).ready(function() {
    setInterval(function () { automate(); }, 1000);
    update();
});

function randomInt(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
};


function update() {
    var count = 0;
    // display stash
	for(key in stash) {
		count += stash[key];
		if (stash[key] > 0) {
		  $("#"+key).text(stash[key] + " " + key);
		}
		else {
		  $("#"+key).text("");
		};
	};

    // update buttons
	if (count == 0) { $("#dust").text("nothing");};
	$("#dust").append((" <a href='#' onClick='scrape()'>Scrape</a>"));
	if (stash["dust"] >= 5) {
		$("#dust").append((" <a href='#' onClick='compact()'>Compact (-5 dust)</a>"));
		};
	if ((stash["bricks"] >= 10) && (stash["minerals"] >= 10)) {
		$("#minerals").append((" <a href='#' onClick='bscraper()'> Build scraper (-10 bricks, -10 minerals)</a>"));
	};
};

function automate() {
    for (var i = 0; i < stash["scrapers"]; i++) {
        scrape();
    }
    update();
}

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

function bscraper() {
	stash["minerals"] -= 10;
	stash["bricks"] -= 10;
	stash["scrapers"]++;
	update();
};
