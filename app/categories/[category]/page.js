import Link from "next/link";
import { getBlogNameList } from "@/app/lib/getBlogNameList";

export default function Category({ params }) {
   const blogs = getBlogNameList(params.category);

   if (blogs.length === 0) {
      return (
         <div className="text-2xl font-bold mt-6">No posts found.</div>
      )
   }

   return (
      <div>
         <div className="text-2xl font-bold mt-6">{params.category}</div>
         <ul className="">
            {
               blogs.map((blog, index) => {
                  return (
                     <li key={index}> <Link href={`/categories/${params.category}/${blog}`}>{blog}</Link> </li>
                  )
               })
            }
         </ul>
      </div>

   )
}
