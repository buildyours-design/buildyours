import React,{useRef, useEffect} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SplitType from "split-type"
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import {experienceInfo} from "../constants/index"


const ExperienceCard = () => {
    const formSectionFooter=useRef()
    const experienceContainer=useRef()
    const imageContainer=useRef()
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        const formSectionFooterRef=new SplitType(formSectionFooter.current,{
      type:'chars'
    })

    const imageContainerWidth=imageContainer.current.getBoundingClientRect().width
    
    let sections=gsap.utils.toArray(imageContainer.current.children)
    gsap.to(sections,{
        xPercent: -100*(sections.length-1),
        ease:'none',
        scrollTrigger:{
            trigger: experienceContainer.current,
            start:'top top',
            pin:true,
            pinSpacing:true,
            scrub:1,
            snap:1/(sections.length-1),
            end:()=>"+="+imageContainerWidth
        }
    })

/*     gsap.from(experienceContainer.current,{
        scrollTrigger:{
            trigger:experienceContainer.current,
            start:'top top',
            end:'+=300',
            pin: true,
            anticipatePin: true,
            pinSpacing: false
        }
    }) */

     gsap.from(formSectionFooterRef.chars,{
      opacity:0,
      y:50,
      stagger:0.35,
      duration:1,
      scrollTrigger:{
        trigger:experienceContainer.current,
        start:'top 70%',
        end:'+=500',
        scrub:true
      }
    })
    })
  return (
    <section className="bg-red-500 sxs:h-screen" ref={experienceContainer}>
       <div className="flex flex-col h-full sxs:justify-center sxs:gap-5 sm:gap-4 lg:mt-4 sxs:px-2 items-center">
            <h2 ref={formSectionFooter} className="lg:text-5xl sxs:text-2xl xs:text-[clamp(2rem,5vw,5rem)  sm:leading-[clamp(45px,4vw,60px)] sm:text-[clamp(3rem,5vw,6rem)] text-center lg:w-[800px] font-grotesk">we inspire, empower and build creative assenols for your brand</h2>
            <div className='w-full sxs:h-[clamp(100px,50vh,350px)] lg:h-[500px]'>
                <ul ref={imageContainer} className="list-none w-[400vw] flex h-full relative">
                    <li className="bg-image-project bg-center bg-cover bg-no-repeat w-full h-full"></li>
                    <li className="bg-project-image bg-center bg-cover bg-no-repeat w-full h-full"></li>
                    <li className="bg-new-image bg-center bg-cover bg-no-repeat w-full h-full"></li>
                    <li className="bg-last-background bg-center bg-cover bg-no-repeat w-full h-full"></li>
                </ul>
            </div>
            <div className='w-full lg:p-3'>
              <div>
                <p className="font-bosch font-medium text-black lg:text-3xl sxs:text-lg xs:text-[clamp(1rem,3vw,2rem)] sm:text-[clamp(1rem,2.7vw,1.5rem)] sxs:tracking-wide text-justify sxs:leading-6 sm:leading-8">Just imagine the future...where your creativity reaches wider audiences, your business grows beyond borders, and your brand connects effortlessly with the people who matter most A future where photographers, creators, entrepreneurs, and businesses thrive together in one digital space -- building impact, inspiring stories, and shaping tomorrow.</p>
              </div>
            </div>
        <div>        
    </div>
       </div>
    </section>
  )
}

export default ExperienceCard