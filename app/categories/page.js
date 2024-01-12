import data from "@/public/data/data.json"
import Link from "next/link";

export default function Categories() {
   const categories = data.categories;
   return (
      <div>
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
      </div>
   )
}
