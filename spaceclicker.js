var version = "SpaceClicker v0.0.1";
var dust = 0;
var bricks = 0;

console.log( version );

// Setup
$( document ).ready(function() {
	update();
});


function update() {
	if(dust < 5){
		$("#compactlink").hide();
	}
	else {
		$("#compactlink").show();
	};

	$("#dust").text(dust + " dust ");
	if (bricks > 0) {
	  $("#bricks").text(bricks + " bricks ");
	};
};


function scrape(){	
	dust = dust + 1;
	update();
};

function compact(){
	dust = dust - 5;
	bricks = bricks + 1;
	update();
};