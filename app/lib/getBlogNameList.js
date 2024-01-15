import fs from "fs";

export function getBlogNameList() {
   const folder = `./public/blogs/`;
   const files = fs.readdirSync(folder);
   if (files.length === 0) {
      return [];
   }
   const blogs = files.map((file) => file.replace(".md", ""));
   return blogs;
}