function getAllBlogs() {
   const folder = `./public/blogs/`;
   const files = fs.readdirSync(folder);
   if (files.length === 0) {
      return [];
   }
   const blogs = files.map((file) => file.replace(".md", ""));
   return blogs;
}

export default function Home() {
   return (
      <main>
         <p> some text here </p>

      </main>
   )
}
