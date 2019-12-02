let chair;
let angle = 0;
// let cam;

function preload(){
	chair=loadModel('CHAIR_4.obj');
}

function setup(){
	createCanvas(400,300,WEBGL);
	cam = createCapture (VIDEO);
	cam.size(320, 240);
  	// cam.hide();
}

function draw(){
	background (0);
	ambientLight(100);
	directionalLight(255,255,255,0,0,1);
	// texture(cam);
	model(chair);
  	angle += 0.03;
}