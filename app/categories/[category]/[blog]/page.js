import matter from "gray-matter";
import fs from "fs";
import Markdown from "markdown-to-jsx";

function getBlogContent(category, blog) {
   const file = `./public/blogs/${category}/${blog}.md`;
   const content = fs.readFileSync(file, "utf-8");
   return matter(content);
}

export default function Blog({ params }) {
   const { category, blog } = params;
   const obj = getBlogContent(category, blog);
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
