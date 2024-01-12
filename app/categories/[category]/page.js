import Link from "next/link";
import fs from "fs";

function getBlogMetaData(category) {
   const folder = `./public/blogs/${category}/`;
   const files = fs.readdirSync(folder);
   const blogs = files.map((file) => file.replace(".md", ""));
   return blogs;
}

export default function Category({ params }) {
   const blogs = getBlogMetaData(params.category);
   console.log(blogs);
   return (
      <div>
         <div className="text-2xl text-center font-bold m-6">{params.category}</div>
         <ul className="text-center">
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
