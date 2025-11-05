'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import ContactForm from '../../../components/dialog'
import { Button } from '../../../components/ui/button'
import { adminSignInSchema } from '../../../lib/zod/validation'
import { CardFooter, Card} from "@/components/ui/card"
import { signInWithCredentials } from '../../../lib/actions/auth'
import {useRouter} from "next/navigation"
const page = () => {
  const router=useRouter()
  const {pathname}=router;
  console.log(pathname,"pathname")
  return (
    <Card className="w-full max-w-sm font-bosch border-[1px]">
      <ContactForm 
              type="SIGN_IN"
              emailSchema={adminSignInSchema} 
              defaultValues={{
                  email:'',
                  password:''
              }} 
              emailLink={{
                email:'',
              }}
              formElement={'admin'}
              onSubmit={signInWithCredentials}
          />
        <CardFooter className="flex flex-col items-center">
          <Button onClick={()=>signIn('google')} className="bg-white text-black w-full hover:text-white uppercase font-grotesk">Continue with Google</Button>
        </CardFooter>
        {/* <ContactForm 
        emailSchema={emailSchema} 
        defaultValues={{
            username:'',
            email:'',
            password:''}} 
        formElement={'admin'}/>
        <div>
          <Button onClick={()=>signIn('google')}>Continue with Google</Button>
        </div> */}
    </Card>
  )
}

export default page