noseX = 0;
noseY = 0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav")
	mario_coin = loadSound("coin.wav")
	mario_gameOver = loadSound("gameover.wav")
	mario_kick  = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(600,300)
	video.parent('game_console')

	posenet=ml5.poseNet(video,modelloaded)
	posenet.on('pose',gotposes)
}

function draw() {
	game()
}

function modelloaded(){
	console.log("model is loaded")
}

function gotposes(result){
	if(result.length>0){
		console.log(result)
		noseX=result[0].pose.nose.x
		noseY=result[0].pose.nose.y
	}
}


