// vert file and comments from adam ferriss
// https://github.com/aferriss/p5jsShaderExamples

// our vertex data
attribute vec3 aPosition;

attribute vec2 aTexCoord;
attribute vec3 aNormal;

uniform mat4 uProjectionMatrix;
uniform mat4 uModelViewMatrix;
uniform mat4 uNormalMatrix;

varying vec3 vNormal;
varying vec3 vEye;


void main() {
// We need to calculate the world space eye position, and the world space normal
vEye = normalize( vec3(uModelViewMatrix * vec4(aPosition, 1.0)));

// Typically you would use uNormalMatrix instead of uModelViewMatrix but currently there is a bug in uNormalMatrix
// uModelViewMatrix will work fine here unless you are doing some non-uniform scaling
vNormal = normalize((uModelViewMatrix * vec4(aNormal, 0.0)).xyz);
  vec4 positionVec4 = vec4(aPosition, 1.0);


  gl_Position = uProjectionMatrix * uModelViewMatrix * positionVec4;




  // vTexCoord = aTexCoord;
  // // copy the position data into a vec4, using 1.0 as the w component
  // vec4 positionVec4 = vec4(aPosition, 1.0);
  // positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // // send the vertex information on to the fragment shader
  // gl_Position = positionVec4;
}
