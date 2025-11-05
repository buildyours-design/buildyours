import React,{useEffect,useContext, useRef} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"
import { animFormSection } from '@/constants/index'
import UserInfo from "./UserInfo"


const FormSection = () => {
  const formContainer=useRef()
  gsap.registerPlugin(ScrollTrigger);
  const formHeading=useRef()
  useEffect(()=>{
    const formHeadingRef=new SplitType(formHeading.current,{
      type:'lines',
    })
    
    const firstChild=formHeadingRef.lines[formHeadingRef.lines.length-1].children[0]
    const lastChild=formHeadingRef.lines[formHeadingRef.lines.length-1]
    gsap.from(lastChild,{
        xPercent:`${window.innerWidth/3}`,
        ease:'power3.out',
        scrollTrigger:{
          trigger:formContainer.current,
          ...animFormSection
        }
    })
    
    
  },[])
  return (
    <div ref={formContainer} className=" text-black font-grotesk bg-white lg:px-3 lg:py-2">
       <div className="flex flex-col gap-6 sm:items-center">
          <h1 className="self-start sxs:text-3xl xs:text-[clamp(15px,6vw,25px)] sm:text-[clamp(30px,6vw,60px)] sm:leading-[clamp(40px,7vw,55px)] lg:text-[clamp(6.5rem,4vw,10.5rem)] lg:leading-[clamp(90px,10vw,100px)]" ref={formHeading}>with amazing user interfaces</h1>
         <UserInfo/>
          <p className="text-black font-bosch text-justify sxs:text-xl lg:text-2xl tracking-wider">
            Our platform is built for creators and innovators-whether you're a photographer capturing moments, a content creator sharing stories, a small or medium-sized enterprice building your reach, or an online business scaling your impact. We provide the tools and opportunities to help you connect, grow, and thrive in the digital space.
          </p>
       </div>
    </div>
  )
}

export default FormSection