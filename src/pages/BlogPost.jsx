import React from "react";
import ReactMarkdown from "react-markdown";
import { getMarkdownFile } from "../lib/utils";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
   const blog = await getMarkdownFile(
      `${process.env.PUBLIC_URL}/blogs/${params.blogID}.md`
   );
   return { blog };
}

export default function BlogPost() {
   const { blog } = useLoaderData();
   return <ReactMarkdown children={blog}></ReactMarkdown>;
}
