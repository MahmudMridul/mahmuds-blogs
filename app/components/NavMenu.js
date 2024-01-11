import Link from "next/link";

export default function NavMenu() {
   return (
      <nav className="bg-slate-800 text-white text-xl flex justify-center w-80 h-11 pt-2 rounded-3xl">
         <ul className="flex gap-5">
            <li className="hover:underline"> <Link href="/">Home</Link> </li>
            <li className="hover:underline"> <Link href="/categories">Categories</Link> </li>
         </ul>
      </nav>
   )
}
