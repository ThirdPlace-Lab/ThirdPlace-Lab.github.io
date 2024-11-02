let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-background');
  
  // Initialize particles with random positions
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      vx: random(-1, 1),
      vy: random(-1, 1)
    });
  }
  
  strokeWeight(1);
}

function draw() {
  background(240, 244, 247, 15);

  // Draw particles
  particles.forEach(p => {
    fill(50, 80, 160, 150);
    noStroke();
    ellipse(p.x, p.y, 5, 5);

    // Move particles
    p.x += p.vx;
    p.y += p.vy;

    // Bounce particles off edges
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
  });

  // Draw lines between particles that are close to each other
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      let p1 = particles[i];
      let p2 = particles[j];
      let d = dist(p1.x, p1.y, p2.x, p2.y);

      if (d < 100) {
        stroke(50, 80, 160, map(d, 0, 100, 150, 0)); // Fades as distance increases
        line(p1.x, p1.y, p2.x, p2.y);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
