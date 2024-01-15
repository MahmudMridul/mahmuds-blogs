import fs from "fs";
import Link from "next/link";

import data from "@/public/data/data.json";
import { getBlogNameList } from "./lib/getBlogNameList";
import { getBlogInfoFromSlug } from "@/app/lib/getBlogInfoFromSlug";


export default function Home() {
   const blogs = getBlogNameList();

   return (
      <main>
         <ul className="">
            {
               blogs.map((blog, index) => {
                  const { date, blogName } = getBlogInfoFromSlug(blog);
                  return (
                     <li
                        className="w-auto h-auto rounded-3xl p-2 hover:text-lg hover:underline"
                        key={index}
                     >
                        <Link href={`/${blog}`}>
                           {blogName}
                        </Link>
                     </li>
                  )
               })
            }
         </ul>
      </main>
   )
}
