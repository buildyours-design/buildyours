'use client'

import React,{useState} from 'react'
import {useSession} from "next-auth/react"
import {redirect} from "next/navigation"
import {ClipLoader} from 'react-spinners'

const AdminDashboard = () => {
  /* const {status}=useSession({
    required:true,
    onUnauthenticated(){
      //This callback is executed if the user is not authenticated
      redirect('/sign-in')
    }
  })


  if(status==='loading'){
    return(
      <section className="w-screen h-screen">
        <div className="bg-black h-full  justify-center items-center">
            <ClipLoader
            color="#fff"
            size={150}
            aria-label="Loading Spinner"
            data-testid='loader'
      />
        </div>
      </section>
    ) 
    
} */

  
  return (
    <main className="bg-black flex-1">
      <div className="flex">
        <aside className="bg-black flex-1">
           <div></div>
        </aside>
        <section className="flex-1">
          admin dashboard
        </section>
      </div>
    </main>
  )
}

export default AdminDashboard