let input, button, greeting;
var slider;
var slider2;
var slider3;

function setup() {
  createCanvas(1080, 1080);
  slider = createSlider(10,500,200);
  slider.position(500,30);

  slider2 = createSlider(10,500,500);
  slider2.position(500,70);

  slider3 = createSlider(10,50,20);
  slider3.position(500,100);

  input = createInput();
  input.position(500, 140);

button = createButton('submit');
  button. position(input.x + input.width, 140);
  button.mousePressed(draw);


  greeting = createElement('h2', 'TYPEANYTHING');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

/*function enter() {
  if (event.which == 13 || event.keyCode == 13) {
        function greet();
        return false;
    return true;
}*/


function draw() {
  background(255);

  const name = input.value();
  greeting.html(name);
  input.value('');

  for (let y = 0; y < height; y+=slider2.value()) {
    push();
    fill(200);
    translate(slider.value(), 0);
    textSize(slider3.value());
    textLeading(slider.value());
    text(name, y, slider2.value());
    pop();
  }
  ctx.clearRect(0, 0, width, height)
};

/* Timeline scrubbing — CLICK AND DRAG
    var scrubbing = false;
var nextPage = null;

function scrub() {
    if (nextPage) changePage(parseInt(nextPage.slice(1)));;
    if (scrubbing) window.requestAnimationFrame(scrub);
}

timeline = document.querySelector('#timeline');
timeline.onmousedown = function (event) {
    event.preventDefault();
    scrubbing = true;
    // For performance, only update page when browser is ready
    window.requestAnimationFrame(scrub);
};
timeline.onmouseover = function (event) {
    // While scrubbing, update the nextPage to display
    if (!scrubbing) return;
    var x = event.clientX;
    var y = event.clientY;
    var elem = document.elementFromPoint(x, y);
    if (elem.tagName != 'A') return;
    nextPage = event.target.getAttribute('href');
};
document.onmouseup = function (event) {
    if (!scrubbing) return;
    if (nextPage) window.location = nextPage;
    scrubbing = false;
    nextPage = null;
};
};*/

// Timeline scrubbing — HOVER
//var nextPage = null;

/* function scrub() {
    if (nextPage) changePage(parseInt(nextPage.slice(1)));
}
timeline = document.querySelector('#timeline');
timeline.onmouseover = function (event) {
    var x = event.clientX;
    var y = event.clientY;
    var elem = document.elementFromPoint(x, y);
    if (elem.tagName != 'A') return;
    nextPage = elem.getAttribute('href');
    // For performance, only update page when browser is ready
    window.requestAnimationFrame(scrub);
};
timeline.onmouseleave = function (event) {
    if (!nextPage) return;
    window.history && window.history.replaceState(null, null, nextPage);  
};  */