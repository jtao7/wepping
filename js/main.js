let obj0
let obj1
let obj2
let obj3
//var xoff= 0
var t
let angle =0


function preload () {
  // Load 3D model with normalise parameter set to true
  obj0 = loadModel('models/Dog.obj', true)
  obj1 = loadModel('models/Head.OBJ', true)
  obj2 = loadModel('models/flower.obj', true)
  obj3 = loadModel('models/gg.obj',true)
}

function setup () {

  // create a 3D canvas that matches the size of the window
  createCanvas(innerWidth, innerHeight, WEBGL)
  // create a drawing canvas to use as a texture
  //pixelDensity(2)
  tex = createGraphics(400, 400)
  tex.background(random(0,40),random(50,150),random(40,100))
  t = 0;
  angleMode(DEGREES)
}


function light (){
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);
  pointLight(100,20,50,-200,50,0)
}



function draw () {
  backgroundtex () // create purple background color
  light()
  //////rotateX(110)
  rotateZ(180)
  // rotateX(frameCount * 0.01) // rotates the obj on the X axis
   // rotates the obj on the Y axis
  //// var x= map(noise(xoff), 0, 1, 0, width)
  //// xoff += 0.001
  //// box(x,20,10)

  generativeTexture() // updates the texture


  scale(2.5) // changes the size of the obj
   noStroke()
  texture(tex) // adds the texture to the obj

  if (mouseButton == LEFT) {
  background(100,0,150)
  push()
  scale(0.8)
  rotateY(angle)
  model(obj1)  // human object
  pop()
} else if (mouseButton == RIGHT) {
  push()
  //scale(2.5)
  rotateY(angle)
  model(obj0) // dog object
  pop()
}else {
  push()
  //scale(2.5)
  rotateY(angle)
  model(obj0)  // dog object
  pop()
}
  // the sub objects' rotation & position

  push()
  rotateY(140)
  rotateX(30)
  rotateZ(10)
  translate(-40,60,100)
  model(obj2) //left
  pop()

  // push()
  // rotateY(180)
  // rotateX(10)
  // rotateZ(10)
  // translate(-60,60,130)
  // model(obj2) // second left
  // // translate(70,0,0)
  // // model(obj2)
  // pop()

  push()
  scale(1.3)
  rotateY(180)
  rotateX(20)
  rotateZ(-10)
  translate(0,80,130)
  model(obj2) // second right
  pop()



  push()
  scale(1.2)
  rotateY(-140)
  rotateX(40)
  rotateZ(-20)
  translate(40,100,100)
  model(obj2) // right
  pop()


  stroke(255,10) // make a stroke on the model
  scale(2)
  rotateX(190)
  translate(0,60,30)
  rotateY(-180)
  model(obj3) // draws the obj to the screen


  //box(100,200,100)
  angle= angle +0.5

}
