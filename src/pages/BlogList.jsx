import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogList } from "../redux/appSlice";
import ListItem from "../components/ListItem";
import Search from "../components/Search";

export default function BlogList() {
   const dispatch = useDispatch();
   const states = useSelector((store) => store.app);
   const { blogList } = states;

   useEffect(() => {
      if (blogList.length === 0) {
         dispatch(getBlogList());
      }
   }, [blogList]);

   return (
      <div>
         <Search />
         <ul>
            {blogList.map((blog, index) => {
               return <ListItem blog={blog} key={index} />;
            })}
         </ul>
      </div>
   );
}
