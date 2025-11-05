"use client";

import React,{useRef, useState} from "react"

import { Button } from "./ui/button"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import {toast} from "@/hooks/use-toast"
import {Input} from "./ui/input"
import {Form, FormControl, FormField,FormItem, FormLabel,FormMessage} from "./ui/form"
import {CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { ADMIN_DESC, EMAIL_PLACEHOLDER } from "../constants";
import emailjs from "@emailjs/browser"
import {useRouter} from "next/navigation"
import FileUpload from "./FileUpload";
import Link from "next/link";
import { emailLinkingSchema } from "../lib/zod/validation";
import { signIn } from "next-auth/react";
const CommonForms=({formElement, defaultValues,emailLink, emailSchema, onSubmit,type})=>{
  const isSignIn= type === "SIGN_IN"
  const [toggle, setToggle]=useState(false)
  const router=useRouter()
  const emailSubmit=useRef()
  let element=null;
  const form=useForm({
      defaultValues: defaultValues,
      resolver: zodResolver(emailSchema)
    });
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    const handleEmailSubmit=async (data)=>{
          /* await axios.head('https://www.google.com/favicon.ico').then(()=>{
              if(response.statusText==='ok'){
                 emailjs.send(
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                  {
                    from_name:data.name,
                    to_name:'emmanuel brian',
                    from_email:data.email,
                    to_email:'emmanuelbrian257@gmail.com',
                    message:data.message
                  }
                ).then(()=>{
                    toast({
                      title:'Success',
                      description:"thankyou for sending us an email.We'll respond to you shortly"
                    })
                }, (error)=>{
                  console.log(error,"error")
                })
          }else{
            console.log('sorry there might be a problem sending.Please try again..')
          }
          }).catch((error)=>{
            console.log(error);
            toast({
              title:'Error sending!',
              description:'No active internet connection',
              variant:'destructive'
            })
          }) */
          emailSubmit.current.setAttribute('disabled','')
           emailjs.send(
                  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                  {
                    from_name:data.name,
                    to_name:'emmanuel brian',
                    from_email:data.email,
                    to_email:'emmanuelbrian257@gmail.com',
                    message:data.message
                  }
                ).then(()=>{
                    toast({
                      title:'Success',
                      description:"thankyou for sending us an email.We'll respond to you shortly"
                    })
                    emailSubmit.current.removeAttribute('disabled');
                    form.reset()
                })
    }

    const authenticate=async(data)=>{
          const result=await onSubmit(data);

          if(result.success){
            toast({
              title:'Success',
              description:'You have successfully signed in.'
            });

            router.push('/admin')
          }
  }

  const sendEmailLink=async({email})=>{
    const signInResult=await signIn('email',{
      email,
      callbackUrl:`${window.location.origin}/admin`,
      redirect:false
    })
  }


    switch (formElement) {
      case 'admin':
        const adminForm=useForm({
          defaultValues: defaultValues,
          resolver: zodResolver(emailSchema)
        });

        const adminEmailLink=useForm({
          defaultValues: emailLink,
          resolver: zodResolver(emailLinkingSchema)
        })

        
        return (
          element=(
              <>
                <CardHeader className='flex flex-row gap-4 items-center text-white'>
                      <div className="">
                        <CardTitle>{isSignIn?"Don't have an account":"Already have an account"}</CardTitle>
                        <CardDescription>{isSignIn?'Enter your email below to login to your account':'Sign up below and create an account'}</CardDescription>
                      </div>
                      <span className="text-nowrap">
                        <Link className="font-bold text-primary hover:text-white hover:underline underline-offset-2 duration-200" href={isSignIn?"/sign-up":"sign-in"}>
                          {isSignIn?"Create an account":"Sign In"}
                        </Link>
                      </span>
                </CardHeader>
                <CardContent>
                    <Form {...adminForm}>
                        <form onSubmit={adminForm.handleSubmit(authenticate)} className="flex flex-col gap-3">
                            {Object.keys(defaultValues).map((field)=>{
                              return(
                                <FormField
                                  key={field}
                                  name={field}
                                  control={adminForm.control}
                                  render={({field})=>{
                                    console.log(field,"field")
                                      return(
                                          <FormItem className="grid gap-2">
                                              <FormLabel className="flex items-center px-2 uppercase font-bosch lg:tracking-wider lg:text-sm">{ADMIN_DESC[field.name]?.label}</FormLabel>
                                              <FormControl>
                                                {field.name==='profile_photo'?(
                                                    <FileUpload
                                                      type="image"
                                                      placeholder="Upload your profile photo"
                                                      variant="dark"
                                                      onFileChange={field.onChange}
                                                      folder="admin_profile_photo"
                                                      accept="image/*"
                                                    />
                                                ):(
                                                  <Input type={field.name==='password'?'password':'email'} placeholder={ADMIN_DESC[field.name]?.placeholder} className="placeholder:text-slate-500 border-gray-400 rounded-xl outline-none" {...field} required/>
                                                )}
                                              </FormControl>
                                              {/* <FormControl/>
                                              <FormMessage/> */}
                                          </FormItem>
                                      )
                                  }}
                              />
                              )
                              
                                })}
                            <Button type="submit" className="hover:bg-slate-300 bg-white text-black outline-none  uppercase rounded-xl w-full mt-4">
                                {isSignIn?'Sign In':'Sign Up'}
                            </Button>
                        </form>
                    </Form>
                    {isSignIn&&(
                      <Form {...adminEmailLink}>
                        <form onSubmit={adminEmailLink.handleSubmit(sendEmailLink)}>
                            {Object.keys(emailLink).map((field)=>{
                              return (
                                <FormField
                                  key={field}
                                  name={field}
                                  control={adminEmailLink.control}
                                  render={({field})=>{
                                    return(
                                      <FormItem className="flex flex-col">
                                          <h2 onClick={()=>setToggle(!toggle)} className="w-fit mt-2 self-center cursor-pointer relative text_underline">or send email sign-in link</h2>
                                          <div className={`${toggle?"":"hidden"}`}>
                                            <Input className="placeholder:text-slate-500 border-gray-400 rounded-xl outline-none" placeholder="testemail@gmail.com" {...field}/>
                                            <div>
                                              <Button type="submit" className="hover:bg-slate-300 bg-white text-black outline-none font-semibold tracking-wider uppercase rounded-xl w-full mt-4">
                                                send email link
                                              </Button>
                                            </div>
                                          </div>
                                      </FormItem>
                                    )
                                  }}
                                />
                              )
                            })}
                        </form>
                      </Form>
                    )}
                </CardContent>
              </>
            
          )
        );

        case 'chatus':
        return (
          element=(
            <div></div>
          )
        );

        case 'email':
        return (
            element=(
              <Form {...form}>
                 <form className="bg-white flex flex-col" onSubmit={form.handleSubmit(handleEmailSubmit)}>
                    {Object.keys(defaultValues).map((field)=>(
                        <FormField
                            key={field}
                            control={form.control}
                            name={field}
                            render={({field})=>{
                              
                              return(
                                <FormItem className="flex items-center px-2 mb-2">
                                   {/* <FormLabel className="sm:w-[100px] leading-4 uppercase tracking-wider">
                                      {EMAIL_DESC[field.name]}
                                   </FormLabel> */}
                                   <FormControl>
                                    {field.name==='message'?(
                                      <textarea style={{resize:'none'}} {...field} className="placeholder:text-white  form-btn w-full" placeholder="share your thoughts with us..."></textarea>
                                    ): (
                                      <Input placeholder={EMAIL_PLACEHOLDER[field.name]} required {...field} className="form-btn"/>
                                    )}
                                   </FormControl>
                                   <FormMessage/>
                                </FormItem>
                      )}}
                        />
                    ))}
                    <Button ref={emailSubmit} type="submit" className="hover:bg-slate-300 bg-black xs:text-[clamp(15px,3vw,20px)] xs:tracking-wider xs:font-semibold lg:text-xl uppercase font-bosch lg:tracking-widest duration-10 rounded-lg">
                       send email
                    </Button>
                 </form>
              </Form>
            )
        );
    
      default:
        break;
    }
}


/* const DialogPage=({openDialog,setOpenDialog,openDialogDetails, defaultValues, emailSchema})=> {
  
  return (
    <Dialog modal={false} open={openDialog} onOpenChange={()=>setOpenDialog(!openDialog)}>
                  <DialogContent className="text-white bg-black m-0 p-0">
                      <DialogTitle className="font-light font-organic text-center tracking-wide uppercase">send us an email</DialogTitle>

                    <CommonForms openDialog={openDialog} setOpenDialog={setOpenDialog} formElement={openDialogDetails} emailSchema={emailSchema} defaultValues={defaultValues}/>
                  </DialogContent>
            </Dialog>
    
   
  )
} */


const ContactForm=({emailSchema, defaultValues, formElement,type, emailLink, onSubmit})=>{
  return(
    <aside className="text-white">
       <CommonForms emailLink={emailLink} emailSchema={emailSchema} defaultValues={defaultValues} formElement={formElement} type={type} onSubmit={onSubmit}/>
    </aside>
  )
}

export default ContactForm;
