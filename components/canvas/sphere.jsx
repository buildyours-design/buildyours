import React,{forwardRef, Suspense, useEffect, useRef} from "react"
import {Canvas} from "@react-three/fiber";
import {OrbitControls,Preload, useGLTF} from '@react-three/drei'

import CanvasLoader from "./Loader";

const Sphere=forwardRef(function(props,ref){
    const earth=useGLTF('/planet/scene.gltf')
    useEffect(()=>{
        console.log(ref.current)
    })
    return(
        <primitive ref={ref} object={earth.scene} scale={2.5} position-y={0} rotation-y={0}/>
    );
})

const SphereCanvas=()=>{
    const sphereCanvas=useRef(null)
    return(
        <Canvas shadows frameloop="demand" dpr={[1,2]} gl={{preserveDrawingBuffer:true}} camera={{fov:45,
        near:0.1,far:200,position:[-4,3,-6]}}>
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
                <Sphere ref={sphereCanvas}/>

                <Preload all/>
            </Suspense>
        </Canvas>
    )
}


export default SphereCanvas;