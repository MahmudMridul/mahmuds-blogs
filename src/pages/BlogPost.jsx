import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getMarkdownFile, setPageInfo } from "../lib/utils";
import { useLoaderData, useLocation } from "react-router-dom";

export async function loader({ params }) {
   const blog = await getMarkdownFile(
      `${process.env.PUBLIC_URL}/blogs/${params.blogID}.md`
   );
   return { blog };
}

export default function BlogPost() {
   const { blog } = useLoaderData();
   const { state } = useLocation();

   useEffect(() => {
      const { description, keywords, name } = state.info;
      setPageInfo(name, description, keywords);
   }, [state.info]);

   return <ReactMarkdown children={blog}></ReactMarkdown>;
}
