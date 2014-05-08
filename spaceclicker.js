var version = "SpaceClicker v0.0.1";
var dust = 0;
var bricks = 0;
var minerals = 0;
var metal = 0;
var stock = {"dust": 0,"bricks": 0,"minerals":0,"metal":0};

console.log( version );

// Setup
$( document ).ready(function() {
	update();
});

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

function showstock(item){
	console.log([item]);
	if ([item] > 0) {  $("#"+item).text([item] + " " + item); };
};

function update() {
	$("#dust").text(stock["dust"] + " dust");
	showstock("bricks");
	showstock("minerals");
	showstock("metal");

	if(dust < 5){ $("#compactlink").hide();	} else { $("#compactlink").show(); };
	if(minerals < 10){ $("#refinelink").hide(); } else { $("#refinelink").show(); };
};


function scrape(){	
	stock["dust"] = stock["dust"] + 1;
	var rnd = randomInt(1,5);
    if (rnd==5) {
    	minerals = minerals	+ 1;
    };
	update();
};

function compact(){
	dust = dust - 5;
	bricks = bricks + 1;
	update();
};

function refine(){
	minerals = minerals - 10;
	metal = metal + 1;
};