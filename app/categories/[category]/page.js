import data from "@/public/data/data.json"
import Link from "next/link";

export default function Category({ params }) {
   const blogs = data.blogs;
   return (
      <div>
         <div className="text-2xl text-center font-bold m-6">{params.category}</div>
         <ul className="text-center">
            {
               blogs.map((blog, index) => {
                  return (
                     <li key={index}> <Link href={`/categories/${params.category}/${blog.slug}`}>{blog.title}</Link> </li>
                  )
               })
            }
         </ul>
      </div>

   )
}
