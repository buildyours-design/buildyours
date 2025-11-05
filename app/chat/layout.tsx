import React,{ReactNode} from "react"
import type {Metadata} from "next"


export const metadata:Metadata={
    title:'Chat',
    description:'Chat with us'
}

const layout=({children}:{children:ReactNode})=>{
    return(
        <div>
            {children}
        </div>
    )
}

export default layout;