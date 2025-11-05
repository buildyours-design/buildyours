uniform float uPointSize;
uniform float uProgress;
uniform float uFrequency;
uniform float uTime;
varying vec2 vTexCoords;

attribute vec3 initPosition;


void main() {
	#include <begin_vertex>
  transformed =initPosition+((position-initPosition)*uProgress);

  transformed.z+=sin(transformed.x*uFrequency);
  transformed.z+=sin(transformed.y*uFrequency);

	#include <project_vertex>
	gl_PointSize = uPointSize;

  vTexCoords=position.xy;
}