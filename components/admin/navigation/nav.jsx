'use client'
import React,{useState} from "react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {CircleUserRound, ChevronDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import {signOut} from "next-auth/react"
import {useRouter} from "next/navigation"

const NavigationMenu=({session})=>{
    const [open, setOpen]=useState(false)
    const router=useRouter()
    const {pathname}=router;
    console.log(pathname,"pathname")
    async function logout(){
        await signOut();
    }
    return(
       <nav>
            <ul className="flex items-center justify-between gap-1">
                <h2 className="text-black uppercase font-bosch font-semibold italic lg:tracking-wider">Build yours</h2>
                <div className="relative">
                    <div className='flex gap-1 items-center'>
                        <div className="w-[30px] h-[30px]">
                            <CircleUserRound/>
                        </div>
                        <h2 className="font-bosch font-semibold tracking-tight">{session?.user?.name}</h2>
                        <ChevronDown onClick={()=>setOpen(!open)} className="cursor-pointer hover:bg-red-500"/>
                    </div>
                    <div className={`absolute left-0 right-0 top-[100%] ${open?'block':'hidden'}`}>
                        <Card className="rounded-none px-2 py-1 border-0">
                        <Button onClick={logout}>logout</Button>
                    </Card>
                    </div>
                </div>
            </ul>
                    </nav>
    )
}

export default NavigationMenu