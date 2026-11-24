const sketch = (p) => {
  let n = 10;
  let amp = 50;
  //let slider;
  
  p.setup = () => {
    p.createCanvas(p.windowWidth-50, 400);
    //p.background(255, 120, 0);
    // slider = p.createSlider(0, 100);
  };
   
  p.draw = () => {
    p.clear();
    //p.background(255, 255, 255);
    let period = 2*p.width/n;
    p.translate(0, p.height/2);
    let duty = dc;// slider.value();

    let x1 = 0;
    let y1 = 0;
    for (let i = 0; i < n; i++) { 
      if (i % 2 == 0) {
        x2 = x1 + period * (duty/100);
        p.line(x1, y1, x2, y1);
        x1 = x2;
        p.line(x1, y1, x2, y1 + amp);
      }
      else {
        x2 = x1 + period * (1 - (duty/100));
        p.line(x1, y1 + amp, x2, y1 + amp);
        x1 = x2;
        p.line(x1, y1, x2, y1 + amp);
      }
    }
  };
}

new p5(sketch, "canvas-container");