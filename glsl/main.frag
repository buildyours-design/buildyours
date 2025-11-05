uniform sampler2D uTexture;
uniform float uNbLines;
uniform float uNbColumns;
uniform float uProgress;
varying vec2 vTexCoords;
float circle(vec2 uv, float border){
  float radius=0.5;
  float dist=radius*distance(uv, vec2(0.5));
  return smoothstep(0.0, border, dist);
}

void main() {
  vec2 uv=gl_PointCoord;
  uv.y*= -1.;
  uv /= vec2(uNbLines, uNbColumns);
  float texOffsetU=vTexCoords.x / uNbLines;
  float texOffsetV=vTexCoords.y / uNbColumns;
  uv += vec2(texOffsetU, texOffsetV);
  uv+=vec2(0.5);
  vec4 texture=texture2D( uTexture,uv);
  gl_FragColor=texture;
}