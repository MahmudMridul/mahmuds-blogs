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
         <div className="grid md:grid-cols-4">
            <h1 className="col-span-3">{data.title}</h1>
            <p> <strong>Published:</strong> {data.date}</p>
         </div>
         <Markdown>{content}</Markdown>
      </article>
   )
}
