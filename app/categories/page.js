import data from "@/public/data/data.json"
import Link from "next/link";

export default function Categories() {
   const categories = data.categories;
   return (
      <div>
         <div className="text-2xl text-center font-bold m-6">Categories</div>
         <ul className="text-center">
            {
               categories.map((category, index) => {
                  return (
                     <li key={index}> <Link href={`/categories/${category.category}`}>{category.name}</Link> </li>
                  )
               })
            }
         </ul>
      </div>
   )
}
