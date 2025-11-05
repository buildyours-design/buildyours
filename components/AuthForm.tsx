import React,{useRef,useEffect, forwardRef} from "react"
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";
import AnimatedCube from "./canvas/cube";
import { presentationMaterial } from "../constants";

function animateCube(meshInstance,canvasInstance){
  const maxRotation =Math.PI;
      gsap.to(meshInstance.rotation, {
        y: -maxRotation,
        ease: 'linear',
        scrollTrigger: {
          trigger: canvasInstance,
          start:'+=6500',
          end: '+=2000',
          markers: false,
          scrub: true,
        }
      });
}
const PresentationPage=forwardRef((props,ref)=>{
  const animateFooter=useRef(null);
  const headerRef=useRef(null);
  const footerHead=useRef(null);
  const footerDescription=useRef(null)
  const animateDescription=useRef(null)
  const container=useRef(null);
  const childContainer=useRef(null);
  gsap.registerPlugin(ScrollTrigger)
  /* gsap.defaults({ease: 'none',duration:2}) */
  useEffect(()=>{
    const textSplit=new SplitType(animateDescription.current,{
      type: 'chars'
  });

  const headerRefChars=new SplitType(headerRef.current,{
    type:'chars',
  });

  const animateFooterRef=new SplitType(animateFooter.current,{
    type:'chars'
  })

  const footerHeadRef=new SplitType(footerHead.current,{
    type:'chars'
  })

  const animateItems=[textSplit.chars,animateFooterRef.chars];

    const timeline=gsap.timeline()
    timeline.from(animateItems,{
        opacity:0,
        y:50,
        ease:'power3.out',
        stagger:0.25, 
    })

    ScrollTrigger.create({
        animation:timeline,
        onUpdate:(self=>console.log(self.progress.toFixed(3),'fixed')),
        trigger:ref.current,
        start: '+=2500',
        end:'+=3000',
        markers:false,
        scrub:0.1,
    })

    gsap.from(headerRefChars.chars,{
       scrollTrigger:{
         start:'+=4000',
         end:'+=400',
         duration:2,
         scrub:1
       },
        opacity:0,
        y:50,
        ease:'power.out',
        stagger:0.25,
     })


    const timeline2=gsap.timeline();

    /* ScrollTrigger.create({
      animation:timeline2,
      start:'+=3300',
      end:'+=500',
      scrub:true
    }) */

    /* gsap.to(animateFooterRef.chars,{
        x:`-${window.innerWidth}px`,
        ease:'Power2.out',
        scrollTrigger:{
          trigger:ref.current,
          scrub:true,
          start:'+=8600',
          end:'+=800',
          markers:false,
        }
    }) */


    gsap.from(footerHeadRef.chars,{
      opacity:0,
      y:10,
      stagger:0.25,
      scrollTrigger:{
        trigger: ref.current,
        start:'+=3000',
        end:'+=1800',
        scrub:true
      }
    })
  })
  return(
    <div ref={ref} className="w-screen absolute top-[100%] left-0 z-[666] h-[100vh] text-white ">
      <div ref={container} className="sxs:grid sm:grid sxs:py-10 sxs:px-2 sm:py-12 lg:py-16 sm:grid-rows-[repeat(3,fit-content)] items-center justify-center h-full">
        <h1 ref={headerRef} className="font-cheedemo uppercase text-center sxs:leading-[calc(60px-2vh)] sxs:text-[calc(100vw/10)] sm:text-[7.5rem] lg:text-9xl xl:tracking-[25px] sm:tracking-widest text-white">prior expertise
        </h1>
        <div className="relative sm:px-2 w-full">
              <div className="sxs:flex  flex-col sm:grid xl:grid-cols-[1fr,250px,1fr] lg:grid-cols-[1fr,200px,1fr] sm:grid-cols-[1fr,180px,1fr] lg:gap-4 sm:gap-2 items-center justify-center">
                <div className="xl:w-[42em] lg:w-[35em]">
                  <h1 ref={animateDescription} className="dock_right_description sxs:hidden sm:inline-block text-white sm:text-[7rem] lg:text-[7.5rem] sm:leading-[110px] xl:text-9xl sxs:text-5xl uppercase xl:tracking-widest lg:tracking-wide">is a priority</h1>
                </div>
                <div className="w-full sxs:w-full sxs:h-[35vh] xl:h-[250px] lg:h-[200px] sm:h-[180px]">
                  <AnimatedCube animateCube={animateCube} orbitControls={presentationMaterial.orbitControls} texture={presentationMaterial.company} args={[4,4,4]}/>
                </div>
                <div className="">
                  <h1 ref={footerDescription} className=" text-white sxs:backdrop-blur-xl sm:backdrop-blur-none lg:text-lg text-balance">Transform your figma design into a real world application using modern tools that captivate user experience.With the use of AI and modern tools we turn your design into aesthetic designs as possible...</h1>
                  
                </div>
                
            </div>
        </div>
        <div className="flex flex-col items-center justify-center">
           <div className="sm:flex sxs:hidden items-center sm:gap-1 justify-between w-full sm:px-4">
              <h1 ref={footerHead} className="sm:text-base lg:text-lg text-white tracking-widest font-medium lg:w-[600px] sm:w-[550px]">i love turning complex ideas into clean, user-friendly designs that people actually enjoy using.Don't miss out on our services...</h1>
              <p ref={animateFooter} className="font-cheedemo xl:tracking-widest lg:text-9xl lg:tracking-wider text-white uppercase sm:text-[7rem] text-nowrap">intuitive</p>
           </div>
          <p className="dock_right_title text-black border-t-[1px] border-black text-center">To get more information and updates regarding our services and client support</p>
        </div>
      </div>
    </div>
  )
})


export default PresentationPage;
