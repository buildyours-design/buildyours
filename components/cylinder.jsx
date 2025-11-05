import React,{Suspense, useEffect, useRef} from 'react'
import gsap from "gsap" 
import ScrollTrigger from "gsap/ScrollTrigger"
import * as THREE from "three"
import {TextureLoader} from "three/src/loaders/TextureLoader"
import {Canvas, useThree, useLoader, useFrame} from "@react-three/fiber"
import {useTexture} from "@react-three/drei"
import CanvasLoader from './canvas/Loader'
import SplitType from "split-type"
import {useGLTF} from "@react-three/drei"


const Model=()=>{
  const cylinder=useRef()
  let modelSize;
  const {camera}=useThree()
  /* const {scene}=useGLTF('./assets/shaker.glb') */
  const imageTexture=useTexture('/assets/image14.jpg')
  const box=new THREE.Box3()
  const center=box.getCenter(new THREE.Vector3())
  modelSize=box.getSize(new THREE.Vector3());


  camera.lookAt(0,0,0)
  useFrame((delta,state)=>{
    if(cylinder.current){
      cylinder.current.rotation.y=THREE.MathUtils.degToRad(170)
      cylinder.current.rotation.z=THREE.MathUtils.degToRad(25)
    }
  })
  

  return(
    <mesh ref={cylinder}>
      <cylinderGeometry args={[1,1,4,32,1,false]}/>
      <meshStandardMaterial map={imageTexture}/>
    </mesh>
  )
}


const CylinderTexture = () => {
  return (
    <Canvas
      
    >
        <Suspense>
          <directionalLight position={[1,2,3]} intensity={0.7}/>
          <directionalLight position={[2,2,1]} intensity={0.7}/>
          <ambientLight color={'red'}/>
          <Model/>
        </Suspense>
    </Canvas>
  )
}

export default CylinderTexture