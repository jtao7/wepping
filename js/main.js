let theShader
let obj0
let obj1
let obj2
let obj3
let obj4
//var xoff= 0
let t
let angle =0


function preload () {
  theShader = loadShader('texture1.vert', 'texture1.frag')
  // Load 3D model with normalise parameter set to true
  obj0 = loadModel('models/Dog.obj', true)
  obj1 = loadModel('models/Head.OBJ', true)
  obj2 = loadModel('models/flower.obj', true)
  obj3 = loadModel('models/gg.obj',true)
  obj4 = loadModel('models/bg_ring_.obj',true)
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
  // textAlign(CENTER);
  // text('Click Me!', width / 2, height / 2);
  alert("left/middle button = change the models\nmouse position = light's direction & textures")
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

    push()
    shader(theShader)
    theShader.setUniform("u_resolution", [width, height])
    theShader.setUniform("u_time", millis() / 1000.0)
    theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)])
    scale(0.6)
    translate(-10,-130,-50)
    rotateX(-10)
    rotateZ(50)
    //noStroke()
    model(obj4) //necklace
    pop()
  }
  else {
    push()
    //scale(2.5)
    rotateY(angle)
    model(obj0)  // dog object
    pop()

    push()
    shader(theShader)
    theShader.setUniform("u_resolution", [width, height])
    theShader.setUniform("u_time", millis() / 1000.0)
    theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)])
    scale(0.3)
    translate(-40,300,-50)
    rotateY(190)
    //noStroke()
    model(obj0) //middle dog
    pop()

    push()
    shader(theShader)
    theShader.setUniform("u_resolution", [width, height])
    theShader.setUniform("u_time", millis() / 1000.0)
    theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)])
    scale(0.3)
    translate(-40,310,-50)
    rotateY(180)
    //noStroke()
    translate(450,-100,0)
    model(obj0) //right dog
    pop()
    pop()

    push()
    shader(theShader)
    theShader.setUniform("u_resolution", [width, height])
    theShader.setUniform("u_time", millis() / 1000.0)
    theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)])
    scale(0.3)
    translate(400,200,-50)
    rotateY(180)
    //noStroke()
    model(obj0) //left dog
    pop()
  }

  push()
  rotateY(140)
  rotateX(30)
  rotateZ(10)
  translate(-40,60,100)
  model(obj2) //left flower
  pop()

  push()
  scale(1.3)
  rotateY(180)
  rotateX(20)
  rotateZ(-10)
  translate(0,80,130)
  model(obj2) // second right flower
  pop()

  push()
  scale(1.2)
  rotateY(-140)
  rotateX(40)
  rotateZ(-20)
  translate(20,100,100)
  model(obj2) // right flower
  pop()

  stroke(255,10) // make a stroke on the model
  scale(2)
  rotateX(190)
  translate(0,60,30)
  rotateY(-180)
  model(obj3) // ground

  angle= angle +0.5 //rotation for head & dog

}
