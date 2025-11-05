import React,{Suspense, useEffect, useRef,useMemo,useState, forwardRef, createContext, useContext} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {useGLTF, OrbitControls} from "@react-three/drei"
import {useFrame, useThree, Canvas} from "@react-three/fiber"
import * as THREE from "three"
import CanvasLoader from './canvas/Loader'
import SplitType from "split-type"

const Model=forwardRef((props,ref)=>{
    let modelSize;
    const cameraDistance=1.25
    const isMobile=window.innerWidth<1280;
    const {scene}=useGLTF('/assets/shaker.glb')
    if(!scene) return;
    
     const box=new THREE.Box3().setFromObject(scene);
    const size=box.getSize(new THREE.Vector3())
    const center=box.getCenter(new THREE.Vector3())
    modelSize=size;
    const {camera, gl}=useThree();
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.position.set(0,0,Math.max(modelSize.x,modelSize.y,modelSize.z)
    *cameraDistance)
    camera.lookAt(0,0,0)
    isMobile?gl.setSize(window.innerWidth/0.8, window.innerHeight/2):gl.setSize(window.innerWidth/2.5, window.innerWidth/2.5);
    gl.setPixelRatio(Math.min(window.devicePixelRatio,2))
    scene.position.set(
       -center.x-modelSize.x*0.4, -1.7,-center.z
    )

    /* scene.rotation.z=THREE.MathUtils.degToRad(-25) */

    return(
            <primitive ref={ref} object={scene}/>
    )})


const Billboards = () => {
    let currentRotation=0;
    const billboardContainer=useRef()  
    const footerBillboard=useRef()
    const ref=useRef()
    if(ref.current) return;
    useEffect(()=>{
        const footerBillboardChars=new SplitType(footerBillboard.current,{
            type:'chars',
            charClass:'char'
        })
        

        footerBillboardChars.chars.forEach((char)=>(
            char.innerHTML=`<span>${char.innerHTML}</span>`
        ))

        console.log(footerBillboard.current,"footerBillboard")

        ScrollTrigger.create({
            trigger:billboardContainer.current,
            start:'75% bottom',
            onEnter:()=>
                gsap.to('#footerBillboard .char > span',{
                    y:'0%',
                    duration:1,
                    ease:'power3.out',
                    stagger:0.025
                }),
            onLeaveBack:()=>
                gsap.to('#footerBillboard .char > span',{
                    y:'100%',
                    duration:1,
                    ease:'power3.out',
                    stagger:0.025
                })
        })
        ScrollTrigger.create({
            trigger:billboardContainer.current,
            start:'top top',
            end:`+=3000`,
            pin:true,
            pinSpacing:true,
            anticipatePin:true,
            scrub:1,
            onUpdate:({progress})=>{
                const headerProgress=Math.max(0,Math.min(1,(progress-0.05)/0.3));
                gsap.to(footerBillboard.current,{
                    xPercent:progress<0.05?0:progress>0.35?-100:-100*headerProgress
                })


                if(progress>0.05){
                    const rotationProgress=(progress-0.05)/0.95;
                    const targetRotation=Math.PI*3*4*rotationProgress;
                    const rotationDiff=targetRotation-currentRotation;
                    if(Math.abs(rotationDiff)>0.001){
                        ref.current.rotateOnAxis(new THREE.Vector3(0,1,0),rotationDiff);
                        currentRotation=targetRotation;
                    }
                }
            }
            })
        
    })

    /* useFrame((state,delta)=>{
        const targetRotation=Math.PI*3*4*trackProgress.current;
        const rotationDiff=targetRotation-currentRotation;
        trackProgress.current=rotationDiff;
        if(Math.abs(rotationDiff)>0.001){
            modelRef.current.rotateOnAxis(new THREE.Vector3(0,1,0),rotationDiff);
            currentRotation=targetRotation;
        }
    }) */
    
  return (
            <section ref={billboardContainer} className=" relative lg:px-6 bg-red-500 h-screen">
                <div className="w-[200vw] sm:mb-6 lg:mb-10">
                        <h1 ref={footerBillboard} id="footerBillboard" className="text-black xs:text-[clamp(2.5rem,6vw,4rem)] xs:leading-[clamp(35px,8vw,45px)]  md:leading-[clamp(50px,4vw,70px)] font-grotesk lg:text-9xl sxs:text-lg">welcome to build yours</h1>
                </div>
                <div className="flex sxs:flex-col lg:flex-row gap-3 justify-center">
                        <div className="lg:w-[980px]">
                            <h2 className="font-bosch sxs:text-base xs:text-[clamp(1rem,3.5vw,1.5rem)] lg:text-xl tracking-wide">
                               My software engineering journey has been one of steady growth, marked by valuable learning experiences and practical exposure to real-world challenges.Looking ahead, my aspirations are centered on bridging these gaps and pushing myself towards mastery in both technical and leadership dimensions. I aspire to refine my ability to design solutions that are not only technically sound but also user-focused and impactful.
                            </h2>
                            <h1 className="font-grotesk xs:text-[clamp(2.5rem,6vw,4rem)] xs:leading-[clamp(40px,10vw,60px)] sxs:text-3xl lg:text-8xl tracking-wide">connect to your clients</h1>
                        </div>
                        
                 <div className="">
                    <Canvas
                        frameloop="always"
                        camera={{fov:'50',near:0.5,far:1000}}
                        gl={{antialias:true, alpha:true}}      
                >
                    <Suspense fallback={<CanvasLoader/>}>
                        <directionalLight position={[1,2,3]} intensity={1.0} shadow-mapSize={[1024,1024]} castShadow/>
                        <directionalLight color={0xffffff} intensity={0.5} position={[-2,0,-2]}/>
                        <ambientLight color={'Oxffffff'} intensity={0.7}/>
                        <Model ref={ref}/>
                    </Suspense>
                </Canvas>
                </div>
                    </div>
                

            </section>
  )
}

export default Billboards