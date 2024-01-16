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

export function generateMetadata({ params, searchParams }, parent) {
   const { blog } = params;
   const obj = getBlogContent(blog);
   const { content, data } = obj;
   console.log(data);

   return {
      title: data.title,
      description: data.description,
      keywords: data.keywords,
      authors: data.authors,
      category: data.category,
   };
}

export default function Blog({ params }) {
   const { blog } = params;
   const obj = getBlogContent(blog);
   const { content, data } = obj;
   return (
      <article>
         <h1>{data.title}</h1>
         <p>
            <strong> Published: {data.date}</strong>
         </p>


         <Markdown>{content}</Markdown>
      </article>
   )
}
