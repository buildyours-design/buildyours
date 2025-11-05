import React,{ReactNode} from 'react'
import type { Metadata } from 'next';
import { Menu } from 'lucide-react'

export const metadata: Metadata = {
  title: "BuildYours",
  description: "welcome to build yours...",
};

const layout = ({children}:{children:ReactNode}) => {
  return (
    <main className="relative  select-none">
        <div className="fixed left-0 sm:right-10 sxs:right-4 bg-cover z-20 bg-no-repeat top-0">
            <nav className="sm:mt-10 sxs:mt-4">
              <ul className="text-white uppercase flex flex-col items-end lg:text-base font-grotesk">
                  <li><Menu className="cursor-pointer bg-black p-1"/></li>
              </ul>
            </nav>
        </div>
         {children}
    </main>
  )
}

export default layout