import Link from "next/link";
import fs from "fs";

function getBlogNameList(category) {
   const folder = `./public/blogs/${category}/`;
   const files = fs.readdirSync(folder);
   if (files.length === 0) {
      return [];
   }
   const blogs = files.map((file) => file.replace(".md", ""));
   return blogs;
}

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
