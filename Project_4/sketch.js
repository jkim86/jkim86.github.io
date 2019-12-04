var weather2;
var weather;
var api='http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey='&APPID=6daed46d680498fcb0aa616ec597a5dd';
var units='&units=metric';
var input;
var input2;

var canvas;

function setup(){
	canvas=createCanvas (windowWidth, windowHeight);
	canvas.parent(document.getElementById('canvass'));
			var button_one = select('#go');
			var button_two = select('#gotwo');
	button_one.mousePressed(askWeather);
	button_two.mousePressed(askWeather2);
	input = select('#city');
	input2 = select('#citytwo');
	frameRate(10);
}

	function askWeather(){
		city = input.value();
	var url = api+city+apiKey+units;
	console.log(url);
	loadJSON(url,gotData);
}

	function askWeather2(){
		citytwo = input2.value();
	var url2 = api+citytwo+apiKey+units;
	console.log(url2);
	loadJSON(url2,gotData2);
}

function gotData(data){
	weather=data;

}

function gotData2(data2){
	weather2=data2;

}


function draw(){
	background(255);
	var off = radians(frameCount);
		if(weather){
		let t = map(weather.main.temp, -30, 40, 0, 500);
		let h = map(weather.main.humidity,0,100,0,20);


	for (var x = h ; x <= width; x+=h){
	for (var y = h; y<=height; y+=h){

	var move = sin(x/height * radians(360) + off) * t
		fill(10);
		point(x,width/5+move,x+50,x+50)
		strokeWeight(3)


		 }}}


		if(weather2){
		let t2 = map(weather2.main.temp, -30, 40, 0, 500);
		let h2 = map(weather2.main.humidity,0,100,0,20);


	for (var x2 = h2 ; x2 < width/2; x2+=h2){
	for (var y2 = h2; y2<=height; y2+=h2){
	var movetwo = sin(x/height * radians(360) + off) * t2
		fill(200);
		point(width/2,width/5+move,x2,x2)
		strokeWeight(10)
	}}}
}


