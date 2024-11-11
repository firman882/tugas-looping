

function setup() {
  createCanvas(400, 400);
  background(0); 
}

function draw() {
  noLoop();
  

  for (let i = 0; i < 10; i++) {
    let x = 20 + i * 35;
    let y = height / 2; 
    let size = 55;

    fill(100 + i * 15, 50, 200 - i * 10);
    triangle(x, y, x + size, y, x + size / 2, y - size);
  }
}




