let input, button, greeting;
let slider;
let slider2;
let slider3;

function setup() {
  ctx=createCanvas(windowWidth,windowHeight);
  slider = createSlider(10,20,200);
  slider.position(770,700);

  slider2 = createSlider(10,20,100);
  slider2.position(770,730);


  slider3 = createSlider(10,20,20);
  slider3.position(770,760);

  input = createInput('Type Anything Here');
  input.position(770, 810);


  greeting = createElement('h2');
  greeting.position(770,200);
  textAlign(CENTER);
  textSize(40);
}


function draw() {
  background(255);

  const name = input.value();
  greeting.html(name);

  for (let y = 0; y < height; y+=slider2.value()) {
    for (let x = 0; x < width; x+=slider.value()){
    push();
    fill(200);
    translate(slider.value(), 0);
    textSize(slider3.value());
    textLeading(slider2.value());
    text(name,x,y);
    pop();
  }}};

let downloadbtn = document.getElementById('btn-download');
downloadbtn.addEventListener('click', function (e) {
    let dataURL = ctx.toDataURL('image/png');
    downloadbtn.href = dataURL;
});