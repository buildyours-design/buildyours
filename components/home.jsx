import React,{useEffect, useRef, useState} from 'react'
import gsap from "gsap"
import SplitType from "split-type"
import ScrollTrigger from 'gsap/ScrollTrigger'
import { animHeading } from '../constants'
import { numericBreakpoints } from '../constants/breakpoints'
const HomePage = ({updateLenis}) => {
   gsap.registerPlugin(ScrollTrigger);
   const homeHeading=useRef()
   const homeFooter=useRef()
   const headerContainer=useRef()
   const homeContainer=useRef()
   useEffect(()=>{
      updateLenis()
      const sm_breakpoint=window.innerWidth<=numericBreakpoints.xs
      const homeHeadingChars=new SplitType(homeHeading.current,{
         type:'lines',
      });

      const homeFooterChars=new SplitType(homeFooter.current,{
         type:'chars'
      })

      const lastHeading=homeHeadingChars.lines[homeHeadingChars.lines.length-1];
      gsap.from(homeHeadingChars.chars,{
         ...animHeading,
         scrollTrigger:{
            trigger:homeContainer.current,
         }
      })
      gsap.to(homeFooterChars.chars,{
         x: -window.innerWidth,
         scrollTrigger:{
            trigger:homeContainer.current,
            start: 'bottom 90%',
            end:`+=${window.innerHeight/2.5}`,
            scrub:true,
            markers:false
         }
      })
     
      /* const animateHeaderContainer=()=>{
         gsap.from(headerContainer.current,{
               opacity:0,
               yPercent:100,
               ease:'power3.out',
               duration:3,
               scrollTrigger:{
                  trigger: homeContainer.current,
                  start: 'bottom 70%',
                  end:'bottom 40%',
                  scrub:true,
               }
         })
      } */

      /* if(sm_breakpoint){
         animateHeaderContainer()
      } */



      
   },[])
  return (
    <main ref={homeContainer} id="container" className="relative min-h-screen bg-black">
      <div className="flex flex-col sxs:gap-2 xs:gap-4 justify-center sxs:scale-100 sm:scale-y-75 w-full h-screen">
         <h3 className="home_heading">A story of resilience</h3>
         <div>
            <h1 ref={homeHeading} className="home_description">create your next web application with us</h1>
         </div>
         <div ref={headerContainer} className="sm:px-2 sxs:px-1">  
            <div className="flex sxs:flex-col lg:flex-row sxs:justify-center lg:justify-between items-center border-white border-t-2 mt-4">
               <div>
                  <h1 className="home-description_title"><b>a better developer experience for you and your business...</b></h1>
               </div>
               <p className="home-description_footer">
                 No more wasted budgets. Get your web app in front of the right people at the right place--right time, and right price. We implement strategies that work and that resonate with your expectations.
               </p>
               
            </div>
            <h1 ref={homeFooter} className="home-footer"></h1>
         </div>
      </div>
    </main>
  )
}

export default HomePage