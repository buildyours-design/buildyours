'use client'
import { signIn } from 'next-auth/react'
import React from 'react'
import ContactForm from '../../../components/dialog'
import { Button } from '../../../components/ui/button'
import {CardFooter,Card} from "@/components/ui/card"
import { signUp } from '../../../lib/actions/auth'
import {useRouter} from "next/navigation"
import { adminSignUpSchema } from '../../../lib/zod/validation'
const page = () => {
  const router=useRouter()
  const {pathname}=router;
  console.log(pathname,"pathname")
  return (
       <Card className="w-full max-w-sm font-bosch border-[1px]">
          <ContactForm 
              type="SIGN_UP"
              emailSchema={adminSignUpSchema} 
              defaultValues={{
                  email:'',
                  password:'',
                  profile_photo:""
                }} 
              formElement={'admin'}
              onSubmit={signUp}
          />
            <CardFooter className="">
              <Button onClick={()=>signIn('google')} className="bg-white text-black w-full hover:text-white uppercase font-grotesk">Continue with Google</Button>
           </CardFooter>
       </Card>
  )
}

export default page