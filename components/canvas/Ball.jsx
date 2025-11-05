import React,{Suspense, useState,forwardRef} from "react";
import { Float, OrbitControls, Preload, useTexture, Decal} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {CanvasLoader} from "./"

const Model=function Model(props,ref){
    const [decal]=useTexture([props.imgUrl])
    const {color,floatIntensity}=props
  return(
          <Float ref={ref} speed={1.75} rotationIntensity={1} floatIntensity={floatIntensity}>
                <ambientLight intensity={0.25}/>
                <directionalLight position={[0,0,0.05]}/>
                <mesh castShadow receiveShadow scale={2.15}>
                    <icosahedronGeometry args={[1,1]}/>
                    <meshStandardMaterial 
                    color={`${color}` || "#000"}
                    flatShading 
                    polygonOffset 
                    polygonOffsetFactor={-5}/>
                    <Decal position={[0,0,1]}
                     rotation={[2*Math.PI, 0, 6.25]} 
                     scale={2} 
                     map={decal} 
                     flatShading/>
                </mesh>
          </Float>
  )
}

const Ball=({icon,floatIntensity})=>{
    console.log(floatIntensity,'floatIntensity')
    return(
        <Canvas
        className="cursor-grab mt-2"
            gl={{preserveDrawingBuffer: true}}
            frameloop='demand'
            camera={{position: [-7,-5,25],fov: 15}}
            dpr={[1,2]}>
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}/>
                <Model imgUrl={icon} floatIntensity={floatIntensity}/>
            </Suspense>
            <Preload all/>
      </Canvas>
    )
}

export default Ball;