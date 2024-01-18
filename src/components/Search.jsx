import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogList, setState } from "../redux/appSlice";
import { searchBlogs } from "../lib/utils";

export default function Search() {
   const dispatch = useDispatch();
   const states = useSelector((store) => store.app);
   const { blogList, searchText } = states;

   useEffect(() => {
      if (searchText.length !== 0) {
         let filteredList = searchBlogs(searchText, blogList);
         dispatch(setState("blogList", filteredList));
      } else if (searchText.length === 0) {
         dispatch(getBlogList());
      }
   }, [searchText]);

   function handleSearch(event) {
      const text = event.target.value;
      dispatch(setState("searchText", text));
   }

   return (
      <div className="flex justify-end m-4 ">
         <input
            type="text"
            className="border-2 border-slate-300 rounded-md w-96 h-10 font-semibold text-lg p-1"
            placeholder="Search by name or category"
            value={searchText}
            onChange={handleSearch}
         ></input>
      </div>
   );
}
