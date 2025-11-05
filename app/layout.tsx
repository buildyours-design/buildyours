import localFont from "next/font/local"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bosch=localFont({
    src:[
      {path:'/fonts/bosch.otf',weight:'300',style:'normal'},
    ],
    variable: "--bosch"
})

const grotesk=localFont({
  src:[
    {path:'/fonts/grotesk.otf',weight:'50',style:'normal'}
  ],
  variable:'--grotesk'
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <html lang="en">
                <body className={`${grotesk.variable} ${bosch.variable}`}>
                    {children}
                    <Toaster/>
              </body>
          </html>
  );
}
