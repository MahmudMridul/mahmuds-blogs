import matter from "gray-matter";
import fs from "fs";

export function getBlogContent(blog) {
   const file = `./public/blogs/${blog}.md`;
   const content = fs.readFileSync(file, "utf-8");
   return matter(content);
}