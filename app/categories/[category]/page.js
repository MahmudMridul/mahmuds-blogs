import Link from "next/link";
import { getBlogNameList } from "@/app/lib/getBlogNameList";

import data from "@/public/data/data.json";
import { getNameFromSlug } from "@/app/lib/getNameFromSlug";

export default function Category({ params }) {
   const blogs = getBlogNameList(params.category);
   const categoryName = data.categories.find(c => c.category === params.category).name

   if (blogs.length === 0) {
      return (
         <div className="text-2xl font-bold mt-6">No posts found.</div>
      )
   }

   return (
      <div>
         <h3 className="mt-6">{categoryName}</h3>
         <ul className="">
            {
               blogs.map((blog, index) => {
                  const [date, name] = blog.split("_");
                  const blogName = getNameFromSlug(name);
                  return (
                     <li
                        className="w-auto h-auto rounded-3xl p-2 hover:text-lg hover:underline"
                        key={index}> <Link href={`/categories/${params.category}/${blog}`}>{blogName} ({date})</Link> </li>
                  )
               })
            }
         </ul>
      </div>

   )
}
