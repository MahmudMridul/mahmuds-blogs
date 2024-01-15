import fs from "fs";
import Link from "next/link";

import data from "@/public/data/data.json";


export default function Home() {
   const categories = data.categories;

   return (
      <main>
         <h3 className="mt-6">Categories</h3>
         <ul className="">
            {
               categories.map((category, index) => {
                  return (
                     <li
                        className="w-40 h-auto rounded-3xl p-2 hover:text-lg hover:underline"
                        key={index}
                     >
                        <Link href={`/categories/${category.category}`}>
                           {category.name}
                        </Link>
                     </li>
                  )
               })
            }
         </ul>
      </main>
   )
}
