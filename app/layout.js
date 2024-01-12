import { Nunito } from "next/font/google"
import './globals.css'
import NavMenu from "@/app/components/NavMenu";

export const metadata = {
   title: "Mahmud's Blogs",
   description: "Blogs by Abdullah Al Mahmud",
}

const nunito = Nunito({
   subsets: ["latin"],
   weight: "500",
});

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${nunito.className} `}>
            <main className="container p-3 bg-white">
               <div className="flex justify-center">
                  <NavMenu />
               </div>

               <h1 className="mt-5">{"Mahmud's Blogs"}</h1>
               <hr></hr>

               {children}
            </main>
         </body>
      </html>
   )
}
