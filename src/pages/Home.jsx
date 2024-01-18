import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { setPageInfo } from "../lib/utils";

export default function Home() {
   const states = useSelector((store) => store.app);
   const { isLoading } = states;

   useEffect(() => {
      const title = "Mahmud's Blogs";
      const desc = "Abdullah Al Mahmud's Blogs";
      const keywords = "Abdullah Al Mahmud, Blogs";
      setPageInfo(title, desc, keywords);
   }, []);

   return (
      <div>
         <h1>
            <Link to={"/"}>Mahmud's Blogs</Link>{" "}
         </h1>
         <hr></hr>

         {isLoading ? <Loading /> : null}

         <div>
            <Outlet />
         </div>
      </div>
   );
}
