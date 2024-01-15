import Markdown from "markdown-to-jsx";
import { getBlogContent } from "@/app/lib/getBlogContent";
import { getBlogNameList } from "../lib/getBlogNameList";

export function generateStaticParams() {
   const blogs = getBlogNameList();
   console.log(blogs);
   return blogs.map((blog) => ({
      blog,
   }))
}

export default function Blog({ params }) {
   const { blog } = params;
   const obj = getBlogContent(blog);
   const { content, data } = obj;
   return (
      <article>
         <h1 className="col-span-3">{data.title}</h1>
         <p>
            <strong> Published: {data.date}</strong>
         </p>


         <Markdown>{content}</Markdown>
      </article>
   )
}
