"use client"

import {SessionProvider} from "next-auth/react"
import React from "react"

type Props={
    children?: React.ReactNode
}

export const NextAuthProvider=({children}:Props)=>{
    /* const {status}=useSession({
        required:true,
        onUnauthenticated(){
        //This callback is executed if the user is not authenticated
        redirect('/sign-in')
        }
  }) */

    return (
    <SessionProvider>{children}</SessionProvider>
    )
}
