let t;

function setup() {
  t = random(1000);
  
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-background');
  noFill();
  strokeWeight(1.5);
}

function draw() {
  background(240, 244, 247, 15); // Light, semi-transparent background for smooth fading

  // Style for calligraphic curves
  stroke(50, 80, 160, 100); // Deep blue with slight transparency

  // Generate control points for more elegant and refined curves
  for (let i = 0; i < 10; i++) {
    let x1 = width * 0.3 + sin(t * 0.3 + i) * 200;
    let y1 = height * 0.3 + cos(t * 0.2 + i) * 150;
    let x2 = width * 0.7 + cos(t * 0.4 + i) * 250;
    let y2 = height * 0.5 + sin(t * 0.5 + i) * 200;
    let x3 = width * 0.5 + sin(t * 0.5 + i) * 250;
    let y3 = height * 0.7 + cos(t * 0.3 + i) * 200;
    let x4 = width * 0.3 + cos(t * 0.6 + i) * 300;
    let y4 = height * 0.5 + sin(t * 0.2 + i) * 150;

    // Draw a smooth, calligraphic Bezier curve
    bezier(
      x1, y1,
      x2, y2,
      x3, y3,
      x4, y4
    );
  }

  t += 0.01; // Increment time variable for animation
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
