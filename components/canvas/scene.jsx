import React,{Suspense, useEffect, useMemo, useRef, useState} from "react";
import {Canvas, useFrame} from "@react-three/fiber"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Lenis from "lenis";
import CanvasLoader from "./Loader";
import {OrbitControls, Preload, useGLTF,useTexture, Decal} from "@react-three/drei"
import {BufferGeometry, BufferAttribute, ShaderMaterial} from "three"
import { useThree } from "@react-three/fiber";
import {randFloat} from "three/src/math/MathUtils"
import fragmentShader from "../../glsl/main.frag"
import vertexShader from '../../glsl/main.vert'
import gsap from "gsap"


const ParticlesMaterial=(props)=>{
  const points=useRef()
  const guiObj={
    progress: 0,

  }
    const texture=useTexture(props.imgUrl)
    /* console.log(texture.source.data.currentSrc,"texture") */
     
     const geometry=new BufferGeometry()
     const multiplier=18
    const nbColumns=16*multiplier
    const nbLines=16*multiplier
    const vertices=[]
    const initPositions=[]
    
  /* for(let i=0; i<nbColumns;i++){
    for(let y=0; y<nbLines;y++){
        const point=[i,y,0]
        const dx=i-nbColumns/2
        const dy=y-nbLines/2
        const angle=Math.atan2(dy,dx)
        const radius=Math.sqrt(dx*dx + dy* dy)
        const initPoint=[point[0]+Math.cos(angle)*radius, point[1]+Math.sin(angle)*radius, randFloat(-50,50)]
        vertices.push(...point)
        initPositions.push(...initPoint)
    }
  } */

  for (let i = 0; i < nbColumns; i++) {
      for (let y = 0; y < nbLines; y++) {
        const point = [i, y, 0]
        const dx = i - nbColumns / 12
        const dy = y - nbLines * 2
        const angle = Math.cos(dy, dx)
        const radius = Math.sqrt(dx * dx + dy * dy)
        const initPoint = [point[0] + Math.sin(angle) * radius, point[1] + Math.cos(angle) * radius, randFloat(-50, 50)]

        vertices.push(...point)
        initPositions.push(...initPoint)
      }
    }


  const vertices32=new Float32Array(vertices)
    const initPositions32=new Float32Array(initPositions)
    geometry.setAttribute('position', new BufferAttribute(vertices32, 3))
    geometry.setAttribute('initPosition', new BufferAttribute(initPositions32,3))
    geometry.center()
    const material=new ShaderMaterial({
    fragmentShader,
    vertexShader,
    uniforms:{
      uTexture: {
        value: texture
      },
       uPointSize:{
        value:3
      },
      uNbLines:{
        value: nbLines
      },
      uProgress:{
         value:  guiObj.progress
      },
      uNbColumns:{
        value: nbColumns
      },
      uTime:{
        value:0
      },
    },
    transparent: false,
    depthTest: false,
    depthWrite: false,
  });
  useFrame((state)=>{
    material.uniforms.uTime.value=state.clock.getElapsedTime();
  })
  useEffect(()=>{
    const tl=gsap.timeline();
    tl.to(material.uniforms.uProgress,{
      value:1,
      ease:'linear'
    })

    ScrollTrigger.create({
      animation:tl,
      scrub:true,
      start:'+=9990',
      end:'+=1500'
    })
  })
    return(
      <points ref={points} geometry={geometry} material={material}/>
    )
}



const ImageLoader = ({texture}) => {
  const ref=useRef(null)
  return(
    <Canvas
        ref={ref}
        className='canvas'
        frameloop='always'
        dpr={[1,2]}
        camera={{position:[0,0,250],fov:60}}
        gl={{preserveDrawingBuffer: true, antialias: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
          {/* <OrbitControls enableDamping={true} enableZoom={false}/> */}
          <ParticlesMaterial  imgUrl={texture}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
};

export default ImageLoader;
