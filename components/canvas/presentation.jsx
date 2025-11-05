import {Canvas, extend, useFrame, useLoader} from "@react-three/fiber"
import * as THREE from "three";
import React, {useRef, Suspense} from "react";
import {shaderMaterial} from "@react-three/drei"
import fragmentShader from "../../glsl/wave.frag"
import vertexShader from "../../glsl/wave.vert"
import {ShaderMaterial} from "three";

 const WaveShaderMaterial=shaderMaterial(
    {uTexture: new THREE.Texture(),uTime: 0, uColor: new THREE.Color(0.0,0.0,0.0)},
    vertexShader,
    fragmentShader
); 
extend({WaveShaderMaterial});

const Wave=()=>{
    const ref=useRef();
    useFrame(({clock})=>(ref.current.uTime=clock.getElapsedTime()))
    const [image]=useLoader(THREE.TextureLoader, ['./assets/bg10.jpeg'])
    return (
        <mesh>
            <planeGeometry args={[0.4,0.6,16,16]}/>
            <waveShaderMaterial  uColor={'hotpink'} uTexture={image} ref={ref}/>
            {/* <meshStandardMaterial color="#addd8E6"/> */}
            {/* pos.z+=snoise3(noisePos)*noiseAmp; */}
         </mesh>
    )
}
const Scene=(()=>{
    return(
            <Canvas  camera={{fov:10, position: [0,0,1], near: 0.1, far:10}}>
                {/* <pointLight position={[10,10,10]}/> */}
               <Suspense fallback={null}>          
                        <Wave/>
               </Suspense>
            </Canvas>

    )
})

const Presentation = () => {
  return (
    <div className="absolute z-[-9999] left-0 right-0 bg-white h-screen">
        <Scene/>
    </div>
  )
}

export default Presentation