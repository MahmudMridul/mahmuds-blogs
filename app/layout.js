import { Nunito } from "next/font/google"
import './globals.css'
import NavMenu from "@/app/components/NavMenu";
import Link from "next/link";

export const metadata = {
   title: "Mahmud's Blogs",
   description: "Blogs by Abdullah Al Mahmud",
   authors: [{ name: "Abdullah Al Mahmud" }]
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
               <Link href={"/"}>
                  <h1 className="mt-5">{"Mahmud's Blogs"}</h1>
               </Link>
               <hr></hr>

               {children}
            </main>
         </body>
      </html>
   )
}
