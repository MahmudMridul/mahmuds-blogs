import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ blog }) {
   return (
      <li className="bg-zinc-100 p-2 mt-2 rounded-md hover:bg-zinc-200">
         <Link to={`blogs/${blog.fileName}`} state={{ info: blog }}>
            <h6 className="">{blog.name}</h6>
            <div> Category: {blog.category} </div>
            <div> Published: {blog.published} </div>
         </Link>
      </li>
   );
}
