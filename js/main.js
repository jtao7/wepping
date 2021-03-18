let obj // 3d object
let tex // texture

function preload () {
  // Load 3D model with normalise parameter set to true
  //noStroke()
  obj = loadModel('models/bg_ring.obj', true)

}

function setup () {
  // create a 3D canvas that matches the size of the window
  createCanvas(innerWidth, innerHeight, WEBGL)
  // create a drawing canvas to use as a texture
  tex = createGraphics(400, 400)
  tex.background(255)
}

function generativeTexture () {
  // this is the function with the code for creating the texture
  // first it creates a random color
  //pointLight(255,0,200,0)
  // let dx= mouseX -width/2; let dy= mouseY-height/2;
  // let dv= createVector(dx,dy,0); dv.normalize();
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  pointLight(255,0,0,-200,50,0)
  // pointLight(255,255,0,mouseX,mouseY,)
  //directionalLight(255,255,255,-10,1000,100)
  if(mouseIsPressed) {
  //   let r = random(255)
  // let g = random(255)
  let r = mouseX
  let g = mouseY
  let b = random(255)
  tex.fill(r, g, b)
  // then it creates a random circle of that color
  let x = random(0, width)
  let y = random(0, height)
  let s = random(50, 100)
  //noStroke()
  //Stroke(1)
  tex.ellipse(x, y, s)
}
}
function draw () {
  background(100,0,200) // create grey background color

  rotateX(frameCount * 0.01) // rotates the obj on the X axis
  rotateY(frameCount * 0.01) // rotates the obj on the Y axis
  generativeTexture() // updates the texture
  scale(2) // changes the size of the obj
  texture(tex) // adds the texture to the obj
  noStroke()
  model(obj) // draws the obj to the screen
}
