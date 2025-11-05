import React,{ReactNode} from 'react'
import type { Metadata } from 'next';
import {redirect} from "next/navigation"
import { auth } from '@/auth';
import { NextAuthProvider } from '../admin/SessionProvider/providers';

export const metadata: Metadata = {
  title: "BuildYours",
  description: "welcome to build yours...",
};

const layout=async({children}:{children:ReactNode}) => {
  const session=await auth()
  if(session?.user) redirect('/admin')
  return (
    <NextAuthProvider>
       <main className="text-white w-full h-screen fixed">
      <div className="w-full sm:flex h-full">
        <div className="bg-image-project bg-cover bg-no-repeat flex-1 h-full"/>
        <div className='flex bg-white flex-col items-center flex-1 justify-center'>
           <div className='lg:w-[450px]'>
              {/* <h1 className="lg:text-xl underline underline-offset-4 uppercase mb-4">Hello, and welcome to the admin sign in page</h1> */}
              {children}
           </div>
        </div>
      </div>
    </main>
    </NextAuthProvider>
  )
}

export default layout