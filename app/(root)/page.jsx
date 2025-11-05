"use client";

import React,{ useRef, useState} from "react";
import {Suspense} from "react"
import DialogPage from "../../components/dialog";
import FormSection from "../../components/FormSection";
import HomePage from "../../components/home";
import { emailSchema } from "../../lib/zod/validation";
import Lenis from "lenis"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import PresentationPage from "../../components/presentations";
import ExperienceCard from "../../components/experience";
import Billboards from "../../components/billboards";
import ContactPage from "../../components/Contact";



export default function Home() {
  const [openDialog, setOpenDialog]=useState(false);
  const [openDialogDetails, setOpenDialogDetails]=useState("")
  const ref=useRef(null)

  function updateLenis(){
    gsap.registerPlugin(ScrollTrigger);
    const lenis=new Lenis();
    lenis.on('scroll',ScrollTrigger.update);
    gsap.ticker.add((time)=>lenis.raf(time*1000))
    gsap.ticker.lagSmoothing(0)
  }
  return (
          <section className="min-h-screen">
              <div className="canvas_container">
                <div id="section_wrapper" className="relative h-full">
                  <HomePage updateLenis={updateLenis}/>
                  <div>
                     <PresentationPage/>
                      <FormSection/>
                      <ExperienceCard/>
                      <div className="">
                        <Billboards/>
                        
                      </div>
                      <ContactPage/>
                  </div>
                
                </div>
              </div>
              {/* <DialogPage 
              defaultValues={{
                  name:'',
                  email:'',
                  message:''
              }}
              emailSchema={emailSchema}
              
              openDialog={openDialog} setOpenDialog={setOpenDialog} openDialogDetails={openDialogDetails}/> */}
      </section>
  );
}
