function generativeTexture () {
  // this is the function with the code for creating the texture
  // first it creates a random color
  // if(mouseIsPressed) {
  // //   let r = random(255)
  // // let g = random(255)
  // let r = mouseX
  // let g = mouseY
  // let b = random(255)
  // tex.fill(r, g, b)
  // // then it creates a random circle of that color
  // let x = random(0, width)
  // let y = random(0, height)
  // let s = random(50, 100)
  // //noStroke()
  // //Stroke(1)
  // tex.ellipse(x, y, s)}
  // tex.background(255);
  // for(i=0)

  // //beginShape()
  tex.ellipse(random(20,80),random(30,100),mouseX)
  tex.noFill();
  tex.strokeWeight(random(0,5))
  tex.stroke(mouseX,random(20,180),random(100,200));
  var x1 = width * noise(t + 15);
  var x2 = width * noise(t + 25);
  var x3 = width * noise(t + 35);
  var x4 = width * noise(t + 45);
  var y1 = height * noise(t + 55);
  var y2 = height * noise(t + 65);
  var y3 = height * noise(t + 75);
  var y4 = height * noise(t + 85);

  tex.bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  // tex.bezier(x2, y2, x3, y4, x1, y1, x4, y3)
  tex.bezier(x4, y2, x1, y3, x3, y1, x4, y3)
  t += 0.8;
  // //endShape()
}
