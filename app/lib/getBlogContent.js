import matter from "gray-matter";
import fs from "fs";

export function getBlogContent(category, blog) {
   const file = `./public/blogs/${category}/${blog}.md`;
   const content = fs.readFileSync(file, "utf-8");
   return matter(content);
}