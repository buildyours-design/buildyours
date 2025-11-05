import React,{useEffect, useRef} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ContactForm from "./dialog"
import {EMAIL_DESC, messageIcons} from '../constants'
import { emailSchema } from '../lib/zod/validation'
import SplitType from "split-type"
import Link from "next/link"
const ContactPage = () => {
    const contactHeader=useRef()
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        const contactHeaderRefs=new SplitType(contactHeader?.current,{
            type:'lines'
        })
    },[])
  return (
    <section className="bg-red-500 h-screen lg:px-4 sxs:py-2 lg:py-10">
        <div className="grid lg:grid-cols-2 sxs:grid-rows-2 xs:grid-rows-1 sxs:gap-2 lg:gap-3 h-full">
             <footer className="flex flex-col h-full justify-center sm:gap-6">
                <h1 ref={contactHeader} className="lg:text-8xl sxs:text-2xl font-grotesk xs:text-[clamp(2rem,4vw,3rem)] sm:text-[clamp(2.5rem,7vw,3rem)] sm:leading-[clamp(30px,10vw,45px)] lg:tracking-wider inline text-center bg-black text-white">Let's build something great together</h1>
                <div className="">
                    <ContactForm emailSchema={emailSchema} defaultValues={EMAIL_DESC} formElement="email"/>
                </div>
            </footer>
            <div className="sxs:row-start-1 lg:row-start-auto sm:flex flex-col h-full  sm:gap-3">
                <div className="bg-project-image bg-cover bg-no-repeat bg-center sxs:h-full lg:h-1/2"/>
                <div>
                    <h2 className="sm:text-3xl xs:text-[clamp(15px,3vw,20px)] lg:tracking-wider font-grotesk text-center">or chat with us...</h2>
                    <nav className="lg:mt-4">
                        <ul className="flex justify-center items-center sm:gap-10">
                            {messageIcons.map((icon)=>(
                                <Link target={"_blank"} key={icon.name} href={icon.link}  className="flex flex-col items-center gap-1 cursor-pointer">
                                    <icon.icon key={icon.name} className=""/>
                                    <h1 className="text-white font-bosch lg:tracking-wider lg:text-xl">{icon.title}</h1>
                                </Link>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactPage