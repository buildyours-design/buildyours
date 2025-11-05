import React,{ReactNode} from "react";

import type {Metadata} from "next";
import NavigationMenu from "../../../components/admin/navigation/nav"
import { NextAuthProvider } from "../SessionProvider/providers";
import { auth } from "@/auth";
import {redirect} from "next/navigation"

export const metadata:Metadata={
    title:'AdminDashboard',
    description:'Welcome to the admin panel'
}

const layout=async({children}:{children:ReactNode})=>{
    const session=await auth()
    if(!session) {
        redirect('/sign-in')
    }
    return(
        <NextAuthProvider>
            <main className="min-h-screen flex flex-col">
                <header className="lg:px-10 lg:py-1">
                    <NavigationMenu session={session}/>
                </header>
                {children}
           </main>
        </NextAuthProvider>
    )
}


export default layout;