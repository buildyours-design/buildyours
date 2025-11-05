import React,{ useEffect, useRef, createContext} from 'react'
import gsap from "gsap"
import SplitType from "split-type"
import AnimateCube from "./canvas/cube"
import ScrollTrigger from "gsap/ScrollTrigger"
import { animPresentation, presentationDetails } from '../constants'
import FormSection from "./FormSection"
import {breakpoints, numericBreakpoints} from "../constants/breakpoints"
const PresentationPage = () => {
  gsap.registerPlugin(ScrollTrigger)
  
  const presentationHeading=useRef()
  const presentationContainer=useRef()
  const refDescription=useRef()
  const cubeContainer=useRef()

  console.log( numericBreakpoints,"breakpoints")
  useEffect(()=>{
    if(cubeContainer.current){
      console.log(cubeContainer.current.children[0],'children')
    }
    const presentationHeadingChars=new SplitType(presentationHeading.current,{
      types:'chars',
    });
     gsap.from(presentationHeadingChars.chars,{
         ...animPresentation,
         scrollTrigger:{
            trigger:presentationContainer.current,
            start:'top center',
            end:'top top',
            scrub:true
         }
      });

      gsap.from(presentationContainer.current,{
        scrollTrigger:{
          trigger:presentationContainer.current,
          start:'top top',
          end:'+=3000',
          pin:true,
          anticipatePin:1,
          pinSpacing:true,
          scrub:true,
          markers:false
        }
      })

      gsap.from(refDescription.current,{
        yPercent:window.innerWidth<=numericBreakpoints.lg?`${window.innerHeight}`:'100',
        duration:window.innerWidth<=numericBreakpoints.lg?'25':'10',
        scrollTrigger:{
          trigger:presentationContainer.current,
          start:window.innerWidth<=numericBreakpoints.lg?'bottom 8%':'top top',
          end:window.innerWidth<=numericBreakpoints.lg?'+=500':'+=300',
          scrub:true,
        }
      })
     
  })
  return (
      <>
            <div ref={presentationContainer} className="flex sxs:flex-col   lg:flex-row gap-3 w-screen h-screen bg-black">
              <div className="sxs:flex min-h-screen gap-4 justify-center flex-col lg:flex-1">
                <h2 ref={presentationHeading} className="font-grotesk bg-white rounded-xl sm:py-2 lg:px-3 lg:text-[clamp(3rem,7vw,4.5rem)] sxs:text-[clamp(0.5rem,3vw,1.5rem)] xs:text-[clamp(2.5rem,6vw,4rem)] sm:text-[clamp(4rem,7vw,6rem)] xs:leading-[clamp(40px,8vw,45px)] sm:leading-[clamp(65px,7vw,80px)] lg:leading-[clamp(40px,10vw,65px)]">get started today and get a 10% discount</h2>
                <div ref={cubeContainer} className="w-full sxs:px-2 sxs:h-[250px] xs:h-[clamp(100px,40vh,350px)] sm:h-[clamp(300px,50vh,500px)]">
                  <AnimateCube ref={cubeContainer}/>
                </div>
                <p className='text-white xs:text-[clamp(1rem,3.8vw,2rem)] sm:text-[clamp(1rem,2.7vw,1.5rem)] lg:text-[clamp(1.2rem,0.7rem,1.5rem)] lg:leading-[clamp(1rem,3rem,2rem)] font-bosch sm:lg:p-4'>
                      I provide fullstack development services, building responsive frontends with modern frameworks and robust backends powered by secure APIs, databases, and cloud integrations to deliver seamless, scalable web applications tailwored to client needs.
                  </p>
              </div>
        <div ref={refDescription} className="h-full lg:flex-1 bg-black sxs:px-1">
          <div className="flex flex-col justify-center h-full">
             <p className='text-white sm:text-[clamp(1rem,2.7vw,1.5rem)] lg:text-[clamp(1.2rem,0.7vw,1.5rem)] self-center xs:text-xl font-bosch lg:p-4'>
                I am a software engineer dedicated to building scalable, efficient, and user-focused applications. My expertise spans both frontend and backend development. I incorporate professional tools including Git for version control, Docker for containerization, Postman for API testing, and Cloudinary for media management.
            </p>
            <div  className="relative">
                {presentationDetails.map((details,index)=>(
                <h1 key={details.name} className={`text-black rounded-xl bg-white sxs:text-xl lg:text-7xl sm:text-[clamp(1.5rem,3vw,2rem)] lg:text-[clamp(3rem,4.7vw,5rem)] lg:leading-[clamp(40px,10vw,60px)] lg:p-3 font-grotesk tracking-wide mb-2`}>{details?.title}</h1>
              ))}
            </div>
            
          </div>
        </div>
        </div>
      </>
  )
}

export default PresentationPage


/* 
  <main ref={homeContainer} id="container" className="relative min-h-screen bg-black">
      <div className="flex flex-col sxs:gap-2 xs:gap-4 justify-center sxs:scale-100 sm:scale-y-75 w-full h-screen">
         <h3 className="home_heading">A story of resilience</h3>
         <div>
            <h1 ref={homeHeading} className="home_description">
               create your next web application with us
            </h1>
         </div>
         <div ref={headerContainer} className="sm:px-2 sxs:px-1">  
            <div className="flex sxs:flex-col lg:flex-row sxs:justify-center lg:justify-between items-center border-t-2 border-white mt-4">
               <div>
                  <h1 className="home-description_title"><b>a better developer experience for you and your business...</b></h1>
               </div>
               <p className="home-description_footer">
                  No more wasted budgets. Get your web app in front of the right people at the right place--right time, and right price. We implement strategies that work and that resonate with your expectations
               </p>
               
            </div>
            <h1 ref={homeFooter} className="home-footer">powering your next app</h1>
         </div>
      </div>
    </main>
*/