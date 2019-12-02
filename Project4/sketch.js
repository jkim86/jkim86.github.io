var weather;
var api='http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey='&APPID=6daed46d680498fcb0aa616ec597a5dd';
var units='&units=metric';
var input;

var canvas;

function setup(){
	canvas=createCanvas (windowWidth, windowHeight);
	canvas.parent(document.getElementById('canvass'));
			var button = select('#go');
	button.mousePressed(askWeather);
	input = select('#city');
	frameRate(10);
}

	function askWeather(){
		city = input.value();
	var url = api+city+apiKey+units;
	console.log(url);
	loadJSON(url,gotData);

	}



function gotData(data){
	weather=data;
}

function draw(){
	background(255);
	// if(data.main.id === 803){
	// 	document.write("803");
	// 	console.log('hello');
	// }
	// if(data.weather ==="Snow"){
	// 	printIn("Snow");
	// }
	// if(data.weather ==="Extreme"){
	// 	printIn("Extreme");
	// }

	if(weather){
		let t = map(weather.main.temp, -30, 40, 0, 100);
		let h = map(weather.main.humidity, 0, 100, 0, 30);
		line(100,50,t,t);
		strokeWeight(h);
	}

}