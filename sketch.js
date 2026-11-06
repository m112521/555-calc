let n = 10;
let amp = 20;
let slider;
function setup() {
  createCanvas(500, 300);
  background(255, 120, 0);
  slider = createSlider(0, 100);
 }
 
 function draw() {
  background(255, 120, 0);
   let period = 2*width/n;
   translate(0, height/2);
   let duty = slider.value();

   let x1 = 0;
   let y1 = 0;
   for (let i = 0; i < n; i++) { 
    if (i % 2 == 0) {
      print(duty);
      x2 = x1 + period * (duty/100);
      line(x1, y1, x2, y1);
      x1 = x2;
      line(x1, y1, x2, y1 + amp);
    }
    else {
      x2 = x1 + period * (1 - (duty/100));
      line(x1, y1 + amp, x2, y1 + amp);
      x1 = x2;
      line(x1, y1, x2, y1 + amp);
    }
   }
 }
