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
   const content = getBlogContent(category, blog);
   console.log(content);
   return (
      <div>
         <div>{params.blog}</div>
         <Markdown>{content.content}</Markdown>
      </div>
   )
}
