import React,{forwardRef, Suspense, useContext, useEffect, useRef} from 'react'
import {Canvas, useLoader} from "@react-three/fiber"
import CanvasLoader from "./Loader"
import {OrbitControls} from "@react-three/drei"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import {presentationMaterial} from "../../constants/index"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {ParentContext} from "../presentations"

const Cube=forwardRef((props,ref)=>{
    const small_screen=window.innerWidth<=450;
    return(
       <mesh  ref={ref}>
         <boxGeometry args={[7,4,4]}/>
         {presentationMaterial.textureImage.map((imageTexture,index)=>{
            const material=useLoader(TextureLoader,imageTexture?.texture)
            return(
                <meshStandardMaterial attach={`material-${index}`} map={material} key={imageTexture?.name}/>
            )
            
        })}
       </mesh>
    )
})

const AnimateCube = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref=useRef()
    const canvasInstance=useRef()
    const maxRotation=Math.PI
    let frame;
    useEffect(()=>{
        const waitForRefs=()=>{
            if(!ref.current){
                frame=requestAnimationFrame(waitForRefs)
                return;
            }
            gsap.to(ref.current.rotation,{
                x: maxRotation,
                ease:'linear',
                scrollTrigger:{
                    trigger:canvasInstance.current,
                    start:'top 0%',
                    end:'+=1200',
                    scrub:true,
                    markers:false,
                    onUpdate:(self)=>{
                        console.log(self.progress,"progress")
                    }
                }
            })
        }

        waitForRefs()

        return ()=>cancelAnimationFrame(frame)
        
    })
  return (
    <Canvas  ref={canvasInstance}>
        <ambientLight intensity={2}/>
        <directionalLight position={[2,1,1]}/>
        
        <Suspense fallback={<CanvasLoader/>}>
            <Cube ref={ref}/>
        </Suspense>
    </Canvas>
  )
}

export default AnimateCube